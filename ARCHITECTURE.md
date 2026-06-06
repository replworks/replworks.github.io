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

Required

```text
Node.js >= 24

npm >= 11

Astro >= 6

TypeScript >= 5

Tailwind CSS >= 4
```

---

Current

```text
Node.js 24.x

Astro 6.4.4

TypeScript 5.x

Tailwind CSS 4.x
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

## PROJECT INITIALIZATION

Required Command

```bash
npm create astro@latest
```

---

Template

```text
Minimal
```

---

TypeScript

```text
Strict
```

---

Package Manager

```text
npm
```

---

## REPOSITORY STRUCTURE

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       ├── index.astro
│       ├── manifesto/
│       ├── specification/
│       ├── workflow/
│       ├── resources/
│       └── showcase/
├── tests/
├── AGENTS.md
├── ARCHITECTURE.md
├── TASKS.md
└── package.json
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
