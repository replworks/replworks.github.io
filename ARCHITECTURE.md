# ARCHITECTURE.md

Version 2.0

## PROJECT

REPL Works Website

---

## PURPOSE

Documentation Platform for REPL Works.

Goal:

```text
Establish REPL Works
as a Project Memory Standard
for AI Development
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
AI Tool
```

---

## USER ACTIONS

```text
Read
Navigate
Learn
Apply
```

---

## PRIMARY JOURNEY

```text
Home
↓
Why
↓
Manifesto
↓
Specification
↓
Workflow
↓
Resources
↓
Showcase
↓
GitHub
```

---

## NAVIGATION

```text
Home

Why

Manifesto

Specification

Workflow

Resources

Showcase
```

---

### Resources

```text
Templates

Example Documents

Long Context Examples

Repository Examples

Planning Examples

FAQ
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
manifesto

specification

workflow

resources

showcase
```

---

## VERSIONING

Required

---

Versioned Content

```text
Manifesto

Specification

Workflow
```

---

Example

```text
src/content/

manifesto/
  v1.mdx

specification/
  v1.mdx

workflow/
  v1.mdx
```

---

Never delete previous versions.

---

## SHOWCASE

Purpose

```text
Proof of Adoption
```

---

Initial Entries

```text
REPL Works Website

Project A

Project B

Project C

Project D
```

---

## GITHUB

GitHub is the primary external asset.

Website explains GitHub.

Website does not replace GitHub.

---

## STACK

Framework

```text
Astro
```

---

Language

```text
TypeScript
```

---

Content

```text
MDX
```

---

Styling

```text
Tailwind CSS
```

---

Content Management

```text
Astro Content Collections
```

---

Search

```text
Pagefind
```

---

Package Manager

```text
pnpm
```

---

Runtime

```text
Node.js 24+
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

Analytics (Optional)

```text
Plausible

Umami
```

---

## REPOSITORY STRUCTURE

```text
.

├── public/

├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │
│   └── content/
│       ├── manifesto/
│       ├── specification/
│       ├── workflow/
│       ├── resources/
│       └── showcase/

├── tests/

├── AGENTS.md
├── ARCHITECTURE.md
├── TASKS.md

├── package.json
├── astro.config.mjs
└── pnpm-lock.yaml
```

---

## IN SCOPE

```text
Documentation Pages

Versioned Documents

Static Search

GitHub Links

Showcase Pages

Resource Pages
```

---

## OUT OF SCOPE

```text
Database

Backend API

Authentication

User Accounts

Comments

CMS

Realtime Features

Payments

Discussion Board
```

---

## CONSTRAINTS

All pages must support:

```text
Static Export
```

---

Server dependency:

```text
Not Allowed
```

---

Dynamic user state:

```text
Not Allowed
```

---

## SUCCESS CRITERIA

```text
Manifesto published

Specification published

Workflow published

Resources published

Showcase published

GitHub Pages deployment works

New versions can be added

Old versions remain accessible
```

---

## FINAL

REPL Works Website is a Documentation Platform.

Every implementation must support:

```text
Documentation

Versioning

Static Deployment

Long-Term Maintainability
```
