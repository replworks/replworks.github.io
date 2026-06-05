# AI-Native Product Development Workflow

Version 2.0

---

# Philosophy

AI 시대의 핵심 문제는 코드를 생성하는 능력이 아니다.

핵심 문제는 다음과 같다.

* 프로젝트 의도 유지
* 아키텍처 일관성 유지
* 작업 범위 제어
* 반복 실수 방지
* 컨텍스트 관리
* 모델 교체 가능성

---

REPL Works는 AI 에이전트를 만드는 시스템이 아니다.

REPL Works는 AI가 따라야 하는 프로젝트 운영체계(Project Operating System)를 정의한다.

---

# Core Principles

## AI Writes, Human Approves

모든 문서는 AI가 작성한다.

Human은 방향을 결정하고 결과를 검수한다.

```text
AI
→ Write

Human
→ Review
→ Approve
```

---

## Git Is The Source Of Truth

프로젝트는 Git으로 시작한다.

```bash
git init
```

모든 단계는 Commit으로 기록된다.

모든 구현은 Pull Request와 Merge를 통해 진행된다.

---

## Documents Are For AI

README.md를 제외한 모든 문서는 AI를 위한 문서다.

문서의 목적은 사람이 읽는 것이 아니라 AI가 프로젝트를 올바르게 이해하도록 만드는 것이다.

---

## Models Are Replaceable

```text
GPT
Claude
Gemini
Codex
Cursor
```

모두 교체 가능해야 한다.

프로젝트의 가치는 모델이 아니라 문서에 있다.

---

# Workflow Overview

```text
git init
↓
IDEAS.md
↓
PITCHING_SCRIPT.md
↓
ARCHITECTURE.md
↓
PRODUCT_SPEC.md
↓
AGENTS.md
↓
TASKS.md
↓
Development Loop
↓
Release
↓
README.md
```

---

# Phase 1. Idea Refinement

## 목적

프로젝트를 시작할 가치가 있는지 검증한다.

---

## 수행 주체

AI 작성

Human 검수

---

## 수행 작업

AI와 반복적으로 토론한다.

다음 질문에 대한 답을 찾는다.

```text
왜 이 프로젝트를 만드는가?

2년 동안 유지 가능한가?

감당 가능한 비용은 얼마인가?

원하는 결과는 무엇인가?

실제로 만들 가치가 있는가?
```

---

## 산출물

### IDEAS.md

프로젝트 의사결정 문서

---

## Commit

```bash
git add IDEAS.md
git commit -m "docs: add ideas"
```

---

# Phase 2. Intent Preservation

## 목적

프로젝트의 의도를 장기 보존한다.

---

## 수행 주체

AI 작성

Human 검수

---

## 수행 작업

IDEAS.md를 기반으로

프로젝트 설명 스크립트를 생성한다.

---

## 핵심

IDEAS.md는 분석 문서다.

PITCHING_SCRIPT.md는 의도 문서다.

새로운 모델이 프로젝트를 이해할 때 가장 먼저 읽어야 한다.

---

## 산출물

### PITCHING_SCRIPT.md

---

## Commit

```bash
git add PITCHING_SCRIPT.md
git commit -m "docs: add pitching script"
```

---

# Phase 3. Architecture Design

## 목적

기술적 방향성을 결정한다.

---

## 수행 주체

AI 작성

Human 검수

---

## 수행 작업

* 기술 스택 선정
* 시스템 구조 정의
* 설계 원칙 정의

---

## 산출물

### ARCHITECTURE.md

---

## Commit

```bash
git add ARCHITECTURE.md
git commit -m "docs: add architecture"
```

---

# Phase 4. Product Specification

## 목적

AI의 구현 자유도를 제한한다.

---

## 수행 주체

AI 작성

Human 검수

---

## 핵심

PRODUCT_SPEC.md는 기능 문서가 아니다.

실행 환경 문서다.

---

## 포함 항목

```text
Node.js Version

React Version

Next.js Version

Python Version

Database Version

Package Manager Version

Operating System Requirements
```

