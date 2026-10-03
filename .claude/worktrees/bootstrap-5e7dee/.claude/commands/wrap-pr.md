---
description: Open a pull request for what is sitting on dev, from the real diff
argument-hint: [optional: title or framing for the PR]
---

Open a PR from `dev` into `main`. Framing: $ARGUMENTS

Invoking this command **is** the request to create the PR — do not ask again for
permission to open it. Do ask before anything destructive (force-push, rebase of
pushed commits, closing an existing PR).

---

## 1. Check there is something to ship

```
git fetch origin
git log --oneline origin/main..origin/dev
git diff --stat origin/main...origin/dev
```

If `dev` is level with `main`, say so and stop — nothing to open.

If `dev` has unpushed local commits, push them first (`git push -u origin dev`).
If `dev` is behind `main`, merge `main` into `dev` and resolve before opening.

Check for an existing open PR from `dev` first. If one exists, update its
description to cover the new commits rather than opening a second.

## 2. Write the description from the actual diff

Read the diff and the new commits. **Every claim in the PR body must come from
what changed** — not from memory of the session, not from what was intended.
Read `wiki/log.md` for the operations that produced it.

Use `.github/pull_request_template.md` as the layout. Fill in:

- **Summary** — what this adds to the brain, in a sentence or two.
- **Changed** — sources added, pages created versus updated, todos, schema
  changes. Name the files. Delete the rows that do not apply.
- **Provenance** — tick the checks honestly. If new pages are missing sources,
  or `raw/` was edited, **fix it before opening the PR** rather than ticking a
  false box.
- **Notes** — judgment calls, source conflicts you did not resolve, anything
  deliberately left undone.

Title: what changed, concretely. Not "dev -> main" or "session updates".

## 3. Privacy check before opening

This repo is private and holds personal data — calendar, contacts, health,
work. The PR body is prose you are writing fresh, so keep it structural: name
files and describe shapes, do not quote personal content into it. No
credentials, tokens, or addresses in the body. If summarizing a change honestly
would require exposing sensitive detail, describe the file and its purpose and
leave the content in the diff.

## 4. Open it

Base `main`, head `dev`. Append to `wiki/log.md`:
`<date> <time>  wrap-pr  #<number> <title>`, then commit and push that log line
to `dev` so the PR reflects it.

## 5. Summarise

End with the four-heading summary from **Command output** in `CLAUDE.md` —
**Did / Skipped / Uncertain / Next**.

Lead with the PR URL and number. Then:

- **Did** — commit count, file count, and what the PR covers in a sentence.
- **Skipped** — anything on `dev` you chose not to describe in the body, and any
  provenance box you could not tick honestly.
- **Uncertain** — claims in the body you inferred from the diff rather than read
  directly.
- **Next** — what the owner has to decide before merging, if anything.

If you updated an existing PR rather than opening one, say so plainly — the
owner will otherwise look for a new number.
