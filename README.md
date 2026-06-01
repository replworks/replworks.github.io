# REPL

> REPL is a GitHub-native operating system for AI-driven product development.
>
> It transforms ideas into structured workflows, orchestrates specialized AI roles, preserves project knowledge in Markdown, and enables a single human architect to build products with an AI-native team.

REPL Works는 GitHub와 Markdown을 기반으로 AI와 함께 제품을 만드는 과정을 표준화하기 위한 오픈 프로젝트입니다.

우리는 AI가 코드를 작성하는 문제보다 더 큰 문제가 있다고 생각합니다.

* 프로젝트 규칙이 유지되지 않는다.
* 아키텍처가 점점 무너진다.
* 동일한 실수를 반복한다.
* AI마다 다른 방식으로 작업한다.
* 프로젝트가 커질수록 컨텍스트가 붕괴된다.

REPL Works는 이러한 문제를 해결하기 위해 만들어졌습니다.

---

# Vision

AI는 개발자를 대체하는 것이 아니라 개발 조직을 재구성하고 있습니다.

미래의 소프트웨어 팀은 다음과 같이 동작합니다.

```text
Human Architect
        │
        ▼
Project Constitution
        │
        ▼
Orchestrator
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
PM     DEV   WRITER
Agent  Agent  Agent
```

인간은 방향을 결정하고,

오케스트레이터는 프로젝트 상태를 관리하며,

AI 역할(Role)은 정의된 프로토콜에 따라 실행됩니다.

---

# Core Principles

## 1. Markdown First

모든 지식은 Markdown 문서로 관리됩니다.

```text
IDEAS.md
PRODUCT_SPEC.md
ARCHITECTURE.md
AGENTS.md
TASKS.md
JOURNAL.md
```

우리는 별도의 데이터베이스나 SaaS에 의존하지 않습니다.

프로젝트의 진실은 Git 저장소 안에 존재합니다.

---

## 2. Constitution Driven Development

AI는 자유롭게 행동하지 않습니다.

프로젝트 헌법(Constitution)을 따릅니다.

예시:

```text
SwiftUI Only

MVVM Architecture

Supabase Only

Never create files in repository root
```

모든 역할(Role)은 동일한 헌법을 공유합니다.

---

## 3. Planning Before Coding

코드는 계획 이후에 작성됩니다.

```text
Request
↓
Plan
↓
Approval
↓
Execution
```

AI의 가장 큰 실패는 잘못된 계획을 완벽하게 구현하는 것입니다.

---

## 4. Human Approval Gates

중요한 단계마다 인간의 검토가 존재합니다.

```text
Plan Review

Architecture Review

Merge Review
```

인간은 작업자가 아니라 최종 의사결정자입니다.

---

## 5. Knowledge Accumulation

실패는 문서화됩니다.

AI가 동일한 실수를 반복하면

코드를 수정하는 것이 아니라 규칙을 수정합니다.

```text
Failure
↓
Analysis
↓
Rule Update
↓
Future Prevention
```

프로젝트는 시간이 지날수록 더 똑똑해집니다.

---

# Workflow

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

# Repository Structure

```text
/
├── README.md
├── IDEAS.md
├── PRODUCT_SPEC.md
├── ARCHITECTURE.md
├── AGENTS.md
├── TASKS.md
├── JOURNAL.md
│
├── docs/
│
├── agents/
│   ├── pm/
│   ├── ios/
│   ├── backend/
│   └── writer/
│
└── scripts/
```

---

# Long-Term Goal

REPL Works는 단순한 AI 에이전트 프레임워크가 아닙니다.

우리는 다음을 목표로 합니다.

* AI-Native Product Development Workflow
* GitHub-Native Project Management
* Constitution Driven Development
* Multi-Role AI Collaboration
* Autonomous Knowledge Accumulation

궁극적으로는

> "아이디어를 입력하면, AI 팀이 프로토콜에 따라 제품을 설계·구현·검증·문서화하는 운영체계"

를 구축하는 것이 목표입니다.

---

# Current Status

🚧 Early Research Stage

현재는 AI와 제품 개발을 위한 Workflow 및 Constitution System을 연구하고 검증하는 단계입니다.

모든 아이디어는 실제 프로젝트를 통해 지속적으로 개선됩니다.

---

# License

MIT License