---

## 예시

```text
Node.js 22

Next.js 15

React 19

TypeScript 5.8

PostgreSQL 17

pnpm 10
```

---

## 산출물

### PRODUCT_SPEC.md

Optional

프로젝트 규모에 따라 생략 가능

---

## Commit

```bash
git add PRODUCT_SPEC.md
git commit -m "docs: add product spec"
```

---

# Phase 5. Constitution

## 목적

프로젝트 헌법 정의

---

## 수행 주체

AI 작성

Human 검수

---

## 핵심

AGENTS.md는 프로젝트의 진입점이다.

AI는 항상 AGENTS.md부터 읽는다.

---

## AGENTS.md 역할

### Project Constitution

프로젝트 규칙

---

### Project Index

프로젝트 문서 위치

---

### Agent Registry

추가 Agent 정의 위치

---

## 예시

```text
Read First:

PITCHING_SCRIPT.md

ARCHITECTURE.md

PRODUCT_SPEC.md

TASKS.md

---

Agent Definitions:

agents/agent-ios.md

agents/agent-backend.md

---

Rules:

Never create files in repository root

Reuse existing components first

Every feature must include unit tests

Build must pass

Lint must pass

Tests must pass
```

---

## 산출물

### AGENTS.md

---

## Commit

```bash
git add AGENTS.md
git commit -m "docs: add constitution"
```

---

# Phase 6. Task Planning

## 목적

프로젝트 작업 계획 정의

---

## 수행 주체

AI 작성

Human 검수

---

## 핵심

TASKS.md는 프로젝트 TODO 목록이다.

반드시 Phase로 그룹화한다.

---

## 예시

```text
Phase 1

- [ ] Authentication
- [ ] Session Management

Phase 2

- [ ] Profile

Phase 3

- [ ] Payment
```

---

## 산출물

### TASKS.md

---

## Commit

```bash
git add TASKS.md
git commit -m "docs: add tasks"
```

---

# Development Loop

## Step 1

TASKS.md에서 작업 선택

---

## Step 2

AI에게 개발용 Prompt 생성 요청

---

## Step 3

Branch 생성

```bash
git checkout -b feature/apple-login
```

---

## Step 4

AI에게 Prompt 전달

---

## Step 5

구현 수행

---

## 필수 조건

모든 기능은 반드시 Unit Test를 포함해야 한다.

```text
Feature Code
+
Unit Test
```

---

## 필수 통과 조건

```text
Build Success

Lint Success

Test Success
```

---

통과하지 못하면 Merge할 수 없다.

---

## Step 6

Pull Request 생성

---

## Step 7

Human Review

---

## Step 8

Merge

```bash
git merge
```

---

## Step 9

Update TASKS.md

```text
- [x] Apple Login
```

---

## Step 10

필요 시 문서 업데이트

### Update TASKS.md

새 작업 추가

---

### Update ARCHITECTURE.md

구조 변경 반영

---

### Update PRODUCT_SPEC.md

환경 변경 반영

---

### Update AGENTS.md

새 규칙 추가

---

## Commit

```bash
git commit -m "docs: update project knowledge"
```

---

# Release

## 목적

프로젝트 배포

---

## 수행 주체

Human

---

## 산출물

Release Tag

---

# README.md

## 목적

사람을 위한 문서

---

## 생성 시점

프로젝트가 충분히 완성된 이후

---

## 핵심

README.md는 유일한 Human-Oriented Document이다.

그 외 모든 문서는 AI를 위한 문서다.

---

# Persistent Assets

프로젝트의 영속 자산

```text
IDEAS.md

PITCHING_SCRIPT.md

ARCHITECTURE.md

PRODUCT_SPEC.md

AGENTS.md

TASKS.md
```

---

이 문서들이 존재하는 한

어떤 모델로도 프로젝트를 이어서 개발할 수 있다.

---

프로젝트의 기억은 모델에 저장되지 않는다.

프로젝트의 기억은 Git에 저장된다.
