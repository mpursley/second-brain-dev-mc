---
description: Wrap up the session and open a pull request into main
argument-hint: [optional: what to emphasize or PR framing]
---

Wrap up the working session, commit durable knowledge to `dev`, and open/update a PR into `main`. Emphasis: $ARGUMENTS

Read `CLAUDE.md` first if you have not this session — what you write must match the schema.

---

## Part 1: Wrap Session

### 0. Get the date right

Before writing any filename or frontmatter:

```bash
TZ=America/New_York date "+%Y-%m-%d %H:%M %Z"
```

Use Eastern date for all timestamps and filenames.

### 1. Decide what is durable

Separate durable decisions/facts from ephemeral back-and-forth.

### 2. Land the session record

Write `raw/sessions/YYYY-MM-DD-<slug>.md`.

### 3. Compile the durable parts into `wiki/`

Update existing pages or create new ones. Add unwritten ones under **Stubs** in `wiki/index.md`.

### 4. Sweep the loose ends

Update `todo/`, refresh `wiki/index.md`, and append to `wiki/log.md`:
`<date> <time>  wrap  <n> pages, <n> todos`.

### 5. Commit

Commit to `dev` and `git push -u origin dev`.

---

## Part 2: Open/Update Pull Request

### 6. Check there is something to ship

Check diff between `origin/main` and `origin/dev`. Update existing PR or create new one.

### 7. Write description & privacy check

Use `.github/pull_request_template.md`. Keep personal data out of description.

### 8. Open/Update the PR

Base `main`, head `dev`. Log to `wiki/log.md` and push.

---

## Part 3: Summary

End with **Did / Skipped / Uncertain / Next**, and put the PR link last on its own line.
