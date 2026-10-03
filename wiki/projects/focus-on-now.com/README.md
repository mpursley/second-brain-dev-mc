# Goal-Tracker.live
Website and Mobile App for tracking and useful insights for goals, tasks, life and more!

## Remote Access (ngrok)
To easily test the app on your mobile device or an external network, you can expose your local development server using `ngrok`.

1. The repository now includes a local `ngrok.yml` configured with a dedicated auth token.
2. To start the tunnel and generate a unique URL for this project, run:
   ```bash
   npm run ngrok
   ```
3. You can check the active ngrok URL anytime by running:
   ```bash
   ./scripts/start-stop.sh status
   ```