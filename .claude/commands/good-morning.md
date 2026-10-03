---
description: Catch up on yesterday and surface what today needs
argument-hint: [optional: something specific to focus on]
---

Morning catch-up. Focus: $ARGUMENTS

Read-only. This orients the day; it does not change anything. `/digest` writes
the daily note, `/todo` triages tasks — offer them at the end rather than doing
their work here.

---

## 0. Establish the date

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

The owner is on the **US East Coast (`America/New_York`)**; the container runs
UTC. Getting this wrong makes "yesterday" and "today" both wrong, which defeats
the whole command. Yesterday is the Eastern calendar day before this one.

## 1. Check access

Report what is connected and what is not, **every time**. `/bootstrap` probes
only what the session focus implies; this one probes everything, because the
point of a morning check is seeing the whole picture before deciding what the
day can actually contain.

Order matters:

1. **`ListConnectors` first.** It distinguishes two states the tool listing
   cannot tell apart. `connected: true` with `enabledInChat: false` means the
   connector is authenticated but toggled off for *this chat* — the fix is the
   chat's connector settings, not re-authenticating. Genuinely disconnected is a
   different problem.
2. **`ToolSearch` for the tools themselves.** Schemas are deferred; a name
   missing from the listing is not proof of anything.
3. **If something looks missing, search once more before reporting it.** Servers
   can still be connecting at session start, and connectors have come back
   minutes later unprompted. A stale negative is worse than a slow answer.

| Capability | Read-only probe |
|---|---|
| second-brain repo | `git -C <repo> status -sb`, `git fetch origin`, and whether `dev` is behind `main` |
| GitHub | `get_me`, plus any open PRs |
| Google Calendar | `list_calendars` |
| Gmail | `list_labels` |
| Google Drive | `list_recent_files`, small page size |
| Chrome | `list_connected_browsers` — his real browser with his logins, when present |
| Slack | a lightweight search or channel list |

Report a compact table: capability, working or not, and one detail that proves
it — calendar count, GitHub login, current branch, device name.

Two things to call out rather than bury:

- **Calendar down means this command cannot do its main job.** Say so plainly.
  Never present an empty schedule as a clear day.
- **`dev` behind `main`** means other sessions have landed work. Name it — the
  next thing that writes here will otherwise branch off stale state.

Probe only. Never send, write, or change anything during the check.

## 2. Yesterday

What happened, from the record rather than memory:

- `wiki/log.md` — entries stamped yesterday.
- `git log --since=... --until=...` on the Eastern day boundary. Commits, not
  diffs.
- `todo/` — items with `done:` yesterday.
- Calendar, if available — events that actually occurred. Convert to Eastern.

Then the part that matters more: **what was started and not finished.** An open
PR, a page marked `Unconfirmed:`, a task moved but not closed. Yesterday's loose
ends are usually today's real work.

If nothing happened yesterday, say so in one line and move on.

## 3. Today

- **Calendar** — today's events across the calendars that matter, in Eastern
  with `ET` appended. See `wiki/entities/google-calendars.md`; the subscribed
  feeds are usually noise. If the connector is unavailable, say so plainly —
  do not present an empty schedule as a clear day.
- **Due** — todos with `due:` today or earlier. Overdue first.
- **In flight** — open PRs, and anything the repo shows as half-done.

## 4. Waiting on the owner

Scan `wiki/` for `Unconfirmed:` and for questions recorded but unanswered, and
`todo/` for items blocked on a decision only he can make.

Keep this short and only list things that are actually blocking. A decision that
has sat for a week without mattering is not blocking; say nothing about it.

## 5. Summary

Use these headings rather than the four in **Command output** — this command
reports rather than changes:

- **Access** — the probe table. Anything down, and what it blocks. If everything
  is up, one line saying so is enough.
- **Yesterday** — what happened and what was left open.
- **Today** — schedule, then what is due.
- **Waiting on you** — decisions blocking progress, or nothing.
- **Suggest** — the single most useful thing to do first, and whether `/digest`
  or `/todo` is worth running.

Roughly ten lines plus the access table. Do not reprint the todo lists or the
whole calendar — name what is due and what is next, and let him open the files.

Report what the record actually says. If the calendar is down or the log is
empty, that is the finding, not something to paper over.
