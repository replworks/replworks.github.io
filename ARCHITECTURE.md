# ARCHITECTURE.md

Version 1.0

---

# Purpose

이 문서는 REPL Works Website의 전체 구조를 정의한다.

REPL Works Website는 일반적인 웹 서비스가 아니다.

REPL Works Website는 REPL Works 표준을 설명하고 배포하기 위한 Documentation Platform이다.

---

이 프로젝트의 목적은 다음과 같다.

```text
Establish REPL Works
as a Project Memory Standard
for AI Development
```

---

모든 구현은 이 목적에 부합해야 한다.

---

# Product Definition

REPL Works Website는 다음이 아니다.

* SaaS
* Dashboard
* Community Platform
* Social Network
* AI Tool

---

REPL Works Website는 다음이다.

```text
Documentation Platform
```

---

사용자는 문서를 읽고

철학을 이해하고

Specification을 학습하고

Workflow를 적용한다.

---

# Primary User Journey

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

사용자의 핵심 행동은 다음과 같다.

```text
Read
Navigate
Learn
Apply
```

---

로그인

회원가입

결제

사용자 데이터 저장

은 존재하지 않는다.

---

# Information Architecture

## Philosophy Layer

프로젝트 존재 이유를 설명한다.

```text
Home

Why

Manifesto
```

---

질문

```text
Why does REPL Works exist?
```

에 답한다.

---

## Standard Layer

REPL Works 표준을 정의한다.

```text
Specification

Workflow
```

---

질문

```text
How does REPL Works work?
```

에 답한다.

---

## Adoption Layer

실제 적용을 지원한다.

```text
Resources

Showcase
```

---

질문

```text
How can I use REPL Works?
```

에 답한다.

---

# Navigation Structure

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

Resources

```text
Templates

Example Documents

Long Context Examples

Repository Examples

Planning Examples

FAQ
```

---

# Content Strategy

모든 주요 콘텐츠는 Markdown 기반으로 관리한다.

---

문서는 프로젝트의 핵심 자산이다.

---

문서 우선 원칙을 따른다.

```text
Content First

Design Second
```

---

UI는 문서를 전달하기 위한 수단이다.

문서보다 우선될 수 없다.

---

# Versioning

Versioning은 필수다.

---

다음 문서는 버전 관리 대상이다.

```text
Manifesto

Specification

Workflow
```

---

예시

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

기존 버전은 삭제하지 않는다.

---

새 버전은 이전 버전을 대체하지 않는다.

---

# Showcase

Showcase는 REPL Works가 실제 프로젝트에서 사용되고 있음을 증명한다.

---

초기 Showcase 대상

```text
REPL Works Website

Project A

Project B

Project C

Project D
```

---

Showcase는 마케팅 목적이 아니다.

실제 적용 사례를 보존하고 공유하기 위한 목적을 가진다.

---

# GitHub Integration

GitHub는 프로젝트의 중심 자산이다.

---

Website는 GitHub를 대체하지 않는다.

Website는 GitHub를 설명한다.

---

모든 주요 문서는 Git Repository에서 관리된다.

---

# Technology Stack

## Philosophy

기술 선택은 단순함과 장기 유지보수성을 우선한다.

---

REPL Works Website는 Documentation Platform이다.

---

복잡한 동적 기능보다 안정적인 정적 배포를 우선한다.

---

## Frontend Framework

```text
Astro
```

---

선정 이유

* Documentation-first 구조
* Static Export 지원
* MDX 지원
* 낮은 런타임 복잡성
* 장기 유지보수 용이

---

## Content Format

```text
MDX
```

---

모든 주요 문서는 MDX로 관리한다.

---

대상

```text
Manifesto

Specification

Workflow

Resources

Showcase
```

---

## Language

```text
TypeScript
```

---

JavaScript 사용을 권장하지 않는다.

---

## Package Manager

```text
pnpm
```

---

## Runtime

```text
Node.js LTS
```

---

현재 기준

```text
Node.js 24+
```

---

## Styling

```text
Tailwind CSS
```

---

## Content Collections

```text
Astro Content Collections
```

---

문서 메타데이터 관리에 사용한다.

---

## Search

```text
Pagefind
```

---

정적 검색을 사용한다.

---

서버 기반 검색은 사용하지 않는다.

---

## Analytics

선택 사항

```text
Plausible
```

또는

```text
Umami
```

---

Analytics는 필수 기능이 아니다.

---

## Hosting

```text
GitHub Pages
```

---

## CI/CD

```text
GitHub Actions
```

---

배포는 Git Push 기반 자동 배포를 사용한다.

---

# Repository Structure

```text
.

├── public/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │
│   ├── content/
│   │   ├── manifesto/
│   │   ├── specification/
│   │   ├── workflow/
│   │   ├── showcase/
│   │   └── resources/
│
├── AGENTS.md
├── ARCHITECTURE.md
├── TASKS.md
│
├── package.json
├── astro.config.mjs
└── pnpm-lock.yaml
```

---

# Technical Constraints

다음 기술은 현재 범위에 포함되지 않는다.

```text
Database

Backend API

Authentication

User Accounts

Comments

CMS

Real-time Features

Payment System

Discussion Board
```

---

정적 사이트 구조를 유지한다.

---

모든 기능은 Static Export 가능해야 한다.

---

# Design Principles

## Documentation First

문서가 제품이다.

---

## Static First

동적 기능보다 정적 콘텐츠를 우선한다.

---

## Longevity Over Complexity

복잡성보다 장기 유지 가능성을 우선한다.

---

## Git First

모든 핵심 자산은 Git에서 관리한다.

---

## Open Standard First

REPL Works는 제품이 아니라 표준이다.

---

웹사이트는 표준을 설명하고 배포하기 위한 수단이다.

---

# Success Criteria

다음 조건을 만족하면 아키텍처 목표를 달성한 것으로 간주한다.

```text
Manifesto를 게시할 수 있다.

Specification을 게시할 수 있다.

Workflow를 게시할 수 있다.

Resources를 게시할 수 있다.

Showcase를 게시할 수 있다.

GitHub Pages에 정적으로 배포할 수 있다.

새 버전을 추가할 수 있다.

기존 버전을 유지할 수 있다.
```

---

# Final Architecture Statement

REPL Works Website는 Documentation Platform이다.

---

이 프로젝트의 목적은 REPL Works를 AI Development를 위한 Project Memory Standard로 설명하고 배포하는 것이다.

---

모든 구조와 구현은 이 목적에 부합해야 한다.
