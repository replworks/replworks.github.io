# PRODUCT_SPEC.md

Version 3.0

## PRODUCT

REPL Works Website

---

## PRODUCT_TYPE

```text
Documentation Platform
```

Purpose:

```text
Introduce

Teach

Distribute

Standardize

REPL Works
```

---

## PRODUCT_MISSION

Establish REPL Works as an AI-Native Product Development Framework.

---

REPL Works provides:

```text
Workflow

Prompts

Documents

Tools

Showcase
```

---

The website exists to help visitors:

```text
Understand REPL Works

Adopt REPL Works

Apply REPL Works

Build REPL Works Compatible Products
```

---

## TARGET_AUDIENCE

Primary

```text
Solo Founders

Indie Hackers

AI-Native Builders
```

---

Secondary

```text
Startups

Small Teams

Technical Product Builders
```

---

## CORE_MESSAGE

```text
AI can generate code.

Projects require structure.
```

---

```text
AI can execute tasks.

Projects require continuity.
```

---

```text
Models change.

Projects survive.
```

---

## VALUE_PROPOSITION

REPL Works provides:

```text
A repeatable workflow

Reusable prompts

Reusable documents

Reusable tools

Real-world examples
```

for AI-native product development.

---

## INFORMATION_ARCHITECTURE

```text
Home

Workflow

Prompts

Documents

Tools

Showcase

FAQ

GitHub
```

---

## PRIMARY_USER_JOURNEY

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

## HOME

Purpose

```text
Explain REPL Works

Explain Why It Exists

Drive Adoption
```

---

Must answer:

```text
What is REPL Works?

Why does it matter?

How does it work?

Where do I start?
```

### HOMEPAGE FIRST-VISIT MESSAGE

The homepage hero must let a first-time visitor understand what REPL Works is
and why it is needed before reading the workflow section.

Hero title:

```text
AI는 바뀝니다. 프로젝트는 계속되어야 합니다.
```

Hero subtitle:

```text
REPL Works는 프로젝트의 목적, 기술 규칙, 구조를 문서 몇 개로 정리해 Git에 두는 개발 방식입니다. 새 채팅을 열어도, 다른 AI로 바꿔도, AI가 그 문서부터 읽고 이어서 작업합니다.
```

Hero problem statement:

```text
AI와 오래 개발하면 세션이 끊길 때마다 처음부터 다시 설명하게 되고, AI는 버전도 폴더 규칙도 모른 채 코드를 씁니다.
```

The homepage section order is:

```text
Hero
Problem
Workflow
Five Foundations
Showcase
```

The Problem section must describe these concrete situations:

```text
새 채팅마다 프로젝트를 처음부터 설명합니다.

AI가 엉뚱한 버전이나 폴더에 코드를 넣습니다.
```

The hero and Problem section must use 합니다체, avoid abstract Sino-Korean
word stacks, explain abbreviations and internal terms on first use, and keep
each sentence focused on one point. Negative positioning such as "일회성 Chat
에이전트가 아닙니다" must not be used in the hero.

The homepage meta description must use the same content as the hero subtitle.

---

## WORKFLOW

Purpose

```text
Explain the REPL Works methodology
```

---

Must describe:

```text
Idea Validation

Product Definition

Architecture Design

Task Planning

AI Execution

Review

Release

Continuous Improvement
```

---

Must explain:

```text
대화형 AI

코딩형 AI

Human Review
```

---

## PROMPTS

Purpose

```text
Provide reusable prompts
```

---

Prompt Categories

```text
Idea Refinement

Pitch Generation

Product Specification

Architecture Generation

Task Generation

Execution Validation

Architecture Review

Task Review
```

---

Visitors must be able to:

```text
Read

Copy

Reuse
```

prompts directly.

---

## DOCUMENTS

Purpose

```text
Provide reusable document standards
```

---

Required Documents

```text
AGENTS.md

PRODUCT_SPEC.md

TECH_STACK.md

ARCHITECTURE.md

TASKS.md
```

---

Human-Created Documents

```text
docs/IDEAS.md

docs/PITCHING_SCRIPT.md
```

---

## DOCUMENT_CREATION_ORDER

