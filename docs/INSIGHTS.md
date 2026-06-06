# INSIGHTS.md

Version 1.0

---

# Purpose

이 문서는 REPL Works를 설계하고 검토하면서 발견한 통찰을 기록한다.

이 문서는 프로젝트 규칙이 아니다.

이 문서는 아키텍처 문서도 아니다.

이 문서는 TASK 관리 문서도 아니다.

---

목적은 다음과 같다.

```text
왜 이런 구조가 만들어졌는가

어떤 문제가 존재했는가

어떤 철학이 시스템을 형성했는가
```

---

# Observation 1

REPL Works는 AI Development Workflow가 아니다.

---

처음에는 개발 프로세스처럼 보인다.

하지만 실제 핵심은

```text
Project Memory System
```

에 가깝다.

---

프로젝트 기억을 모델 밖으로 꺼내는 것이 목적이다.

---

# Observation 2

프로젝트의 가장 큰 문제는 코드 생성 능력이 아니다.

---

장기 프로젝트에서 가장 큰 문제는

```text
Project Amnesia
```

이다.

---

AI는 코드를 작성할 수 있다.

하지만 프로젝트를 기억하지 못한다.

---

REPL Works는 이 문제를 해결하려고 한다.

---

# Observation 3

Architecture는 목적지다.

Tasks는 현재 위치다.

---

ARCHITECTURE.md만 존재하면

AI는 과잉 구현을 시도한다.

---

TASKS.md는 현재 작업 범위를 제한한다.

---

Architecture와 Tasks는 서로 대체 관계가 아니다.

둘 다 필요하다.

---

# Observation 4

Planning과 Execution은 분리되어야 한다.

---

대부분의 AI 개발 실패는

```text
설계

구현

수정

회고
```

를 같은 세션에서 수행하면서 발생한다.

---

REPL Works는

```text
Planning Runtime

Execution Runtime
```

을 분리한다.

---

이는 역할 분리가 아니라

Context 분리다.

---

# Observation 5

문서는 사람보다 AI를 위한 것이다.

---

README.md를 제외한 대부분 문서는

AI를 위한 문서다.

---

문서는 설명서가 아니다.

문서는 AI의 외부 기억장치다.

---

# Observation 6

모델은 교체 가능해야 한다.

---

Claude

GPT

Gemini

Codex

Cursor

---

모두 교체 가능해야 한다.

---

프로젝트는 특정 모델에 종속되면 안 된다.

---

프로젝트 기억은 Git에 존재해야 한다.

---

# Observation 7

Git은 단순 버전 관리 시스템이 아니다.

---

REPL Works에서 Git은

```text
Project Memory Storage
```

이다.

---

프로젝트의 기억은

Git Commit을 통해 보존된다.

---

# Observation 8

LONG_CONTEXT.md는 프로젝트 문서가 아니다.

---

LONG_CONTEXT.md는

```text
Session Bootstrap Document
```

이다.

---

프로젝트를 설명하기 위한 문서가 아니다.

---

새로운 LLM 세션이 시작될 때

기억을 복구하기 위한 문서다.

---

AGENTS.md에 포함되어서는 안 된다.

---

자동 참조되어서도 안 된다.

---

사람이 필요할 때 수동으로 주입한다.

---

# Observation 9

문서의 수보다 진입점이 중요하다.

---

문서가 많아지는 것은 큰 문제가 아니다.

---

진짜 문제는

```text
어디서 시작해야 하는가
```

를 모르는 것이다.

---

AGENTS.md

ARCHITECTURE.md

은

진입점 역할을 수행한다.

---

# Observation 10

프로젝트 기억과 세션 기억은 다르다.

---

프로젝트 기억

```text
Git

ARCHITECTURE.md

AGENTS.md

TASKS.md
```

---

세션 기억

```text
LONG_CONTEXT.md
```

---

프로젝트 기억은 영속적이다.

---

세션 기억은 필요할 때만 복원된다.

---

# Final Insight

AI memory is temporary.

Project memory must be externalized.

---

Models forget.

Projects must not.
