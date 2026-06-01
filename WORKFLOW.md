# AI-Native Product Development Workflow

Version 1.0

---

# 1. Philosophy

## Traditional Development

```text
Idea
↓
Human Planning
↓
Human Development
↓
Human QA
↓
Release
```

---

## AI-Native Development

```text
Idea
↓
Constitution
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
Release
```

---

AI 시대의 핵심 문제는 코드를 생성하는 능력이 아니다.

핵심 문제는:

* 프로젝트 규칙 유지
* 아키텍처 일관성 유지
* 반복적인 실수 방지
* 컨텍스트 관리
* 작업 순서 표준화

이다.

이 워크플로는 AI 에이전트를 통제하는 것이 아니라, AI가 따라야 하는 프로젝트 운영체계(OS)를 정의한다.

---

# 2. Workflow Overview

```text
Phase 1
Bootstrap

Phase 2
Constitution

Phase 3
Role Setup

Phase 4
Planning

Phase 5
Approval

Phase 6
Execution

Phase 7
Validation

Phase 8
Knowledge Update

Phase 9
Merge

Phase 10
Publish
```

---

# Phase 1. Bootstrap

## 목적

프로젝트를 생성하고 최소 운영 환경을 구축한다.

---

## 수행 주체

Master Agent

---

## 입력

```text
"AI 영어회화 앱 만들고 싶다."
```

---

## 수행 작업

프로젝트 구조 생성

```text
/
├── README.md
├── IDEAS.md
├── PRODUCT_SPEC.md
├── AGENTS.md
├── TASKS.md
├── JOURNAL.md
├── docs/
└── agents/
```

---

## 산출물

### README.md

프로젝트 진입점

### IDEAS.md

비즈니스 철학

### PRODUCT_SPEC.md

MVP 기능 정의

---

# Phase 2. Constitution

## 목적

프로젝트 헌법 정의

---

## 수행 주체

Master Agent + Human

---

## 수행 작업

프로젝트 절대 규칙 작성

---

## 예시

### AGENTS.md

```text
SwiftUI Only

MVVM Architecture

Supabase Only

Never create files in repository root

Reuse existing components first
```

---

## 산출물

### AGENTS.md

프로젝트 헌법

---

# Phase 3. Role Setup

## 목적

프로젝트 수행 역할 정의

---

## 수행 주체

Master Agent

---

## 수행 작업

필요 역할 생성

---

## 예시

### PM Role

```text
Requirement Analysis
Roadmap
Specification
```

---

### iOS Role

```text
SwiftUI
Audio
Architecture
```

---

### Writer Role

```text
Blog
Marketing
Documentation
```

---

## 산출물

```text
agents/
├── pm/
│   ├── IDENTITY.md
│   └── MEMORY.md
│
├── ios/
│   ├── IDENTITY.md
│   └── STATE.md
│
└── writer/
    ├── IDENTITY.md
    └── OUTBOX.md
```

---

# Phase 4. Planning

## 목적

요청을 실행 가능한 작업으로 분해

---

## 수행 주체

Orchestrator

---

## 입력

```text
애플 로그인 기능 추가
```

---

## 수행 작업

실행 계획 생성

---

## 예시 산출물

```text
1. 인증 구조 분석

2. Sign In With Apple 구현

3. User Session 연동

4. Profile 생성

5. 테스트
```

---

## 산출물

### PLAN.md

작업 계획서

---

# Phase 5. Approval

## 목적

AI 폭주 방지

---

## 수행 주체

Human

---

## 수행 작업

계획 검토

---

## 예시

```text
OAuth는 제외

Apple Login만 구현
```

---

## 산출물

```text
Approved
```

또는

```text
Rejected
```

---

# Phase 6. Execution

## 목적

코드 구현

---

## 수행 주체

Developer Role

---

## 입력

```text
PLAN.md
AGENTS.md
ARCHITECTURE.md
```

---

## 수행 작업

코드 작성

---

## 예시

```text
AuthenticationService.swift

AppleSignInButton.swift

SessionManager.swift
```

생성

---

## 산출물

Git Diff

---

# Phase 7. Validation

## 목적

자동 품질 검증

---

## 수행 주체

Validation Engine

---

## 수행 작업

### Build

```bash
xcodebuild
```

### Test

```bash
swift test
```

### Lint

```bash
swiftlint
```

---

## 결과

### Success

다음 단계 진행

---

### Failure

Knowledge Update 단계로 이동

---

## 산출물

### VALIDATION_REPORT.md

---

# Phase 8. Knowledge Update

## 목적

실패 원인을 규칙으로 승격

---

## 수행 주체

Human + Master Agent

---

## 예시

AI가 반복적으로

```text
root/utils.swift
```

생성

---

문제 원인 분석

---

AGENTS.md 수정

```text
All utility files belong to:

src/lib

Never create utility files in project root.
```

---

## 핵심

코드 수정이 아니라

규칙 수정

---

## 산출물

### Updated AGENTS.md

### JOURNAL.md

---

# Phase 9. Merge

## 목적

최종 승인 후 통합

---

## 수행 주체

Human

---

## 수행 작업

PR 검토

---

## 체크리스트

### Architecture

변경 의도 확인

### Code Quality

구조 확인

### UX

화면 검수

### Performance

성능 확인

---

## 산출물

```text
Merged
```

---

# Phase 10. Publish

## 목적

개발 결과를 자산화

---

## 수행 주체

Writer Role

---

## 입력

```text
JOURNAL.md

PR Summary

Architecture Changes
```

---

## 수행 작업

블로그 초안 생성

---

## 예시

### OUTBOX.md

```text
[Draft]

SwiftUI에서
Sign In With Apple을
구현하며 배운 점
```

---

## 산출물

### Blog Draft

### Release Note

### Changelog

---

# Core Principle

이 시스템의 핵심은 에이전트가 아니다.

에이전트는 언제든 교체될 수 있다.

```text
Codex

Gemini

Claude Code

Cursor
```

모두 교체 가능하다.

---

반면 아래 자산은 프로젝트의 영속 자산이다.

```text
AGENTS.md

ARCHITECTURE.md

PRODUCT_SPEC.md

JOURNAL.md

TASKS.md
```

---

따라서 이 워크플로의 목표는

"AI를 더 똑똑하게 만드는 것"

이 아니라

"AI가 일관되게 일하도록 만드는 것"

이다.
