# TASKS.md

Version 1.0

---

# AI-Native Product Development Workflow

---

## Phase 1 — Bootstrap

### Goal

프로젝트 초기화

### Deliverables

* README.md
* IDEAS.md
* PRODUCT_SPEC.md

### Done

프로젝트 목적과 범위가 문서화됨

---

## Phase 2 — Constitution

### Goal

프로젝트 규칙 정의

### Deliverables

* AGENTS.md

### Done

모든 역할이 공유할 헌법 완성

---

## Phase 3 — Role Setup

### Goal

역할 구성

### Deliverables

```text
agents/
```

구조 생성

### Done

필요 역할 정의 완료

---

## Phase 4 — Planning

### Goal

작업 계획 생성

### Input

사용자 요청

### Deliverables

* PLAN.md

### Done

실행 가능한 작업 목록 생성

---

## Phase 5 — Approval

### Goal

계획 검수

### Deliverables

* Approved
  또는
* Rejected

### Done

실행 여부 결정

---

## Phase 6 — Execution

### Goal

기능 구현

### Deliverables

* Source Code
* Diff

### Done

기능 구현 완료

---

## Phase 7 — Validation

### Goal

품질 검증

### Deliverables

* Validation Report

### Checks

* Build
* Test
* Lint

### Done

모든 검증 통과

---

## Phase 8 — Knowledge Update

### Goal

실패를 규칙으로 승격

### Deliverables

* JOURNAL.md
* AGENTS.md Update

### Done

재발 방지 규칙 생성

---

## Phase 9 — Merge

### Goal

Main Branch 반영

### Deliverables

* Merged PR

### Done

변경사항 통합 완료

---

## Phase 10 — Publish

### Goal

결과물 자산화

### Deliverables

* OUTBOX.md
* Release Notes
* Blog Draft

### Done

개발 사이클 종료

---

# Workflow Summary

```text
Bootstrap
↓
Constitution
↓
Role Setup
↓
Planning
↓
Approval
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

모든 작업은 이 순서를 따른다.

단계를 건너뛰는 것은 예외 상황으로 간주한다.
