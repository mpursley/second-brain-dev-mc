# raw/

Immutable source material. **Nothing in here gets edited after it is committed.**

Layout: `raw/<topic>/YYYY-MM-DD-<slug>.md`

Every file starts with:

```yaml
---
title: Original title of the source
source: https://... | email | conversation | manual
captured: YYYY-MM-DD
tags: [topic]
---
```

Capture liberally — this directory is meant to be a pile. Organization happens
in `wiki/`, not here. If you are unsure what topic something belongs to, use
`raw/inbox/` and let `/ingest` sort it out.

Corrections never go here. If a source is wrong or superseded, add the new one
and record the correction on the wiki page that cites it.
