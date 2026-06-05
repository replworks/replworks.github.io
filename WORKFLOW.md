# AI-Native Product Development Workflow

Version 2.0

---

# Philosophy

AI 시대의 핵심 문제는 코드를 생성하는 능력이 아니다.

핵심 문제는:

* 프로젝트 의도 유지
* 아키텍처 일관성 유지
* 반복적인 실수 방지
* 컨텍스트 관리
* 작업 범위 제어
* 프로젝트 기억 보존

이다.

---

좋은 결과물은 좋은 모델만으로 만들어지지 않는다.

지속 가능한 결과물은

프로젝트의 의도(Intent),
규칙(Constitution),
지식(Knowledge)

이 유지될 때 만들어진다.

---

REPL Works는 AI 에이전트를 통제하는 시스템이 아니다.

REPL Works는 AI가 따라야 하는 프로젝트 운영체계(Project Operating System)를 정의한다.

---

# Core Principle

AI는 프로젝트를 만드는 도구다.

프로젝트를 선택하는 책임은 인간에게 있다.

---

# Workflow Overview

```text
Idea Refinement
↓
Intent Preservation
↓
Architecture Design
↓
Specification
↓
Constitution
↓
Task Planning
↓
Execution
↓
Validation
↓
Knowledge Update
↓
Merge
↓
Publish
```

---

# Phase 1. Idea Refinement

## 목적

프로젝트를 시작할 가치가 있는지 검증한다.

---

## 수행 주체

Human + LLM

---

## 핵심

이 단계는 사업 예측 정확도를 높이는 것이 목적이 아니다.

창업자가 스스로 다음 질문에 답할 수 있도록 만드는 것이 목적이다.

```text
왜 이 프로젝트를 만드는가?

2년 동안 유지 가능한가?

감당 가능한 비용은 얼마인가?

원하는 결과는 무엇인가?

지금 시작할 가치가 있는가?
```

---

## 수행 작업

창업자와 LLM이 반복적으로 토론한다.

필요 시 아이디어를 수정한다.

필요 시 아이디어를 폐기한다.

---

## 산출물

### IDEAS.md

프로젝트 의사결정 문서

---

# Phase 2. Intent Preservation

## 목적

프로젝트의 의도를 장기 보존한다.

---

## 수행 주체

LLM

---

## 핵심

IDEAS.md는 논리적이다.

하지만 시간이 지나면

왜 이 프로젝트를 시작했는지 잊게 된다.

---

PITCHING_SCRIPT.md는

프로젝트의 존재 이유를 설명한다.

---

## 수행 작업

IDEAS.md를 기반으로

창업자 피칭 스크립트를 생성한다.

---

## 산출물

### PITCHING_SCRIPT.md

프로젝트 의도 문서

---

# Phase 3. Architecture Design

## 목적

기술적 방향성을 결정한다.

---

## 수행 주체

Human + LLM

---

## 수행 작업

기술 스택 결정

시스템 구조 정의

핵심 설계 원칙 정의

---

## 산출물

### ARCHITECTURE.md

기술 설계 문서

---

# Phase 4. Specification

## 목적

AI의 구현 자유도를 제한한다.

---

## 수행 주체

Human + LLM

---

## 핵심

PRODUCT_SPEC.md는

사람보다 AI를 위한 문서이다.

---

LLM이 임의의 기술을 선택하지 못하도록

프로젝트의 기술적 제약조건을 정의한다.

---

## 예시

```text
Frontend:
Next.js

Backend:
FastAPI

Database:
PostgreSQL

Authentication:
Supabase Auth
```

---

## 산출물

### PRODUCT_SPEC.md (Optional)

또는

### SPEC.md

---

# Phase 5. Constitution

## 목적

프로젝트 헌법 정의

---

## 수행 주체

Human + LLM

---

## 수행 작업

프로젝트 절대 규칙 정의

---

## 예시

```text
MVVM Only

Supabase Only

Reuse Existing Components

Never Create Files In Repository Root
```

---

## 산출물

### AGENTS.md

프로젝트 헌법

---

# Phase 6. Task Planning

## 목적

작업 범위를 정의한다.

---

## 수행 주체

Human + LLM

---

## 핵심

TASKS.md는 TODO 리스트가 아니다.

TASKS.md는 작업 경계(Boundary)다.

---

현재 Phase에 없는 기능은

구현하지 않는다.

---

## 예시

```text
Phase 1

Authentication

Phase 2

Profile

Phase 3

Payment
```

---

Payment가 존재하더라도

Phase 1에서는 구현하지 않는다.

---

## 산출물

### TASKS.md

프로젝트 작업 경계 문서

---

# Phase 7. Execution

## 목적

승인된 작업만 구현한다.

---

## 수행 주체

Developer Role

---

## 입력

```text
PITCHING_SCRIPT.md

ARCHITECTURE.md

PRODUCT_SPEC.md

AGENTS.md

TASKS.md
```

---

## 산출물

Git Diff

---

# Phase 8. Validation

## 목적

코드 품질 검증

---

## 수행 주체

Validation Engine

---

## 수행 작업

Build

Test

Lint

---

## 실패 시

수정 후 다시 Validation 수행

```text
Execution
↓
Validation
↓
Fix
↓
Validation
```

반복

---

## 성공 시

Knowledge Update 단계 진행

---

## 산출물

### VALIDATION_REPORT.md

---

# Phase 9. Knowledge Update

## 목적

프로젝트 기억 보존

---

## 수행 주체

Human + LLM

---

## 핵심

이 단계의 목적은

코드를 수정하는 것이 아니다.

프로젝트가 배운 내용을 보존하는 것이다.

---

## 예시

```text
AI가 반복적으로

root/utils.swift

생성
```

---

규칙 수정

```text
All utility files belong to:

src/lib
```

---

또는

```text
Redis 도입 검토

운영 복잡도 증가

채택하지 않음
```

---

## 산출물

### Updated AGENTS.md

### Updated ARCHITECTURE.md

### JOURNAL.md

---

# Phase 10. Merge

## 목적

최종 승인

---

## 수행 주체

Human

---

## 수행 작업

Architecture Review

Code Review

UX Review

Performance Review

---

## 산출물

Merged

---

# Phase 11. Publish

## 목적

프로젝트 지식을 자산화한다.

---

## 수행 주체

Writer Role

---

## 입력

```text
JOURNAL.md

Git Diff

Architecture Changes
```

---

## 산출물

Blog Draft

Release Note

Changelog

---

# Persistent Assets

에이전트는 교체 가능하다.

```text
Claude

GPT

Gemini

Cursor

Codex
```

---

반면 아래 자산은 프로젝트의 영속 자산이다.

```text
IDEAS.md

PITCHING_SCRIPT.md

ARCHITECTURE.md

PRODUCT_SPEC.md

AGENTS.md

TASKS.md

JOURNAL.md
```

---

프로젝트의 가치는

모델이 아니라

축적된 지식에 있다.
