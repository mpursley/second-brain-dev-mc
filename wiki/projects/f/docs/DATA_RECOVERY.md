# Backups and Data Recovery

This document outlines the standard operating procedures for safeguarding user data, configuring disaster recovery backups, and recovering from accidental data loss within Goal Tracker.

---

## 1. Backup & Disaster Recovery Infrastructure

We do **not** run manual, per-user daily cron jobs or JSON dumps, as this scales poorly and is difficult to maintain. Instead, we rely on Google Cloud Firestore's native backup system and cross-project syncing.

### Part A: Native Firestore Backups (Primary Project)
Backups are managed directly via the **Google Cloud Console > Firestore > Data > Backups** dashboard in the `goal-tracker-live` project.
- **Point-in-Time Recovery (PITR):** Enabled to allow recovering data from any specific microsecond within the last 7 days.
- **Scheduled Backups:** Configured to run **Daily** with a retention of **14 weeks**, meaning any catastrophic loss can be reversed going back over three months.

*Note: These native backups live inside the project. If the project gets suspended, these backups become inaccessible. That's why we need Parts B and C.*

### Part B: Bucket Export (Primary Project)
To move data to another account, we automatically export the database to a standard Cloud Storage Bucket.
- **Bucket:** `goal-tracker-live-db-exports`
- **Automation:** A **Cloud Scheduler** job (`daily-firestore-export`) runs at `0 2 * * *` (2:00 AM every day). It sends a POST request to the Firestore `exportDocuments` REST API using the Default Compute Engine Service Account.

### Part C: Cross-Project Sync (Secondary Project)
Google's **Storage Transfer Service** is used to automatically pull the data into the secondary "safe" account (`goal-tracker-live-backups`).
- **Destination Bucket:** `dr-goal-tracker-live-backups`
- **Permissions:** The Transfer Service Agent from the secondary account is granted `Storage Object Viewer`, `Storage Legacy Bucket Reader`, and `Storage Object Admin` roles on the primary bucket, and `Storage Legacy Bucket Writer` on the destination bucket.
- **Transfer Job:** Scheduled to run daily to move objects from the primary bucket to the secondary safe bucket.

### Part D: Tertiary Cross-Project Sync (Open World Game Account)
As an ultimate failsafe, the backups are additionally synced to a completely separate GCP account (`openworldgameio@gmail.com`).
- **Destination Bucket:** `dr-goal-tracker-live-backups-owg` (in project `abstract-sunset-494520-c2`).
- **Transfer Job:** A second Storage Transfer Service job runs daily to pull the same database exports into this tertiary account.
- **Storage Management:** To avoid conflicts between the multiple transfer jobs, objects in the primary `goal-tracker-live-db-exports` bucket are automatically deleted by a **Cloud Storage Lifecycle Rule** after 3 days.

**Result:** Every night, your primary project exports the database to a bucket. Both your secondary and tertiary backup accounts reach across the internet, grab the backup, and store it securely!

---

## 2. Resolving a Data Incident (Single User Restore)

If a user contacts support stating their data has been corrupted or deleted (e.g., "My phone bugged out and deleted all my activity logs from the last 3 weeks!"), follow this exact workflow to minimize disruption to the live system:

1. **Locate the Backup:** Go to the Google Cloud Console, find the Scheduled Backup taken right *before* the incident occurred.
2. **Restore to a Clone:** Click "Restore", but configure it to restore into a **BRAND NEW, TEMPORARY** database instance (e.g., `restored-db-user-incident`).
   - *CRITICAL:* Do not restore directly into `(default)`. This will overwrite the live database and revert ALL users!
3. **Execute the Restore Script:**
   - Once the temporary clone finishes spinning up, run the dedicated restore script from the `scripts` directory.
   - Run the script with the user's email and the temporary database ID:
     ```bash
     cd scripts
     ./restore-user-data.sh user@example.com restored-db-user-incident
     ```
     * **`user@example.com`**: The email of the user to restore. You can verify the email using `./manage-users.sh -l user@example.com`.
     * **`restored-db-user-incident`**: The ID of the temporary cloned database you created in step 2.
   - The script will automatically query the cloned database for all the user's subcollections (activity, food, sleep, etc.) and merge them back into the live `(default)` database seamlessly.
4. **Clean Up:**
   - Once the user confirms their profile looks correct, simply delete the temporary `restored-db-user-incident` database to halt any extra billing for it.

---

## 3. Point-In-Time Recovery (PITR) Incident

For ultra-fast, highly granular recoveries within the last 7 days, Point-In-Time Recovery (PITR) can be used.
- **Use Case:** Reversing an accidental deletion that happened 5 minutes ago.
- **Mechanism:** PITR maintains a continuous change history. You can query the database for a user's document state down to the exact microsecond without needing to mount a massive full-database scheduled backup clone.
