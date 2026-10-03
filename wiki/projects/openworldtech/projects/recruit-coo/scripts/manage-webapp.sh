#!/bin/bash

# Navigate to the webapp/scripts directory and call start-stop.sh
SCRIPT_DIR="$(cd "$(dirname "$0")/../webapp/scripts" && pwd)"

if [ -f "$SCRIPT_DIR/start-stop.sh" ]; then
    "$SCRIPT_DIR/start-stop.sh" "$@"
else
    echo "Error: webapp/scripts/start-stop.sh not found."
    exit 1
fi
