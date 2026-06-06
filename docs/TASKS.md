# TASKS.md

Version 1.0

---

# Purpose

이 문서는 현재 개발 범위를 정의한다.

---

ARCHITECTURE.md는 최종 목적지다.

TASKS.md는 현재 위치다.

---

AI는 반드시 TASKS.md를 기준으로 작업 범위를 제한해야 한다.

---

AI는 완료되지 않은 Task만 수행한다.

---

AI는 현재 Task와 무관한 기능을 구현해서는 안 된다.

---

# Phase 1 — Project Foundation

목표

프로젝트 기본 구조 생성

---

* [ ] T001 Initialize Astro Project

생성 항목

```text
Astro

TypeScript

pnpm
```

---

완료 조건

```text
pnpm install

pnpm dev

성공
```

---

* [ ] T002 Configure Tailwind CSS

완료 조건

```text
Tailwind 적용 확인
```

---

* [ ] T003 Configure Content Collections

완료 조건

```text
manifesto

specification

workflow

resources

showcase
```

컬렉션 생성

---

* [ ] T004 Configure MDX Support

완료 조건

```text
MDX 페이지 렌더링 성공
```

---

* [ ] T005 Configure GitHub Pages Deployment

완료 조건

```text
GitHub Actions

Static Export

자동 배포
```

---

# Phase 2 — Core Layout System

목표

사이트 공통 UI 구축

---

* [ ] T006 Create Global Layout

포함

```text
Header

Footer

Main Content
```

---

* [ ] T007 Create Navigation

메뉴

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

* [ ] T008 Create Mobile Navigation

완료 조건

```text
반응형 동작
```

---

* [ ] T009 Create Document Layout

적용 대상

```text
Manifesto

Specification

Workflow
```

---

* [ ] T010 Create Content Collection Routing

완료 조건

```text
문서 자동 라우팅
```

---

# Phase 3 — Core Content

목표

REPL Works 핵심 문서 게시

---

* [ ] T011 Create Home Page

---

* [ ] T012 Create Why Page

---

* [ ] T013 Publish Manifesto v1

---

* [ ] T014 Publish Specification v1

---

* [ ] T015 Publish Workflow v1

---

# Phase 4 — Resources

목표

실제 사용을 위한 자료 제공

---

* [ ] T016 Create Resources Index

---

* [ ] T017 Publish Templates

---

* [ ] T018 Publish Example Documents

---

* [ ] T019 Publish Long Context Examples

---

* [ ] T020 Publish Repository Examples

---

* [ ] T021 Publish Planning Examples

---

* [ ] T022 Publish FAQ

---

# Phase 5 — Showcase

목표

REPL Works 실제 사용 사례 공개

---

* [ ] T023 Create Showcase Index

---

* [ ] T024 Publish REPL Works Website Showcase

---

* [ ] T025 Publish Project A Showcase

---

* [ ] T026 Publish Project B Showcase

---

* [ ] T027 Publish Project C Showcase

---

* [ ] T028 Publish Project D Showcase

---

# Phase 6 — Search

목표

문서 탐색 기능 제공

---

* [ ] T029 Integrate Pagefind

---

* [ ] T030 Create Search UI

---

# Phase 7 — Release

목표

v1 공개

---

* [ ] T031 Content Review

---

* [ ] T032 Responsive Review

---

* [ ] T033 Accessibility Review

---

* [ ] T034 Deployment Verification

---

* [ ] T035 Release v1

````

---

# Rules

## One Prompt = One Task

하나의 구현 프롬프트는 하나의 Task만 수행한다.

---

## Complete Before Next

현재 Task 완료 전 다음 Task를 수행하지 않는다.

---

## No Scope Expansion

TASKS.md에 없는 기능을 구현하지 않는다.

---

## Architecture Alignment

Task가 Architecture와 충돌하면

ARCHITECTURE.md를 먼저 수정한다.

---

## Update After Completion

Task 완료 시 반드시 체크한다.

예

```text
- [x] T001 Initialize Astro Project
````
