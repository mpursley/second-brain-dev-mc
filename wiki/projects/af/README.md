# Assistant-Fitness.com
Website and Mobile App for tracking and useful insights for fitness, food, vitamins, sleep and more!

## Remote Access (ngrok)
To easily test the app on your mobile device or an external network, you can expose your local development server using `ngrok`.

1. Sign up at [ngrok.com](https://ngrok.com) and get your auth token.
2. Authenticate ngrok locally (only needed once):
   ```bash
   npx ngrok config add-authtoken <YOUR_TOKEN>
   ```
3. Run the ngrok tunnel pointing to the dev server port (4220):
   ```bash
   npx ngrok http 4220
   ```
4. You can check the active ngrok URL anytime by running:
   ```bash
   ./scripts/start-stop.sh status
   ```

## Versioning
To bump the version of the app across the web, Android, and iOS builds, use the `bump_version.sh` script:

```bash
# Auto-increment the patch version (e.g. 2.0.3 -> 2.0.4)
./scripts/bump_version.sh

# Or specify an exact version:
./scripts/bump_version.sh 2.1.0
```

This script will automatically:
- Update `package.json`
- Update Android `build.gradle` `versionCode` and `versionName`
- Update iOS `Info.plist` and `project.pbxproj`
- **Create and switch to a new git branch** named `dev_v[version]` (e.g., `dev_v2.0.4`) so you can easily revert or track changes specific to that release.

## Building Native Apps
For instructions on how to build, test, and release the iOS and Android versions of the app, please refer to the [Native Build Instructions](docs/BUILD.md).