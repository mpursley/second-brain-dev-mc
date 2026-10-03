# todo/

Task lists as markdown. `inbox.md` is the catch-all; project lists live at
`todo/<project>.md`.

Format is GitHub task-list syntax so it renders in GitHub, Obsidian, and any
editor:

```markdown
- [ ] Open task  <!-- due:2026-08-20 -->
- [x] Closed task  <!-- done:2026-08-15 -->
```

Metadata goes in an HTML comment so it stays invisible in rendered views:
`due:`, `done:`, `waiting:`, `ref:` (a path into `wiki/`).

Completed items stay put for two weeks, then `/todo` sweeps them under `## Done`.
A todo that turns out to be a real project graduates to `wiki/projects/<slug>.md`
and the task links to it.
