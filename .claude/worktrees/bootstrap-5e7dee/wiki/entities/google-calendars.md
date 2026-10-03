---
title: Google calendars
type: entity
tags: [calendar, reference]
created: 2026-08-15
updated: 2026-08-15
sources:
  - raw/sessions/2026-08-16-second-brain-scaffold.md
---

# Google calendars

Inventory of the calendars visible to the connected Google account, as of
2026-08-15. `/digest` and `/bootstrap` read these. Access role on the primary is
`owner`, and the connector grants write as well as read.

This page records **structure only** — which calendars exist and what each is
for. Event contents are transient and belong in `daily/` notes, not here.

## Primary

| Calendar | ID | TZ |
|---|---|---|
| Matt Pursley - Gmail | `mpursley@gmail.com` | America/New_York |

## Family

| Calendar | ID | TZ |
|---|---|---|
| dashpursley@gmail.com | `dashpursley@gmail.com` | America/Vancouver |
| babypursley@gmail.com | `babypursley@gmail.com` | America/Vancouver |
| Family | `family11826645715179373471@group.calendar.google.com` | UTC |
| Appointments | `5d0bdc4a5fd48a0a844bb6e3aa9036ca61d741d058bcced5135829c014021b49@group.calendar.google.com` | America/New_York |
| LWRHS Band | `63fa8762c65b470e80bc187f0ea7a92eed1139edf5e311a2d87b58205fe4b372@group.calendar.google.com` | UTC |

## Interest and subscribed feeds

| Calendar | ID | TZ |
|---|---|---|
| Game Tournaments | `3fad17ac5fc06185b2b2bc50f8e2e7d735807470ed29675840e1ed6c3f870075@group.calendar.google.com` | America/New_York |
| Florida Family Friendly Events | `d06fbb8d6ddd8e3f686af94299e7154f5897120ebb740c36c1da37688da8991f@group.calendar.google.com` | America/New_York |
| Global Rocket Launches | `nextspaceflight.com_l328q9n2alm03mdukb05504c44@group.calendar.google.com` | UTC |
| Weather for Bradenton | `rl9jq7akke8aaf4vhkd288fnsnonkdrq@import.calendar.google.com` | UTC |
| Holidays in United States | `en.usa#holiday@group.v.calendar.google.com` | America/New_York |

## Notes for reading them

Timezones are inconsistent — several calendars are stored in UTC and two in
America/Vancouver, while the owner is America/New_York. Normalise to
America/New_York before presenting times, and see
[Claude Code environment](../concepts/claude-code-environment.md) for the
related container-clock problem.

The subscribed feeds (rocket launches, weather, holidays) are noise for most
purposes. A digest should default to the primary plus the family calendars
unless asked otherwise.

**Unconfirmed:** which calendars the owner actually wants in a daily digest.
The grouping above is inferred from calendar names, not stated.
