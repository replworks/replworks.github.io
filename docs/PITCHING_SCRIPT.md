# PITCHING_SCRIPT.md

Version 2.0

---

# What Is REPL Works?

REPL Works는 AI 개발 워크플로우가 아니다.

REPL Works는 AI 시대를 위한 Project Memory System이다.

---

# The Problem

AI development has a memory problem.

---

AI는 코드를 작성할 수 있다.

Agent는 작업을 수행할 수 있다.

모델은 점점 더 똑똑해지고 있다.

---

그러나 장기 프로젝트는 여전히 실패한다.

---

왜일까?

---

프로젝트는 수개월 또는 수년 동안 존재한다.

그러나 AI의 기억은 몇 시간 또는 몇 주를 넘기 어렵다.

---

중요한 프로젝트 지식은 다음 위치에 흩어진다.

* Chat History
* Prompt
* Context Window
* Agent Runtime

---

그리고 언젠가 이 기억들은 사라진다.

---

우리는 이 문제를

Project Amnesia

라고 부른다.

---

# The Real Problem

우리는 오랫동안 AI의 지능을 향상시키려고 노력했다.

더 좋은 모델.

더 긴 Context.

더 강력한 Agent.

---

그러나 문제는 지능이 아니었다.

---

문제는 기억이었다.

---

# Project Memory vs Session Memory

REPL Works는 두 가지 기억을 구분한다.

---

Project Memory

프로젝트가 유지해야 하는 영속적 기억

---

Session Memory

현재 세션이 유지하는 임시 기억

---

대부분의 AI 개발은 이 둘을 혼동한다.

---

프로젝트 기억을 Session 안에 저장하면

Session이 종료될 때 프로젝트도 함께 기억을 잃는다.

---

# The REPL Works Approach

REPL Works는 다른 질문을 한다.

---

기억은 왜 Runtime 안에 있어야 하는가?

---

프로젝트 기억은 Repository 안에 존재해야 한다.

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

REPL Works는 프로젝트 기억을 Repository에 저장한다.

필요한 경우 Session Memory를 복구한다.

---

# What Changes?

모델이 바뀌어도 프로젝트는 유지된다.

---

Session이 종료되어도 프로젝트는 유지된다.

---

새로운 AI를 사용해도 프로젝트를 복원할 수 있다.

---

프로젝트는 특정 모델에 종속되지 않는다.

---

# Why It Matters

AI 시대의 핵심 문제는 더 똑똑한 AI를 만드는 것이 아니다.

---

더 오래 살아남는 프로젝트를 만드는 것이다.

---

프로젝트는 모델보다 오래 살아야 한다.

---

프로젝트는 Session보다 오래 살아야 한다.

---

# One Sentence

Most AI systems store memory inside the runtime.

REPL Works stores project memory inside the repository.

---

# Closing

AI memory is temporary.

Project memory must be externalized.

---

Models forget.

Projects must not.
