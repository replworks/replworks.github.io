# MEMORY_SYSTEM.md

Version 1.0

---

# Purpose

AI는 기억하지 않는다.

프로젝트가 기억한다.

MEMORY_SYSTEM은 프로젝트의 지식을 Markdown 문서로 영속화하기 위한 규칙을 정의한다.

---

# Core Philosophy

우리는 LLM의 컨텍스트 윈도우를 신뢰하지 않는다.

우리는 프로젝트 문서를 신뢰한다.

```text
Model Memory
=
Temporary

Project Memory
=
Permanent
```

모든 중요한 정보는 반드시 파일로 저장되어야 한다.

---

# Memory Hierarchy

프로젝트 기억은 4개 계층으로 구성된다.

```text
Global Memory

Project Memory

Role Memory

Execution Memory
```

---

# Level 1 — Global Memory

## Purpose

프로젝트 전체가 공유하는 기억

---

## Source

```text
IDEAS.md

PRODUCT_SPEC.md

ARCHITECTURE.md

AGENTS.md

TASKS.md
```

---

## Lifetime

프로젝트 전체 수명

---

## Example

```text
SwiftUI Only

Supabase

Subscription Business

English Learning Target
```

---

## Update Frequency

낮음

---

# Level 2 — Project Memory

## Purpose

프로젝트의 현재 상태 저장

---

## Source

```text
PROJECT_MEMORY.md
```

---

## Example

```text
Current Version: 0.3.1

Authentication Complete

Audio Streaming In Progress

Launch Target: July 2026
```

---

## Lifetime

프로젝트 전체 수명

---

## Update Frequency

중간

---

# Level 3 — Role Memory

## Purpose

각 역할(Role) 전용 기억

---

## Source

```text
agents/

pm/MEMORY.md

ios/MEMORY.md

backend/MEMORY.md

writer/MEMORY.md
```

---

## Example

### ios/MEMORY.md

```text
Audio Session Bugs

AVAudioEngine Notes

Realtime Streaming Decisions
```

---

### writer/MEMORY.md

```text
Brand Voice

Writing Style

Marketing Experiments
```

---

## Lifetime

역할 생존 기간

---

## Update Frequency

높음

---

# Level 4 — Execution Memory

## Purpose

작업 로그 저장

---

## Source

```text
JOURNAL.md
```

---

## Example

```text
2026-06-01

Issue:
Audio Session Crash

Cause:
Improper Engine Reset

Fix:
Reset Before Reconnect
```

---

## Lifetime

영구 보관

---

## Update Frequency

매우 높음

---

# Memory Loading Strategy

모든 역할은 작업 시작 전에 전체 프로젝트를 읽지 않는다.

필요한 기억만 로드한다.

---

## PM

Load:

```text
IDEAS.md

PRODUCT_SPEC.md

PROJECT_MEMORY.md
```

---

## DEV

Load:

```text
ARCHITECTURE.md

AGENTS.md

PROJECT_MEMORY.md

Relevant MEMORY.md
```

---

## WRITER

Load:

```text
IDEAS.md

PROJECT_MEMORY.md

JOURNAL.md
```

---

# Memory Update Rules

## Rule 1

일회성 정보는 저장하지 않는다.

Bad:

```text
오늘 회의함
```

Good:

```text
인증 구조를 OAuth에서 Magic Link로 변경
```

---

## Rule 2

결정사항만 저장한다.

Bad:

```text
Firebase 고려 중
```

Good:

```text
Firebase 제외

Supabase 채택
```

---

## Rule 3

코드는 기억하지 않는다.

Bad:

```swift
func login() {}
```

Good:

```text
AuthenticationService가
인증 책임을 담당한다.
```

---

## Rule 4

반복 실수는 기억한다.

Example:

```text
Utility 파일이 Root에 생성되는 문제 반복

Rule Added:

All utilities belong in src/lib
```

---

# Knowledge Promotion

모든 정보는 처음부터 중요한 것이 아니다.

---

## Stage 1

Observation

```text
단순 발견
```

↓

---

## Stage 2

Journal

```text
JOURNAL.md 기록
```

↓

---

## Stage 3

Memory

```text
MEMORY.md 승격
```

↓

---

## Stage 4

Constitution

```text
AGENTS.md 승격
```

---

## Example

### Observation

```text
AI가 Root에 Utility 생성
```

↓

### Journal

```text
반복 발생
```

↓

### Memory

```text
Utility는 src/lib 사용
```

↓

### Constitution

```text
Never create utility files in project root
```

---

# Memory Compression

프로젝트가 커지면 기억도 커진다.

---

Memory는 주기적으로 요약한다.

Example:

```text
50 Journal Entries
```

↓

```text
5 Important Lessons
```

↓

```text
Role Memory Update
```

---

# Golden Rule

모델은 바뀔 수 있다.

세션은 종료될 수 있다.

에이전트는 교체될 수 있다.

하지만 프로젝트 기억은 남아야 한다.

모든 중요한 지식은

반드시 Markdown 파일로 저장한다.
