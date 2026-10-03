---
title: Claude Code environment
type: concept
tags: [tooling, claude-code, mcp]
created: 2026-08-15
updated: 2026-08-16
sources:
  - raw/sessions/2026-08-16-second-brain-scaffold.md
  - raw/sessions/2026-08-15-tasks-resume-ingest.md
  - raw/sessions/2026-08-16-boat-coffee-bar-good-morning.md
  - raw/sessions/2026-08-16-browser-access-limits.md
  - raw/sessions/2026-08-16-coffee-bar-sourcing.md
  - raw/tooling/2026-08-16-remote-dev-access-goal.md
---

# Claude Code environment

Operational facts about running Claude Code sessions against this brain. These
shaped how the [session commands](../projects/second-brain.md) are written, and
they cost time to discover, so they are recorded rather than re-learned.

## MCP tools are deferred

Tool schemas are not loaded at session start. A tool is announced by name only
and must be fetched with `ToolSearch` before it can be called — invoking it
before that fails with a validation error.

**A tool missing from the listing is not proof it is unavailable.** Search
before reporting anything as inaccessible. Servers can also still be connecting
at session start, in which case a search that comes back empty may succeed a
moment later.

## Check the attached repos before reaching for the web

Sessions come with git repos already cloned under `/home/user/`. As of
2026-08-15 that is `second-brain`, `mpursley.github.io`, and
`mpursley-dotfiles`.

`mattpursley.com` is a GitHub Pages build of `mpursley.github.io` — its `CNAME`
says so — and that clone was in the working directory the entire session. It was
still fetched over the web first, hit the egress block, and fell back to a
search-index summary that had no career history, employers, dates, or education.
The full résumé was one `cat` away.

**When a source is a site, a doc, or a file the owner references, look for it in
the attached repos first.** The local copy is faster, complete, versioned, and
immune to egress policy.

## Two browsers, and only one of them is his

There are two distinct browser surfaces, and the difference decides whether a
task is possible.

**His real Chrome** is reachable through the `claude-in-chrome` tools. As of
2026-08-16 afternoon, `list_connected_browsers` returns a macOS device with
`isLocal: true`, and pages load **with his logins intact** — `amazon.com`
returned his signed-in session, order history, and delivery address. This can
stand in for him on a retail site.

**A separate in-app browser** also exists. It has no cookies, no logins, and no
account state, so a marketplace will often serve it a bot check rather than
results. Use it for public pages; use Chrome when the task needs his session.

**This capability appeared partway through 2026-08-16.** Earlier the same day
this page recorded, correctly at the time, that no bridge to his machine
existed and that an open Chrome tab could not be read. It could not, and then a
few hours later it could. Treat browser access like any other connector — probe
it, do not assume from a previous session's answer in either direction.

Two habits survive the change:

- **Screenshots he pastes are still the fastest path** when he is already
  looking at the thing. Images are read directly.
- **Read specifications off the product page, not the search result.** Amazon
  search titles compress and mangle dimensions, and the axis order in
  `Product Dimensions` is unreliable — the bullet text is usually the honest
  one. On 2026-08-16 a workbench listed as `24"D x 60"W x 39.5"H` turned out to
  have a worktop that only reached 37.5 in.

Search-result pages are too large to run element-finding tools against; a
`find` call against Amazon results failed at 373k tokens. Extract what is needed
with a small script against the DOM instead of pulling whole-page text.
- **Or step out of the container entirely.** He can SSH into his home laptops
  over Tailscale and run Claude Code there, which has his files, his browser and
  his logins — see [remote dev access](../projects/remote-dev-access.md). That is
  the general escape hatch for anything the container cannot reach, and he asked
  to be reminded of it.

## Connectors drop and reconnect mid-session

Observed repeatedly on 2026-08-15. Google Calendar, Gmail, Drive, Slack and
IFTTT were entirely absent at session start, appeared partway through, then
disconnected again. The GitHub server disconnected and later reconnected.

Consequences:

- A negative result from earlier in a session is not durable. Re-search.
- `ListConnectors` distinguishes two failure modes that look identical from the
  tool listing. `connected: true` with `enabledInChat: false` means the
  connector is authenticated but toggled off for this chat — fixed in the
  chat's connector settings, not by re-authenticating. Google Calendar was in
  exactly this state on 2026-08-15.
- Any command depending on a connector must degrade gracefully rather than
  halt — report the gap, note what work it blocks, continue with what works.
- `/bootstrap` probes only what the session focus implies, so a connector that
  was never checked is explicitly not a connector known to be healthy.

## The container clock is UTC

The owner is on the **US East Coast — `America/New_York`**, which observes
daylight saving (`EDT` UTC−4 roughly March–November, `EST` UTC−5 otherwise). The
execution container runs UTC. On 2026-08-15 container time read `02:52 UTC`,
which was `22:52` locally — a different calendar day.

**Date-stamped files written from container time land on the wrong day** during
the evening offset window, roughly 20:00–24:00 local. This affects
`daily/YYYY-MM-DD.md` filenames, `captured:`/`created:`/`updated:` frontmatter,
`due:` and `done:` tags in `todo/`, and `wiki/log.md` timestamps.

The fix, and `tzdata` is present in the container so it works:

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

Never hardcode an offset — the zone name handles the DST switch. As of
2026-08-15 this rule is written into the **Time** section of `CLAUDE.md` and
into `/bootstrap`, `/wrap`, `/digest`, `/capture`, and `/todo`. `/bootstrap`
establishes local time as its first act, before probing anything.

**Read the clock at the moment of writing.** Knowing the right zone is not
enough. Three log entries were once written by estimating forward from the
previous line and landed in the future — `23:58` and `00:05` when it was
actually `23:50`. Run the command again rather than reusing a value from
earlier in the session.

**A long session can cross midnight.** The session of 2026-08-15 ran into the
morning of the 16th, and files first stamped from a reading taken hours earlier
had the wrong date by the time they were written. A time established at
`/bootstrap` is only good for a short session; re-check before any date-stamped
write.

Reading times has the same problem in reverse: calendar events and email arrive
in assorted zones — see [Google calendars](../entities/google-calendars.md),
where several are stored in UTC and two in `America/Vancouver`. Convert to
Eastern before recording or presenting, and write the zone explicitly when a
time could be misread.

## The repo is private

`mpursley/second-brain` is private and holds personal data — calendar, contacts,
health, work. Its contents must not be pushed to external services, pasted into
public issues, or quoted into PR bodies. PR descriptions name files and describe
shapes; the content stays in the diff.

## Git authenticates as `openworldtechio`, not `mpursley`

Both `gh` and git's credential helper use the `openworldtechio` account. The
`mpursley` account is in the keyring but inactive, and the owner wants it that
way — most of his projects live under openworld.

On 2026-08-16 this made `git fetch` fail with **"Repository not found"**, which
reads like a deleted or renamed repo but is really a visibility error: the
active account could not see a private repo owned by another. He granted
`openworldtechio` contributor access and it resolved immediately.

The account now holds the standard **Write** role — `pull`, `push` and `triage`
true; `admin` and `maintain` false. That covers every session command including
`/wrap-pr`. Only repo settings, branch protection and deletion are out of reach.

Two consequences worth remembering:

- Commits to this repo are authored as **Open World Tech**. A per-repo
  `git config user.email` would change that; he has not asked for it.
- A 404 from the GitHub API on a repo that plainly exists means check which
  account is active before concluding anything about the repo.
