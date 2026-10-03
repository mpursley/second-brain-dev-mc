# Operation log

Append-only. One line per operation, newest at the bottom.

Format: `YYYY-MM-DD HH:MM  <op>  <summary>`

Times are **America/New_York** (US East Coast). The container clock is UTC —
convert with `TZ=America/New_York date` before stamping. See the **Time**
section of `CLAUDE.md`.

```
2026-08-15 21:39  init  Repository scaffolded — raw/, wiki/, todo/, daily/, commands.
2026-08-15 22:10  init  Branch workflow (dev -> main) and PR template added.
2026-08-15 22:40  init  Session commands added — bootstrap, wrap, wrap-pr.
2026-08-15 22:55  wrap  4 pages, 4 todos — scaffold session compiled.
2026-08-15 23:05  wrap  Timezone rule added to schema and 5 commands.
2026-08-15 23:12  wrap-pr  #1 Add session commands, first wiki ingest, and the Eastern-time rule.
2026-08-15 23:20  capture  raw/exports/2026-08-15-assistant-app-tasks.md
2026-08-15 23:22  todo  7 project lists imported, 21 tasks, 2 follow-ups.
2026-08-15 23:35  ingest  2 sources -> 2 pages (matt-pursley, laminr); 1 stub, 4 todos.
2026-08-15 23:40  capture  raw/web/2026-08-15-resume-mpursley-github-io.md (supersedes search summary)
2026-08-15 23:42  ingest  Resume -> matt-pursley rewritten, laminr updated; 1 stub, 3 todos.
2026-08-15 23:26  wrap  2 pages updated, 1 todo — local-repos lesson compiled.
2026-08-15 23:40  init  Summary convention added to schema and all 9 commands.
2026-08-15 23:50  wrap-pr  #2 Import 21 tasks across 7 projects, add Laminr and owner pages, ingest the resume.
2026-08-15 23:56  ingest  Owner correction: Laminr is not the stealth startup; 2 pages fixed, 1 todo closed.
2026-08-16 09:48  capture  raw/boat/2026-08-16-trailer-lights-and-solar.md
2026-08-16 09:50  ingest  Boat -> 5 pages (overview + 4 procedures); 2 todos. /good-morning added.
2026-08-16 09:56  capture  raw/patio/2026-08-16-coffee-bar.md + 3 images; 6 todos.
2026-08-16 10:02  ingest  1 source -> wiki/projects/patio-coffee-bar.md; todos relinked, 1 added.
2026-08-16 10:15  wrap  3 pages updated, 3 todos added 1 closed — clock-reading lesson compiled.
2026-08-16 11:30  wrap-pr  #3 Add the boat notes, the patio coffee bar project, /good-morning, and the procedure page type.
2026-08-16 11:32  capture  raw/patio/2026-08-16-coffee-bar-dimensions.md; project page updated, 1 todo added.
2026-08-16 11:59  wrap  1 page updated — browser access limits compiled. Thin segment.
2026-08-16 12:14  ingest  1 source -> wiki/decisions/dev-environment.md; standing reminder added to CLAUDE.md.
2026-08-16 12:19  ingest  Owner correction: goal is phone-first remote access. Page moved to projects/remote-dev-access.md and rewritten; 3 todos.
2026-08-16 12:23  capture  raw/health/2026-08-16-aetna-dob-mismatch.md; 1 todo at top of inbox, due tonight.
2026-08-16 12:52  wrap  2 pages updated, 1 source; 4 todos added 1 closed — workbench category solves 38 in.
2026-08-16 13:04  wrap-pr  #4 Add remote dev access over Tailscale, the coffee bar sourcing findings, and standing reminders.
2026-08-16 13:07  ingest  Shortlist expanded to 8 candidates (4 bar, 4 lounge) on the coffee bar page; links only, no images.
```
