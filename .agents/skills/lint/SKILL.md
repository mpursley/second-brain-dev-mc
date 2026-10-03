---
name: lint
description: >-
  Check wiki health — links, frontmatter, index integrity
  Trigger this skill when the user runs the "/lint" command.
---

Health-check the brain. Read `GEMINI.md` first if you have not this session.

Check for:

1. **Broken links** — relative links in `wiki/` pointing at files that do not exist.
2. **Missing index entries** — pages in `wiki/` not listed in `wiki/index.md`.
3. **Stale stubs** — entries under **Stubs** in the index whose page now exists.
4. **Missing frontmatter** — any `wiki/` or `raw/` file lacking required fields
   (`title`, `type`/`source`, `created`/`captured`, `updated` for wiki pages).
5. **Uncited claims** — wiki pages with `type` other than `synthesis` and an
   empty or absent `sources:` list.
6. **Orphans** — wiki pages nothing links to.
7. **Stale dates** — `updated:` older than the newest source the page cites.
8. **Oversized pages** — wiki pages past ~300 lines that likely want splitting.
9. **Edited sources** — files in `raw/` modified after their initial commit
   (`git log --diff-filter=M -- raw/`). This violates immutability; report it.

Fix automatically: missing index entries, resolved stubs, stale `updated:` dates,
trivially wrong relative link paths.

Report but do **not** auto-fix: broken links with no obvious target, uncited
claims, orphans, oversized pages, edited sources. These need a judgment call.

Append to `wiki/log.md`: `<date> <time>  lint  <n> fixed, <n> reported`.

Give the results as a short table, worst first. If everything is clean, say so
in one line.

Then the four-heading summary from **Command output** in `GEMINI.md`. For a lint,
**Skipped** carries the weight: everything you found but did not auto-fix goes
there, since those are exactly the items needing a human decision.
