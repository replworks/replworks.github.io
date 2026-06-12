# ARCHITECTURE.md

Version 3.0

## PROJECT

REPL Works Website

---

## PURPOSE

Documentation Platform for REPL Works.

Goal:

```text
Establish REPL Works as an AI-Native Product Development Framework.
```

---

## PRODUCT TYPE

```text
Documentation Platform
```

Not:

```text
SaaS

Dashboard

Community Platform

Social Network

Developer Portal

AI Tool
```

---

## PRIMARY NAVIGATION

```text
Home

Workflow

Prompts

Documents

Tools

Showcase

FAQ
```

---

## PRIMARY USER JOURNEY

```text
Home
↓
Workflow
↓
Prompts
↓
Documents
↓
Tools
↓
Showcase
↓
GitHub
```

---

## CONTENT MODEL

Content First

Design Second

---

Content Source

```text
MDX
```

---

Collections

```text
workflow

prompts

documents

tools

showcase

faq
```

---

## PAGE RESPONSIBILITIES

### Home

Purpose

```text
Introduce REPL Works

Explain Core Philosophy

Provide Entry Points
```

---

### Workflow

Purpose

```text
Explain REPL Works Methodology
```

---

Must describe:

```text
Idea Refinement

Product Definition

Architecture Design

Task Planning

AI Execution

Review

Release

Continuous Improvement
```

---

### Prompts

Purpose

```text
Provide Reusable Prompts
```

---

Content Examples

```text
IDEAS Prompt

PITCHING Prompt

PRODUCT_SPEC Prompt

ARCHITECTURE Prompt

TASKS Prompt

Review Prompt
```

---

### Documents

Purpose

```text
Provide Reusable Document Standards
```

---

Content Examples

```text
AGENTS.md

PRODUCT_SPEC.md

ARCHITECTURE.md

TASKS.md
```

---

### Tools

Purpose

```text
Provide REPL Works Tooling
```

---

Initial Tools

```text
ai-issue
```

---

Future Tools

```text
ai-prompt
```

---

### Showcase

Purpose

```text
Demonstrate Real Adoption
```

---

Definition

```text
REPL Works Compatible Projects
```

---

Initial Entries

```text
REPL Works Website

ai-issue

Wifi Note
```

---

Each Showcase Entry Must Include

```text
Project

Purpose

Workflow Usage

Documents Used

Tools Used
```

---

### FAQ

Purpose

```text
Answer Common Questions
```

---

## CONTENT ORGANIZATION

```text
src/content/

workflow/

prompts/

documents/

tools/

showcase/

faq/
```

---

All content must be stored as:

```text
MDX
```

---

Large content blocks must not be embedded directly inside page components.

---

Content must remain independent from presentation.

---

## ROUTING STRUCTURE

```text
/

/workflow

/prompts

/documents

/tools

/showcase

/faq
```

---

Content detail pages

```text
/workflow/[slug]

/prompts/[slug]

/documents/[slug]

/tools/[slug]

/showcase/[slug]

/faq/[slug]
```

---

## GITHUB

GitHub is the primary external asset.

---

Website Responsibilities

```text
Explain

Teach

Distribute
```

---

GitHub Responsibilities

```text
Source Code

Issues

Pull Requests

Releases
```

---

Website must never replace GitHub.

---

## SEARCH

Required

---

Search Scope

```text
Workflow

Prompts

Documents

Tools

Showcase

FAQ
```

---

Implementation

```text
Pagefind
```

---

## SHOWCASE POLICY

Showcase is reserved for:

```text
REPL Works Compatible Projects
```

---

Do Not Include

```text
Prompt Repositories

Document Repositories

Template Repositories
```

---

Those belong under:

```text
Prompts

Documents
```

---

## STACK

Required

```text
Node.js >= 24

npm >= 11

Astro >= 6

TypeScript >= 5

Tailwind CSS >= 4
```

---

Package Manager

```text
npm
```

---

Framework

```text
Astro
```

---

Content

```text
MDX
```

---

Search

```text
Pagefind
```

---

Hosting

```text
GitHub Pages
```

---

CI/CD

```text
GitHub Actions
```

---

## CONSTRAINTS

All pages must support:

```text
Static Export
```

---

Server Dependency

```text
Not Allowed
```

---

Database

```text
Not Allowed
```

---

Authentication

```text
Not Allowed
```

---

User Accounts

```text
Not Allowed
```

---

Dynamic User State

```text
Not Allowed
```

---

## SUCCESS CRITERIA

```text
Workflow Published

Prompts Published

Documents Published

Tools Published

Showcase Published

FAQ Published

GitHub Pages Deployment Works

Search Works

New Content Can Be Added Through MDX
```

---

## FINAL

REPL Works Website is a Documentation Platform.

Every implementation must support:

```text
Documentation

Discoverability

Static Deployment

Long-Term Maintainability

REPL Works Adoption
```
