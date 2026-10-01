# go-cli.md

# AI Issue Publisher Tech Stack

## Purpose

This document defines implementation constraints.

product.md defines what must be built.

TECH_STACK.md defines how it must be built.

Implementations must follow this document exactly.

Do not replace technologies.

Do not introduce alternatives.

Do not redesign architecture.

---

# Language

Use:

```text
Go >= 1.24
```

Do not use:

```text
Node.js
TypeScript
Python
Rust
PHP
Java
```

---

# Architecture Style

Use:

```text
Single Binary CLI
```

Requirements:

- no backend service
- no database
- no web server
- no daemon process

The application must execute as a standalone command-line tool.

---

# CLI Tech Stack

Use:

```text
github.com/spf13/cobra
```

Do not introduce additional CLI tech stacks.

---

# Clipboard

Use:

```text
golang.design/x/clipboard
```

Clipboard is the primary input source.

Do not require file input for normal workflows.

---

# Markdown Processing

Use:

```text
github.com/yuin/goldmark
```

Markdown must be parsed programmatically.

Do not use regex-only parsing.

---

# GitHub Integration

Use:

```text
GitHub REST API
```

Authentication:

```text
AI_BACKLOG_TOKEN
```

Requirements:

- token belongs to ai-backlog-bot
- issues must be created using ai-backlog-bot credentials
- GitHub must display ai-backlog-bot as issue author

Do not use:

```text
Current user credentials
```

Do not create issues as the publishing user.

---

# Publisher Detection

Publisher identity is informational only.

Resolve publisher using:

```text
gh api user
```

Fallback:

```text
git config user.name
```

Publisher information must be stored inside issue metadata.

Publisher identity must never be used for issue creation.

---

# Repository Resolution

Resolve repository from:

```text
git remote get-url origin
```

Expected result:

```text
owner/repository
```

If repository resolution fails:

```text
abort operation
```

Do not request repository information interactively.

---

# Configuration

Configuration format:

```text
YAML
```

Location:

```text
~/.config/ai-issue/config.yaml
```

Configuration is optional for MVP.

Environment variables are preferred for secrets.

---

# Secrets

Use:

```text
AI_BACKLOG_TOKEN
```

Environment variable only.

Never store tokens in:

- repository
- source code
- configuration files

---

# Commands

## Create Issue

Command:

```bash
ai-issue
```

Supported workflow:

```text
Clipboard
↓
Parse
↓
Preview
↓
Confirm
↓
Create Issue
```

---

## Doctor

Command:

```bash
ai-issue doctor
```

Checks:

- clipboard support
- git repository
- GitHub connectivity
- AI_BACKLOG_TOKEN availability

Doctor command must not modify state.

---

# Directory Structure

Use:

```text
cmd/
    ai-issue/

internal/
    clipboard/
    github/
    markdown/
    metadata/
    repository/
    publisher/

tests/
```

Avoid:

```text
pkg/
services/
helpers/
utils/
common/
shared/
```

Create packages around responsibilities.

---

# Error Handling

Return explicit errors.

Do not silently continue.

Examples:

```text
Clipboard is empty.
```

```text
Current directory is not a git repository.
```

```text
Issue title could not be determined.
```

```text
AI_BACKLOG_TOKEN is not configured.
```

---

# Testing

Use:

```text
Go standard testing package
```

Do not introduce testing tech stacks.

Test:

- markdown parsing
- repository resolution
- metadata generation
- issue payload generation

Mock external systems when appropriate.

Do not require GitHub access for unit tests.

---

# Distribution

Distribution method:

```text
GitHub Releases
```

Artifacts:

```text
macOS
Linux
Windows
```

Produce standalone binaries.

Do not require runtime dependencies other than Git and GitHub access.

---

# Non-Goals

Do not implement:

- AI APIs
- ChatGPT integration
- Claude integration
- Gemini integration
- pull request creation
- commit creation
- Slack integration
- Jira integration
- analytics
- project management features

These are outside the scope of the project.

---

# Tech Stacks Invariants

The following conditions must always hold:

```text
Author != Publisher
```

```text
GitHub Author == ai-backlog-bot
```

```text
Publisher == informational metadata only
```

```text
Single Binary CLI
```

Any implementation that violates these invariants is incorrect.
