---
description: Triage and tidy the task lists
argument-hint: [optional: new task to add, or a project to focus on]
---

Triage `todo/`. Read `CLAUDE.md` first if you have not this session.

Input: $ARGUMENTS (if this looks like a new task, add it to `todo/inbox.md`
first, then continue with the sweep)

Resolve today's date before comparing anything against `due:` or `done:`:

```bash
TZ=America/New_York date "+%Y-%m-%d"
```

The owner is on the **US East Coast (`America/New_York`)**; the container runs
UTC. Using container time in the evening makes today's tasks look overdue and
sweeps completed items a day early.

Steps:

1. Read every file in `todo/`.
2. Move items out of `inbox.md` into the right `todo/<project>.md` when the
   project is obvious. Create a project list when three or more inbox items
   share one. Leave genuinely unsorted items in the inbox — do not force them.
3. Sweep completed items: anything marked `- [x]` with a `done:` date more than
   fourteen days old moves under `## Done` at the bottom of its file.
4. Flag anything overdue (`due:` before today) and anything that has sat in the
   inbox for more than thirty days without moving.
5. If a task has grown into a project, say so and offer to create
   `wiki/projects/<slug>.md` — do not create it unprompted.
6. Bump `updated:` on every file you touched.
7. Append to `wiki/log.md`: `<date> <time>  todo  <n> sorted, <n> swept`.

End with the four-heading summary from **Command output** in `CLAUDE.md` —
**Did / Skipped / Uncertain / Next**. Cover what is overdue, what is due this
week, and what has gone stale.

Keep it to a short list. **Do not read the entire backlog back** — the lists are
in the repo, and a summary that reprints them is worse than none.
