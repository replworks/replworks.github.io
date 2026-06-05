# AI-Native Product Development Workflow

Version 4.0

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

REPL Works는 AI 에이전트 프레임워크가 아니다.

REPL Works는 AI가 따라야 하는 프로젝트 운영체계(Project Operating System)를 정의한다.

---

# Core Principles

## AI Writes, Human Approves

모든 문서는 AI가 작성한다.

모든 코드는 AI가 작성한다.

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

모든 변경사항은 Git으로 관리한다.

모든 구현은 Branch → PR → Merge를 통해 진행한다.

---

## Documents Are For AI

README.md를 제외한 모든 문서는 AI를 위한 문서다.

문서는 사람이 읽기 위해 존재하지 않는다.

AI가 프로젝트를 일관되게 수행하기 위해 존재한다.

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

프로젝트의 가치는 모델이 아니라 Git에 저장된 지식에 있다.

---

# Documentation Ownership

## Planning Runtime

채팅창

---

역할

```text
Document Creation

Document Revision

Architecture Design

Task Planning

Prompt Creation

Project Decisions
```

---

## Execution Runtime

코딩창

---

역할

```text
Implementation

Refactoring

Testing

Bug Fixing
```

---

## Rule

모든 Markdown 문서는 원칙적으로 Planning Runtime에서 생성한다.

---

모든 Markdown 문서는 원칙적으로 Planning Runtime에서 수정한다.

---

Execution Runtime은 문서의 대규모 수정(Rebuild, Rewrite, Revise)을 수행하지 않는다.

---

## Exception

구현 과정에서 필요한 경우에만

다음 문서를 최소한으로 수정할 수 있다.

```text
TASKS.md

ARCHITECTURE.md
```

---

예시

```text
Task 완료 체크

Architecture 누락 항목 추가

새로운 내부 계층 발견
```

---

프로젝트 전체 문서 개편은 반드시 Planning Runtime에서 수행한다.

---

# Workflow Overview

```text
git init
↓
IDEAS.md
+
PITCHING_SCRIPT.md
↓
commit
↓
ARCHITECTURE.md
↓
commit
↓
PRODUCT_SPEC.md (Optional)
↓
commit
↓
AGENTS.md
↓
commit
↓
TASKS.md
↓
commit
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

### PITCHING_SCRIPT.md

프로젝트 의도 문서

---

## Commit

두 문서는 반드시 같은 Commit으로 생성한다.

```bash
git add IDEAS.md PITCHING_SCRIPT.md

git commit -m "docs: initialize product vision"
```

---

# Phase 2. Architecture Design

## 목적

프로젝트 전체 구조를 정의한다.

---

## 수행 주체

AI 작성

Human 검수

---

## 핵심

실제 개발 단계에서

AI는 ARCHITECTURE.md만 읽어도

프로젝트를 이해할 수 있어야 한다.

---

IDEAS.md와 PITCHING_SCRIPT.md는

프로젝트 생성 단계의 문서다.

개발 단계의 필수 문서는 아니다.

---

## 포함 내용

```text
Project Structure

System Design

Data Flow

Naming Rules

Directory Rules

Technical Decisions
```

---

## 원칙

ARCHITECTURE.md는 가능한 한 자세해야 한다.

문서가 과도하게 커지지 않는 한

별도의 SPEC 문서를 만들지 않는 것을 권장한다.

---

문서가 파편화될수록

LLM의 이해 비용이 증가한다.

---

## 산출물

### ARCHITECTURE.md

---

# Phase 3. Product Specification

## 목적

런타임 환경을 고정한다.

---

## Optional

ARCHITECTURE.md가 충분히 상세하다면 생략 가능하다.

---

## 포함 내용

```text
Node Version

Python Version

Go Version

Database Version

Package Manager Version

OS Requirements
```

---

## 산출물

### PRODUCT_SPEC.md

Optional

---

# Phase 4. Constitution

## 목적

프로젝트 규칙 정의

---

## 핵심

AGENTS.md는 프로젝트 헌법이다.

동시에 프로젝트 진입점이다.

---

AI는 항상 AGENTS.md부터 읽는다.

---

## 역할

### Project Index

```text
Read First

ARCHITECTURE.md

PRODUCT_SPEC.md

TASKS.md
```

---

### Agent Registry

```text
agents/agent-ios.md

agents/agent-backend.md
```

---

### Project Rules

```text
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

# Phase 5. Task Planning

## 목적

현재 개발 상태를 정의한다.

---

## 핵심

TASKS.md는 TODO List다.

반드시 Phase로 그룹화한다.

---

ARCHITECTURE.md가 목적지라면

TASKS.md는 현재 위치다.

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

# Development Loop

## Step 1

TASKS.md에서 작업 선택

---

## Step 2

Planning Runtime에서 Prompt 생성

---

## 원칙

Planning Runtime과 Execution Runtime을 분리한다.

---

Planning Runtime

```text
Architecture Review

Task Analysis

Prompt Creation

Document Revision
```

---

Execution Runtime

```text
Implementation

Testing

Refactoring

Bug Fixing
```

---

LLM의 메모리는 무한하지 않다.

계획과 구현은 분리하는 것이 좋다.

---

## Step 3

Branch 생성

```bash
git checkout -b feature/apple-login
```

---

## Step 4

Execution Runtime에서 구현

---

## 필수 규칙

모든 기능은 반드시 Unit Test를 포함해야 한다.

```text
Feature Code

+

Unit Test
```

---

## 필수 조건

```text
Build Success

Lint Success

Test Success
```

---

통과하지 못하면 수정한다.

---

## Step 5

Pull Request 생성

---

## Step 6

Human Review

---

## Step 7

Merge

---

## Step 8

TASKS.md 업데이트

```text
- [x] Apple Login
```

---

## Step 9

필요 시 문서 업데이트

---

Execution Runtime

허용

```text
TASKS.md

ARCHITECTURE.md
```

최소 수정

---

Planning Runtime

허용

```text
ARCHITECTURE.md

PRODUCT_SPEC.md

AGENTS.md

TASKS.md
```

대규모 개정

---

# Release

## 목적

프로젝트 배포

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

README.md는 유일한 Human-Oriented Document이다.

---

# Persistent Assets

장기적으로 프로젝트 유지에 필요한 최소 자산

```text
Git

ARCHITECTURE.md

AGENTS.md

TASKS.md
```

---

ARCHITECTURE.md

→ 프로젝트의 최종 구조

---

AGENTS.md

→ 프로젝트 규칙

---

TASKS.md

→ 현재 개발 상태

---

Git

→ 프로젝트 전체 기억

---

이 네 가지가 존재하는 한

어떤 AI 모델로도 프로젝트를 계속 개발할 수 있다.

---

프로젝트의 기억은 모델에 저장되지 않는다.

프로젝트의 기억은 Git에 저장된다.
