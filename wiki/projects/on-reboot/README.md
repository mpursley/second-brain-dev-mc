# Cross-Platform Startup Automation

This repository manages background tasks and automation scripts across multiple operating systems.

## Architecture

To support cross-platform configurations, the repository is split into OS-specific directories:

- `/macos/`: Contains the macOS-specific `on-reboot.sh` script, launchd `.plist` files, and macOS documentation.
- `/linux/`: Contains the Linux-specific `on-reboot.sh` script, systemd service files, and Linux documentation.

## Smart Wrapper

There is a root-level `./on-reboot.sh` wrapper script. When executed, it automatically detects your operating system (`Darwin` vs `Linux`) and forwards your command to the correct script in the respective subfolder. 

You can run `./on-reboot.sh {start|stop|status}` anywhere and it will seamlessly handle the underlying OS.
