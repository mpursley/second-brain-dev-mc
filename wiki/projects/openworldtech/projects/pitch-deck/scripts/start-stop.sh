#!/bin/bash

# Navigate to the project root directory
cd "$(dirname "$0")/.."
SCRIPT_DIR=".run"
mkdir -p "$SCRIPT_DIR"

PID_FILE="$SCRIPT_DIR/dev.pid"
LOG_FILE="$SCRIPT_DIR/dev.log"
PORT=5002
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
    echo "  start     Start the Vite server (port $PORT)"
    echo "  stop      Stop the server"
    echo "  restart   Restart the server"
    echo "  status    Check status of the server"
    echo "  logs      Tail logs"
    echo "  --help    Show this help message"
    echo ""
    echo "Options:"
    echo "  -p, --port <port>       Set the Vite server port (default: 5002)"
    echo "  -f, --force             Force kill existing processes on the required ports"
}

start_server() {
    # Check if port is already in use
    PORT_PID=$(lsof -t -i :$PORT)
    if [ ! -z "$PORT_PID" ]; then
        if [ "$FORCE" = true ]; then
            echo -e "${YELLOW}Port $PORT is occupied. Force killing PID(s): $PORT_PID...${NC}"
            echo "$PORT_PID" | xargs kill -9
            sleep 1
        else
            echo -e "${RED}Error: Port $PORT is already in use by PID(s): $PORT_PID. Use --force.${NC}"
            exit 1
        fi
    fi

    # Start Vite Server
    echo -e "Starting Vite server on port $PORT..."
    nohup npm run dev -- --port $PORT --host localhost --strictPort > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    
    echo -e "${GREEN}Server started successfully.${NC}"
    echo -e "URL: ${CYAN}http://localhost:$PORT${NC}"
}

stop_server() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p $PID > /dev/null; then
            echo "Stopping process $PID..."
            kill $PID
        fi
        rm "$f"
    fi
    # Also cleanup by port just in case
    lsof -ti :$PORT | xargs kill -9 2>/dev/null
    echo -e "${GREEN}Server stopped.${NC}"
}

show_status() {
    PIDS=$(lsof -t -i :$PORT | xargs)
    if [ ! -z "$PIDS" ]; then
        echo -e "Status: ${GREEN}RUNNING${NC} (PIDs: $PIDS) on ${CYAN}http://localhost:$PORT${NC}"
    else
        echo -e "Status: ${RED}STOPPED${NC}"
    fi
}

# Parse arguments
COMMAND=$1
shift

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -p|--port) PORT="$2"; shift ;;
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
