# IDEAS.md

Version 2.0

---

# Project

REPL Works

---

# Vision

REPL Works는 AI 시대를 위한 Project Memory System이다.

AI는 점점 더 똑똑해지고 있다.

더 긴 Context Window.

더 강력한 Agent.

더 높은 코드 생성 능력.

그러나 장기 프로젝트는 여전히 같은 문제를 겪는다.

프로젝트 의도가 사라진다.

아키텍처가 붕괴한다.

동일한 실수를 반복한다.

모델을 교체하면 생산성이 초기화된다.

세션이 종료되면 중요한 컨텍스트가 사라진다.

---

REPL Works는 이 문제의 원인이 AI의 지능 부족이 아니라고 믿는다.

문제는 기억(Memory)이다.

---

# Problem

현재 대부분의 AI 개발은 Session 중심으로 이루어진다.

프로젝트 지식은 다음 위치에 흩어진다.

- Chat History
- Prompt
- Context Window
- Agent Runtime
- 개인 메모

---

프로젝트는 수개월 또는 수년 동안 존재할 수 있다.

그러나 AI의 기억은 몇 시간 또는 몇 주를 넘기 어렵다.

---

결과적으로 다음 문제가 발생한다.

- 모델이 바뀌면 기억이 사라진다.
- 장기 프로젝트를 유지하기 어렵다.
- 동일한 실수를 반복한다.
- 아키텍처가 드리프트한다.
- 중요한 의사결정이 소실된다.
- 프로젝트가 Session에 종속된다.

---

우리는 이 문제를

Project Amnesia

라고 부른다.

---

# Core Insight

AI Development has a memory problem.

---

AI는 Session Memory를 가진다.

프로젝트는 Project Memory를 필요로 한다.

---

현재 대부분의 AI 개발은

Project Memory를 Session 안에 저장한다.

---

Session이 종료되면 기억도 사라진다.

---

REPL Works는 Project Memory와 Session Memory를 구분한다.

---

Project Memory는 Repository에 저장된다.

Session Memory는 필요할 때 복구된다.

---

프로젝트는 Session보다 오래 살아야 한다.

---

# Solution

프로젝트 기억을 Runtime 밖으로 이동시킨다.

---

Project Memory

```text
Constitution

Architecture

Tasks

Git History
```

---

Session Memory

```text
Long Context
```

---

REPL Works v1 Reference Implementation

```text
AGENTS.md

ARCHITECTURE.md

TASKS.md

LONG_CONTEXT.md

Git History
```

---

프로젝트는 Project Memory만으로 복원 가능해야 한다.

세션은 Session Memory로 복원 가능해야 한다.

---

# Key Principles

## Git First

모든 프로젝트는 Git으로 시작한다.

---

## Architecture First

모든 구현은 Architecture를 따른다.

---

## Tasks Drive Development

개발은 현재 작업 범위를 명확하게 정의해야 한다.

---

## Model Independence

모델은 교체 가능해야 한다.

---

## Planning ≠ Execution

설계와 구현은 분리되어야 한다.

---

## Project Memory ≠ Session Memory

프로젝트 기억과 세션 기억은 서로 다른 문제다.

---

# Target Audience

### Solo Founder

---

### Indie Hacker

---

### Small Team

---

### AI-Native Builder

---

# Long-Term Goal

REPL Works를 AI 시대의 Project Memory Standard로 만든다.

---

예를 들어

```text
Built with REPL Works
```

가

```text
Conventional Commits
```

처럼 자연스럽게 사용되는 상태를 목표로 한다.

---

# Success Metrics

### Phase 1

REPL Works 자체를 REPL Works로 개발

---

### Phase 2

실제 서비스 5개 이상 운영

---

### Phase 3

외부 사용자가 REPL Works를 사용

---

### Phase 4

REPL Works Compatible 프로젝트 등장

---

# Final Statement

AI는 계속 바뀐다.

프로젝트는 계속 살아남아야 한다.

---

AI memory is temporary.

Project memory must be externalized.

---

Models forget.

Projects must not.
