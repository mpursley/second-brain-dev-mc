#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$DIR")"
PID_FILE="$ROOT_DIR/dashboard.pid"
LOG_FILE="$ROOT_DIR/dashboard.log"

case "$1" in
  start)
    cd "$ROOT_DIR"
    if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
      echo "Dashboard is already RUNNING"
      exit 0
    fi
    echo "Starting Projects Dashboard..."
    if [ ! -d "node_modules" ]; then
      npm install
    fi
    if [ ! -d "dist" ]; then
      npm run build
    fi
    nohup node server.js > "$LOG_FILE" 2>&1 &
    PID=$!
    echo $PID > "$PID_FILE"
    echo "Projects Dashboard started with PID $PID"
    ;;
  stop)
    if [ -f "$PID_FILE" ]; then
      PID=$(cat "$PID_FILE")
      if kill -0 $PID 2>/dev/null; then
        echo "Stopping Projects Dashboard (PID $PID)..."
        kill $PID
        rm "$PID_FILE"
      else
        echo "PID file exists but process is not running. Cleaning up."
        rm "$PID_FILE"
      fi
    else
      echo "Not running"
    fi
    ;;
  status)
    if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
      echo "RUNNING"
    else
      echo "STOPPED"
    fi
    ;;
  logs)
    if [ -f "$LOG_FILE" ]; then
      tail -n 100 "$LOG_FILE"
    else
      echo "No log file found."
    fi
    ;;
  *)
    echo "Usage: $0 {start|stop|status|logs}"
    ;;
esac
