---
title: Tailscale SSH to home machines
source: conversation
captured: 2026-08-16
tags: [tooling, dev-environment, tailscale, ssh]
---

# Tailscale SSH to home machines

Told by the owner on 2026-08-16.

## What he said

> I have enabled tail scale to allow SSH to my at-home machines... to MacBook
> laptops... yesterday I spent a bunch of time trying to SSH into a VM inside of
> Google Cloud environment but realize that I have direct SSH access to my
> laptops which are a better Dev environment that I can set up in a Chrome
> environment. easier to work with with Claude code, easier to copy and paste
> etc...
>
> if I ask about something like that, remind me that I can always SSH into my
> laptop and set up remote control from there

## Facts

- **Tailscale is enabled**, giving SSH access to his at-home machines,
  including MacBook laptops.
- On **2026-08-15** he spent significant time trying to SSH into a VM inside a
  Google Cloud environment before realising the laptops were already reachable.
- He rates the laptops the **better development environment**, specifically:
  easier to work with alongside Claude Code, and easier to copy and paste.
- He asked to be **reminded of this whenever the topic comes up** — that he can
  SSH into a laptop and set up remote control from there.

## Ambiguity

The phrase "a better Dev environment that I can set up in a Chrome environment"
is ambiguous as transcribed. The reading taken is that the laptops are better
*than* a browser-based or cloud environment. It could instead mean the laptops
are reachable *from* a Chrome-based session. Both readings support the same
conclusion, so nothing downstream turns on it.

## Not established

Which specific machines are on the tailnet, their hostnames, how many laptops,
whether Tailscale SSH ACLs or plain SSH keys are in use, and whether anything
besides the laptops is reachable.
