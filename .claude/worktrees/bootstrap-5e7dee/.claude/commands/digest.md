---
description: Write today's daily note — calendar, open todos, loose ends
argument-hint: [optional: date, defaults to today]
---

Write the daily note. Read `CLAUDE.md` first if you have not this session.

Date: $ARGUMENTS

Resolve the date **before anything else** — this command is the most
timezone-sensitive one in the repo:

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

The owner is on the **US East Coast (`America/New_York`)**; the container runs
UTC. "Today" means today in Eastern. A digest written after 8pm local from
container time would file tomorrow's note and pull the wrong day's events.

Steps:

1. If Google Calendar is connected, pull the day's events across all calendars,
   using an Eastern day boundary (00:00–23:59 ET, not UTC). Several calendars
   are stored in UTC and two in `America/Vancouver` — **convert every event to
   Eastern before writing it down**, and append `ET` to displayed times.
   If the connector is unavailable, skip the section rather than leaving a
   placeholder. See `wiki/entities/google-calendars.md` for the inventory.
2. Read `todo/` for anything open and due on or before this date.
3. Check `raw/` for sources captured since the last daily note that have not
   been ingested yet.
4. Write `daily/YYYY-MM-DD.md`:

   ```markdown
   ---
   title: <weekday, Month D, YYYY>
   type: daily
   created: YYYY-MM-DD
   updated: YYYY-MM-DD
   ---

   # <weekday, Month D, YYYY>

   ## Schedule
   <events with times, or omit the section entirely>

   ## Due
   <open todos due today or overdue, linked to their list>

   ## Uncompiled
   <raw sources awaiting /ingest, or omit>

   ## Notes
   <empty — space for the day>
   ```

5. Append to `wiki/log.md`: `<date> <time>  digest  daily/<date>.md`.

If the note already exists, update the Schedule/Due/Uncompiled sections and
leave **Notes** untouched — that section is the owner's, never overwrite it.

Keep the note short. It is a launchpad for the day, not a report.

Then the four-heading summary from **Command output** in `CLAUDE.md`. For a
digest, keep it to the note's path, anything you could not pull and why (a
missing connector, most likely), and the first thing on the schedule.
