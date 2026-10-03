# AGENTS.md

The schema for this repository lives in [`CLAUDE.md`](./CLAUDE.md).

This file exists so that agents following the `AGENTS.md` convention (Codex,
Cursor, Aider, and others) find the same instructions Claude Code reads. Treat
`CLAUDE.md` as canonical — read it before writing anything into `raw/`, `wiki/`,
`todo/`, or `daily/`.

Short version:

- `raw/` is immutable. Append sources, never edit them.
- `wiki/` is compiled knowledge. Rewrite pages in place; git holds the history.
- Every wiki page carries frontmatter and cites its sources.
- Every operation appends one line to `wiki/log.md`.
