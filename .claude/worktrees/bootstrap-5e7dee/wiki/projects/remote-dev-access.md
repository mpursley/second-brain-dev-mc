---
title: Remote dev access
type: project
tags: [tooling, dev-environment, tailscale, ssh, remote]
created: 2026-08-16
updated: 2026-08-16
sources:
  - raw/tooling/2026-08-16-remote-dev-access-goal.md
  - raw/tooling/2026-08-16-tailscale-ssh.md
  - raw/sessions/2026-08-16-browser-access-limits.md
---

# Remote dev access

**The goal: run everything from the phone.** In the car, walking around, away
from the desk — with access to what is running on the laptops and to changes as
they are made.

The phone is the *client*. The laptop is the *host*. That distinction is the
whole point of the setup.

## What the environment has to carry

- GitHub repos, and the [second-brain](second-brain.md) notes
- Dev environments for the various projects
- The agent terminals — **Claude Code**, **Gemini CLI**, **Antigravity**, and
  other LLM agents working on those environments

A plain shell is not enough. It has to be a real working environment with the
agents in it.

## Current setup

**Two MacBooks, both on Tailscale, each holding different projects.** He SSHes
into whichever machine holds the project he wants.

The MacBooks can deploy onward to **Google Cloud Run, GCP, and GKE**, so the
full chain — edit, run, deploy — is reachable from one SSH session.

## Why not a cloud VM

He tried building this in **GCP VMs** and abandoned it: *"the terminal access is
always a pain."*

**That is not a settled verdict.** He raised the obvious fix himself and has not
tried it: **install Tailscale on the GCP VM.** If terminal access was the only
real complaint, that likely removes it — the same thing that makes the MacBooks
comfortable to reach. Worth testing before treating cloud VMs as ruled out.

The MacBooks still have an advantage a VM would not: the projects already live
on them, along with whatever local state and credentials they carry.

## Why this matters to sessions in this repo

A cloud Claude Code session runs in an isolated container — no view of his
screen, his files, or his logged-in browser. See
[Claude Code environment](../concepts/claude-code-environment.md).

**SSHing into a MacBook removes that entire class of limitation at once.** Real
files, real browser, real credentials, normal copy and paste.

So when something is blocked by *"the container cannot reach that"*, the answer
is usually **SSH into a laptop and set up remote control from there** rather
than working around the container. He asked to be reminded of this; it is in
**Standing reminders** in `CLAUDE.md`.

## Open

- **Which projects are on which MacBook**, and the tailnet hostnames. A reminder
  that can name the machine is worth more than one that says "your laptop".
- **Tailscale on the GCP VM** — untried, and the cheapest test of whether the
  cloud option was ever really the problem.
- **Session persistence.** Not recorded whether tmux, screen, or similar keeps
  work alive across a dropped phone connection. On a phone in a car, the link
  will drop; without a multiplexer, a long agent run dies with it. Worth
  confirming, since it decides whether the phone workflow is usable in practice.
- Whether the GCP VM still exists.
