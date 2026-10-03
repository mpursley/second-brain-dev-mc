---
description: Start a session — verify tool access, then load relevant context from the brain
argument-hint: <what this session will focus on>
---

Start of session. Focus: $ARGUMENTS

Do the two phases below and report both. Keep the whole thing short — this is a
preflight, not a research task. If the focus line is empty, do Phase 1 and then
ask what the session is about rather than guessing.

---

## Phase 0 — Establish the time

Do this first. Everything else in the session depends on it.

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

The owner is on the **US East Coast (`America/New_York`)**. The container runs
UTC, and the two are on different calendar days for four to five hours every
evening. Take the Eastern value above as "now" for the rest of the session —
every filename, frontmatter date, `due:` tag, and log timestamp uses it.

State the local date and time in your report, and if the container is on a
different calendar day, say so explicitly — that is precisely when dated files
get filed wrong.

See the **Time** section of `CLAUDE.md` for the full rule.

## Phase 1 — Verify access

MCP tools are deferred: their schemas are not loaded until you fetch them with
`ToolSearch`, and servers may still be connecting at session start. So:

1. Run `ToolSearch` for the capabilities you need before concluding anything is
   missing. A tool absent from the list is not proof it is unavailable — search
   first, and search again if a server was reported as "still connecting".
2. Probe with a **read-only** call. Never send, write, or delete anything
   during bootstrap.

**Always probe these**, whatever the focus:

| Capability | Read-only probe |
|---|---|
| second-brain repo | `git -C <repo> status -sb` and `git fetch origin` |
| GitHub | `get_me` |

**Probe these only if the focus line implies them.** Read the focus and decide;
when it is ambiguous, probe rather than skip.

| Capability | Probe | Implied by |
|---|---|---|
| Google Calendar | `list_calendars` | scheduling, meetings, the day/week, planning around events |
| Gmail | `list_labels` | email, threads, correspondence, following up with someone |
| Google Drive | `list_recent_files` (small page size) | documents, spreadsheets, decks, shared files |
| Other git repos | `list_repos`, else `git remote -v` per clone | work in a named repo other than second-brain |

Report a compact table: capability, working / unavailable / not needed, and one
detail that proves it (calendar count, GitHub login, current branch).

A connector you skipped is not a connector you know is healthy. If the session
later turns toward email, calendar, or Drive, probe it then — and say plainly
that it was not checked at startup rather than assuming it works.

**Connectors drop and reconnect mid-session.** If something is unavailable,
say so and continue with what works — do not stop the session. Note which
planned work is blocked by the gap so it can be picked up later.

Also confirm the repo is on the expected branch. Day-to-day work belongs on
`dev`; if it is on `main`, switch to `dev` before doing anything else.

---

## Phase 2 — Load context

Read `CLAUDE.md` first — it is the schema and it governs everything you write.

Then gather what bears on the focus line, in this order:

1. `wiki/index.md` to orient.
2. Grep `wiki/` for pages matching the focus. Read the ones that hit.
3. `todo/` — open items related to the focus, plus anything overdue.
4. The two or three most recent `daily/` notes, for what was in flight.
5. `wiki/log.md` tail, to see what the last few sessions did.
6. Only if the wiki is thin on the topic: check `raw/` for uncompiled sources,
   and flag that an `/ingest` is owed.

Do not invent context. If the brain has nothing on the focus, say exactly that
in one line — a clean "no prior context" is more useful than a padded summary.

Do not modify any files during bootstrap. It is read-only end to end.

---

## Summary

Bootstrap loads context rather than changing anything, so it uses its own
headings instead of the four in **Command output**. Same rules though: roughly
ten lines, no restating the steps, report what is actually there.

- **Time** — local date and time, and whether the container is on a different
  calendar day.
- **Access** — the probe table. Working, unavailable, or not needed. Name what
  a gap blocks.
- **Known** — what the brain already has on this focus, linked to the pages.
- **Open** — related todos and unfinished threads.
- **Gaps** — what you would need that the brain does not have, including
  anything on the topic marked `Unconfirmed:` or inferred rather than sourced.
- **Next** — the single most useful place to start.