```text
Human: docs/IDEAS.md
        ↓
Human: docs/PITCHING_SCRIPT.md
        ↓
AI: .replworks/PRODUCT_SPEC.md
        ↓
AI: .replworks/TECH_STACK.md
        ↓
AI: .replworks/ARCHITECTURE.md
        ↓
AI: .replworks/TASKS.md
```

---

Each document page must explain:

```text
Purpose

Responsibility

Creation Timing

Update Rules
```

---

## TOOLS

Purpose

```text
Provide tooling for REPL Works
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

Additional REPL Works Tooling
```

---

Each tool page must include:

```text
Purpose

Installation

Usage

Repository Link

Platform Installation Links
```

---

## SHOWCASE

Purpose

```text
Demonstrate real adoption
```

---

Showcase entries must be real projects.

---

Initial Entries

```text
REPL Works Website
ai-issue
Wifi Note
ETERNOps
ETERN Labs
MMA
```

---

Each entry should explain:

```text
Project

Purpose

Workflow Usage

Documents Used

Tools Used
```

The Showcase page presents these entries as a project card grid. Cards are
ordered by `featured` first and then by an explicit stable sort order.

The homepage and Showcase page must use one shared Showcase project data source
and one shared project card component. Updating a project in the data source
must update both pages.

Each Showcase card contains:

```text
Slug

Name

Short Description

Category Tags

Lessons Learned Summary

Detail Link

GitHub Link when available

REPL Works Compatible badge

Featured flag

Sort order
```

The homepage displays these featured projects:

```text
REPL Works Website

Wifi Note

ImageForge

Cool Restore
```

The Showcase page displays all projects. It shows the Lessons Learned
summary on cards; the homepage may omit that field.

---

## REPL_WORKS_COMPATIBLE

Showcase entries may be designated:

```text
REPL Works Compatible
```

---

Definition

```text
Project follows the REPL Works workflow.

Project uses REPL Works documents.

Project is maintained using REPL Works principles.
```

The detailed Compatible definition belongs in the FAQ. Showcase cards link to
that FAQ answer rather than repeating the full definition.

---

Purpose

```text
Demonstrate adoption

Create ecosystem visibility

Encourage standardization
```

---

## FAQ

Purpose

```text
Answer recurring questions
```

---

Examples

```text
What is REPL Works?

Why use AI and documents together?

Why separate planning from execution?

Why Git First?

What makes a project compatible?
```

---

## GITHUB

GitHub is the primary external asset.

---

Website explains:

```text
Workflow

Prompts

Documents

Tools
```

---

GitHub stores:

```text
Source Code

Issues

Pull Requests

Releases
```

---

Website must never replace GitHub.

---

## CONTENT_STRATEGY

Content First

Design Second

---

Priority Order

```text
Workflow

Prompts

Documents

Tools

Showcase
```

---

Design exists to improve content discoverability.

---

## SUCCESS_CRITERIA

Visitors can:

```text
Understand REPL Works

Use REPL Works

Download Documents

Copy Prompts

Install Tools

Explore Compatible Projects
```

---

## LONG_TERM_VISION

Create an ecosystem where:

```text
Workflow

Prompts

Documents

Tools
```

become reusable standards for AI-native product development.

---

Desired Outcome

```text
Built with REPL Works
```

becomes a recognizable signal of structured AI-native development.

---

## URL_RULES

```text
Trailing Slash Policy
```

Internal links:

- 사이트 내부 링크의 하위 경로는 항상 끝에 slash를 붙인다 (예: `/about/`, `/docs/getting-started/`).
- 루트는 `https://www.repl.net/` 로 쓴다.
- 파일 확장자가 있는 경로에는 slash를 붙이지 않는다 (예: `/sitemap.xml`, `/favicon.ico`, `/images/logo.png`, `/documents/[slug].md`).
- 쿼리 및 앵커는 slash 뒤에 붙인다 (예: `/docs/?q=a#top`).
- 내부 링크, canonical 태그, og:url, sitemap.xml 전부에 동일한 규칙을 적용한다.
- 외부 사이트 링크는 원본 그대로 두고 수정하지 않는다.

---

## FINAL

REPL Works is an AI-Native Product Development Framework.

The website exists to distribute:

```text
Workflow

Prompts

Documents

Tools
```

and showcase real-world adoption through REPL Works Compatible projects.
