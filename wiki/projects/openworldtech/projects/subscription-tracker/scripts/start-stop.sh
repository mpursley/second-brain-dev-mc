#!/bin/bash

# Navigate to the project root directory
cd "$(dirname "$0")/.."
SCRIPT_DIR=".run"
mkdir -p "$SCRIPT_DIR"

PID_FILE="$SCRIPT_DIR/dev.pid"
LOG_FILE="$SCRIPT_DIR/dev.log"
API_PID_FILE="$SCRIPT_DIR/api.pid"
API_LOG_FILE="$SCRIPT_DIR/api.log"
PORT=4210
API_PORT=3000
FORCE=false

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

show_help() {
    echo "Usage: ./scripts/start-stop.sh [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start     Start the Vite server (port $PORT) and API server (port $API_PORT)"
    echo "  stop      Stop both servers"
    echo "  restart   Restart both servers"
    echo "  status    Check status of both servers"
    echo "  logs      Tail Vite logs"
    echo "  api-logs  Tail API logs"
    echo "  --help    Show this help message"
    echo ""
    echo "Options:"
    echo "  -p, --port <port>       Set the Vite server port (default: 4210)"
    echo "  -a, --api-port <port>   Set the API server port (default: 3000)"
    echo "  -f, --force             Force kill existing processes on the required ports"
}

start_server() {
    # Check if ports are already in use
    for p in $PORT $API_PORT; do
        PORT_PID=$(lsof -t -i :$p)
        if [ ! -z "$PORT_PID" ]; then
            if [ "$FORCE" = true ]; then
                echo -e "${YELLOW}Port $p is occupied. Force killing PID(s): $PORT_PID...${NC}"
                echo "$PORT_PID" | xargs kill -9
                sleep 1
            else
                echo -e "${RED}Error: Port $p is already in use by PID(s): $PORT_PID. Use --force.${NC}"
                exit 1
            fi
        fi
    done

    # Start API Server
    echo -e "Starting API server on port $API_PORT..."
    PORT=$API_PORT node server.js > "$API_LOG_FILE" 2>&1 &
    echo $! > "$API_PID_FILE"

    # Start Vite Server
    echo -e "Starting Vite server on port $PORT..."
    npm run dev -- --port $PORT --host localhost --strictPort > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    
    echo -e "${GREEN}Servers started successfully.${NC}"
    echo -e "Frontend: ${CYAN}http://localhost:$PORT${NC}"
    echo -e "API:      ${CYAN}http://localhost:$API_PORT${NC}"
}

stop_server() {
    # Stop Vite
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p $PID > /dev/null; then
            echo "Stopping Vite process $PID..."
            kill $PID
        fi
        rm "$PID_FILE"
    fi

    # Stop API
    if [ -f "$API_PID_FILE" ]; then
        PID=$(cat "$API_PID_FILE")
        if ps -p $PID > /dev/null; then
            echo "Stopping API process $PID..."
            kill $PID
        fi
        rm "$API_PID_FILE"
    fi

    # Also cleanup by port just in case
    lsof -ti :$PORT | xargs kill -9 2>/dev/null
    lsof -ti :$API_PORT | xargs kill -9 2>/dev/null
    echo -e "${GREEN}Servers stopped.${NC}"
}

show_status() {
    if [ -f "$PID_FILE" ] && ps -p $(cat "$PID_FILE") > /dev/null; then
        echo -e "Vite:  ${GREEN}RUNNING${NC} (PID: $(cat "$PID_FILE")) on ${CYAN}http://localhost:$PORT${NC}"
    else
        echo -e "Vite:  ${RED}STOPPED${NC}"
    fi

    if [ -f "$API_PID_FILE" ] && ps -p $(cat "$API_PID_FILE") > /dev/null; then
        echo -e "API:   ${GREEN}RUNNING${NC} (PID: $(cat "$API_PID_FILE")) on ${CYAN}http://localhost:$API_PORT${NC}"
    else
        echo -e "API:   ${RED}STOPPED${NC}"
    fi
}

# Parse arguments
COMMAND=$1
shift

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -p|--port) PORT="$2"; shift ;;
        -a|--api-port) API_PORT="$2"; shift ;;
        -f|--force) FORCE=true ;;
        *) echo "Unknown option: $1"; show_help; exit 1 ;;
    esac
    shift
done

case $COMMAND in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        stop_server
        start_server
        ;;
    status)
        show_status
        ;;
    logs)
        tail -f "$LOG_FILE"
        ;;
    api-logs)
        tail -f "$API_LOG_FILE"
        ;;
    --help|help)
        show_help
        ;;
    *)
        if [ -z "$COMMAND" ]; then
            show_help
        else
            echo "Error: Unknown command '$COMMAND'"
            show_help
            exit 1
        fi
        ;;
esac
