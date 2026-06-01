# AGENTS.md (System Registry & Router Protocol)

이 문서는 1인 지주회사의 AI 에이전트 군대를 통제하기 위한 최상위 라우터 명세서이다. 모든 에이전트는 독립된 작업 폴더를 가지며, 지정된 ID와 XML 태그 영역 바깥의 문서를 임의로 읽거나 수정할 수 없다.

---

## 1. Global Governance (글로벌 통제 원칙)

* **Master Architect (Human):** 모든 의사결정의 최종 승인권자(대표님). 에이전트가 제안한 스펙 및 코드는 인간의 승인 없이 메인 브랜치에 병합(Merge)될 수 없다.
* **Context Isolation Rule:** 에이전트 간의 직접 대화는 금지한다. 모든 협업과 정보 교환은 각 에이전트의 격리 디렉토리 내 `MEMORY.md` 또는 `STATE.md`를 거쳐 단방향으로만 전파된다.
* **No Scope Creep:** 에이전트는 기획서(`PRODUCT_SPEC.md`)에 정의되지 않은 기능을 독자적으로 상상하여 추가할 수 없다.

---

## 2. Agent Swarm Registry (에이전트 라인업 및 라우팅 경로)

### 📋 [Agent 1] AI Product Manager (PM)

* **System ID:** `AGENT_PM_01`
* **Trigger Tag:** `<AGENT_PM_01>`
* **라우팅 디렉토리:** `./agents/agent_1_pm/`
* **참조(Read) 범위:** - 외부: `/IDEAS.md`, `/README.md`
  * 내부: `./IDENTITY.md`, `./MEMORY.md`
* **수정(Write) 범위:** - 외부: `/PRODUCT_SPEC.md`
  * 내부: `./MEMORY.md`

### 🛠️ [Agent 2] Full-Stack iOS Developer (Dev)

* **System ID:** `AGENT_DEV_01`
* **Trigger Tag:** `<AGENT_DEV_01>`
* **라우팅 디렉토리:** `./agents/agent_2_ios/`
* **참조(Read) 범위:** - 외부: `/README.md`, `/PRODUCT_SPEC.md`, `/JOURNAL.md`
  * 내부: `./IDENTITY.md`, `./STATE.md`
* **수정(Write) 범위:** - 외부: `/ARCHITECTURE.md`, `.*swift` (소스코드 전체)
  * 내부: `./STATE.md`
