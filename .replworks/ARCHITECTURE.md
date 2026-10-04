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
MDX for explanatory and collection content

templates/prompts/*.txt for prompt source text

templates/documents/AGENTS.md for the complete AGENTS.md example embedded in the AGENTS document page
```

Prompt source files under `templates/prompts/` are the canonical source for
the prompt text shown and copied by the Prompts collection. Prompt source
filenames use the human-authored constant convention
`<UPPER_SNAKE_CASE_SLUG>_PROMPT.txt`; for example,
`PRODUCT_SPECIFICATION_PROMPT.txt` is the source for the
`product-specification` prompt. The public slug is derived from the filename
by removing `_PROMPT.txt`, lowercasing, and replacing underscores with
hyphens. Prompt source text is read during the Astro build and is not fetched
from a runtime service.

`templates/documents/AGENTS.md` is the canonical source for the complete
AGENTS.md example shown at the end of the AGENTS document page. It is read
during the Astro build and rendered with Expressive Code.

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

Document sidebar entries are configured in `src/data/documents.ts`. Array
order determines display order; optional titles, subtitles, and badges control
sidebar presentation, with the content title used when no title override is set.

---

Content Examples

```text
AGENTS.md

PRODUCT_SPEC.md

TECH_STACK.md

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

repl-cli
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

ClayTube

ETERNOps

ETERN Labs

MMA
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

Showcase Presentation

```text
Project data: src/data/showcase.ts

Shared card component: src/components/ShowcaseCard.astro

Homepage: render featured projects only

Showcase page: render all projects in featured-first, explicit-sort order
```

The shared project data must contain:

```text
slug

name

description

tags

lesson

detail link

optional GitHub link

featured

sort order
```

The shared card component must support showing or hiding the lesson summary.
The Showcase page shows it. The homepage may hide it while preserving the
same card structure and visual treatment.

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
MDX for explanatory and collection content

TXT files under templates/prompts/ for prompt source text
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

Document source endpoints

```text
/documents/[slug].md
```

Document source endpoints return the raw Markdown body for reusable document standards.

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
