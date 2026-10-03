# Project ONHOLD

There are items that were previously in the TODO.md file that are now on hold.

## Legend

- `[ ]` TODO
- `[I]` In progress
- `[C]` Complete
- `[X]` Deployed to Prod/Active version

## Tasks

### Web sizing

- [ ] Get the Web version to scale horizontally and also look good as the mobile app 

### Apple version

- [ ] build the Apple version and deploy it to the Iphone and Apple App store (beta)

### Tiers

- [x] set up three tiers.
- [ ] Add free tier has three interactions per hour / 10 limit per day. 
- [x] the pro tier has image recognition and 50 chat messages per day (Currently the free default).
- [ ] the MAX tier is unlimited  

### Backup and restore

- [x] Make sure that all the user data is backed up hourly and there's a mechanism to restore users data from any TIMESTAMP. 

### Chat bot personality

- [ ] Give the chat bot an appropriate personality. Energetic knowledgeable personal trainer. Allow the user to also customize set the personality, and save the personality into their firebase.

### Payments

- [ ] Add pay wall the interactions on the app and on the Web version 

### Data Export and Import

- [ ] Test that a user can export their data, then clean/clear their account and re-import for a backup file (Also, add a "warning: data imports are not garenteed. Data formats might change over time and not support a full data imports")

### Hourly Health Charts

- [ ] Add granular `bucket: 'hour'` queries to `useHealthSync` to collect hourly data for Steps, Active Calories, and Energy Expended.
- [ ] Implement a React charting library (e.g., Recharts) to render daily and hourly breakdown charts on the Activity page, matching the granular visualizations found in Google Fit or Samsung Health.

### Geo-Blocking / Regional Access

- [ ] Lock Apple App Store and Google Play Console distribution to US, CA, and EU regions.
- [ ] Configure Cloudflare free tier WAF to restrict web traffic access to authorized countries.
- [ ] Implement Firebase Auth Blocking Functions (`beforeCreate`) to explicitly reject new accounts originating from unauthorized IP ranges.

### Daily Checklist Reminders

- [ ] Add conditional daily reminders (like "Dinner Time", "Workout Time", etc.) to the Daily Checklist on the Dashboard.
