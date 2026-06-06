# IDEAS.md

Version 1.0

---

# Vision

REPL Works는 AI와 함께 제품을 만드는 과정을 표준화하기 위한 GitHub-Native Project Operating System이다.

우리는 AI가 코드를 작성하는 능력보다, 프로젝트를 일관되게 수행하는 능력이 더 중요하다고 믿는다.

---

# Problem

현재 AI 기반 개발은 다음 문제를 가진다.

- 프로젝트 규칙이 유지되지 않는다.
- 동일한 실수를 반복한다.
- 아키텍처가 점점 무너진다.
- 컨텍스트가 길어질수록 품질이 하락한다.
- 사람마다 다른 방식으로 AI를 사용한다.

결과적으로 프로젝트가 커질수록 생산성이 감소한다.

---

# Solution

프로젝트의 모든 지식을 Markdown 문서로 관리한다.

```text
IDEAS.md
PRODUCT_SPEC.md
ARCHITECTURE.md
AGENTS.md
TASKS.md
JOURNAL.md
```

AI는 이 문서들을 기반으로 행동한다.

---

# Core Hypothesis

좋은 결과물은 좋은 모델에서 나오는 것이 아니라

좋은 프로세스에서 나온다.

```text
Constitution
↓
Planning
↓
Execution
↓
Validation
↓
Knowledge Update
```

반복 가능한 워크플로가 품질을 만든다.

---

# Long Term Goal

아이디어 하나만으로

- 프로젝트 초기화
- 문서 생성
- 역할 구성
- 구현
- 검증
- 문서화

까지 수행 가능한 AI-Native Product Development OS를 구축한다.

---

# Non Goals

우리는 다음을 목표로 하지 않는다.

- 새로운 LLM 개발
- 새로운 IDE 개발
- 새로운 Git 플랫폼 개발

우리는 기존 도구를 오케스트레이션한다.

```text
GitHub
Slack
Codex
Gemini
Claude
Cursor
```

---

# Success Metrics

프로젝트가 성공했다고 판단하는 기준:

- 작은 프로젝트 5개 이상 동일 프로세스로 완주
- 동일 실수 반복 감소
- 온보딩 시간 감소
- AI 작업 품질 향상
- 문서 기반 프로젝트 운영 가능
