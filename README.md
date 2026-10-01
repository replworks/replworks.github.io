# REPL Works

REPL Works는 AI와 함께 제품을 만들 때 프로젝트의 의도와 결정이 사라지지 않도록 하는 문서 주도 개발 방식이다.

AI는 코드를 빠르게 만들 수 있지만, 프로젝트의 목적과 현재 상태를 자동으로 보존하지는 않는다. REPL Works는 대화에서 결정된 내용을 문서와 Git에 남겨 다음 세션, 다음 모델, 다음 작업자가 같은 프로젝트를 이어갈 수 있게 한다.

핵심 원칙은 다음과 같다.

```text
AI는 추측하지 않는다.

프로젝트의 현재 상태는 문서가 설명한다.

과거의 상태는 Git이 보존한다.

모델은 바뀌어도 프로젝트는 이어진다.
```

## REPLWorks 방식

REPLWorks는 코드를 먼저 작성하는 방식이 아니다. 먼저 제품과 구현에 필요한 결정을 문서로 정리하고, AI는 그 문서를 읽은 뒤 정해진 범위의 작업만 수행한다.

전체 흐름은 다음과 같다.

```text
아이디어 정제 - docs/IDEAS.md 생성
    ↓
제품 정의 - .replworks/PRODUCT_SPEC.md 생성
    ↓
기술 사양 정의 - .replworks/TECH_STACK.md 생성 혹은 templates/tech-stacks/ 에서 복사
    ↓
아키텍처 설계 - .replworks/ARCHITECTURE.md 생성
    ↓
작업 계획 - ./replworks/TASKS.md 생성
    ↓
AI 구현
    ↓
사람의 검토
    ↓
`TASKS.md` 갱신
    ↓
다음 작업
```

문서가 비어 있거나 서로 충돌하면 AI가 임의로 결정하지 않는다. 필요한 내용을 질문하거나 작업을 멈추고, 사람이 문서를 먼저 확정한다.

## 세 가지 역할

### Discussion AI

Discussion AI는 구현보다 생각을 정리하는 데 사용한다.

- 아이디어를 검증한다.
- 제품의 목적과 사용자를 구체화한다.
- 기술적 선택과 설계 결정을 논의한다.
- 구현 전에 문서의 빈틈과 충돌을 찾는다.

### Execution AI

Execution AI는 확정된 문서와 작업을 기준으로 구현한다.

- 선언된 문서 순서를 따른다.
- 현재 선택된 작업만 구현한다.
- 문서에 없는 요구사항을 추가하지 않는다.
- 내부 로직을 테스트하고, 필요한 경우 실제 외부 경계도 검증한다.
- 구현 결과가 문서와 달라지면 코드를 임의로 바꾸지 않고 문서 충돌을 보고한다.

### Human Review

사람은 제품 의도와 구현 결과가 일치하는지 최종 판단한다.

- 제품 요구사항이 지켜졌는지 확인한다.
- 아키텍처와 기술 제약이 지켜졌는지 확인한다.
- 테스트와 실제 동작을 확인한다.
- 새로 발견된 결정을 문서에 반영한다.

## 문서의 책임

문서는 하나의 책임만 가진다.

| 문서              | 답하는 질문                  | 책임                                                          |
| ----------------- | ---------------------------- | ------------------------------------------------------------- |
| `PRODUCT_SPEC.md` | 무엇을 만드는가?             | 제품, 사용자, 경험, 요구사항                                  |
| `TECH_STACK.md`   | 어떤 기술 규칙으로 만드는가? | 사용언어, 버전, 파일 경로, 구현 규칙, 컨벤션, 사용 프레임워크 |
| `ARCHITECTURE.md` | 시스템은 어떻게 구성되는가?  | 구조, 모듈 관계, 데이터 흐름, 책임 경계                       |
| `TASKS.md`        | 지금 무엇을 해야 하는가?     | 현재 작업, 순서, 완료 상태                                    |
| `AGENTS.md`       | AI는 어떻게 작업하는가?      | 문서 순서, 실행 규칙, 범위와 검증                             |

버전 번호나 파일 경로로 설명할 수 있는 구현 규칙은 `TECH_STACK.md`에 둔다. 컴포넌트 간 관계나 시스템의 동작을 설명하는 내용은 `ARCHITECTURE.md`에 둔다. 제품의 목적이나 사용자 경험은 제품 명세에 둔다.

## 문서 읽기와 작업 순서

AI agent는 먼저 `AGENTS.md`를 읽고, 그 문서가 선언한 순서에 따라 authoritative 문서를 읽는다.

이 저장소의 authoritative 문서는 `.replworks/` 아래에 있다. `README.md`는 이 방식을 설명하기 위한 안내서이며 제품 요구사항이나 구현 명세가 아니다.

작업은 다음 순서로 진행한다.

1. `AGENTS.md`를 읽는다.
2. `PRODUCT_SPEC.md`, `TECH_STACK.md`, `ARCHITECTURE.md`, `TASKS.md`를 읽는다.
3. 선택된 작업의 범위와 완료 조건을 확인한다.
4. 문서에 정의된 내용만 구현한다.
5. 테스트와 빌드를 실행한다.
6. 문서와 코드가 어긋나면 다음 작업으로 넘어가지 않고 충돌을 보고한다.

## `templates/`의 역할

`templates/`는 웹사이트가 직접 렌더링하는 콘텐츠 디렉터리가 아니다.

`templates/`에는 REPLWorks 방식으로 실무를 진행할 때 AI가 참고하는 프롬프트와 미리 만들어 놓은 예제 `TECH_STACK.md`를 둔다. 실무에서 이 파일들을 수정하면, AI는 해당 내용을 참고해 웹사이트의 실제 콘텐츠와 구현을 `src/**`에 반영한다.

```text
templates/
├── prompts/       # 실무에서 사용하는 재사용 프롬프트
└── tech-stacks/   # 프레임워크별 `TECH_STACK.md` 템플릿

src/
└── ...            # Astro가 실제로 빌드하고 웹사이트에 렌더링하는 파일
```

따라서 `templates/`는 Astro content collection이나 public asset으로 등록하지 않는다. `templates/`의 파일을 웹사이트에 그대로 노출하거나 raw endpoint로 제공하지 않는다.

## 이 저장소

이 저장소는 REPL Works 공식 웹사이트를 관리한다. 웹사이트는 다음 내용을 설명하고 제공한다.

- REPL Works의 방법론
- 재사용 가능한 프롬프트
- 프로젝트 문서 표준
- 도구와 사용 방법
- REPL Works를 적용한 프로젝트 사례

웹사이트의 주요 영역은 다음과 같다.

```text
Home
Workflow
Prompts
Documents
Tools
Showcase
FAQ
```

## 로컬 개발

```bash
npm install
npm run dev
```

검증 명령은 다음과 같다.

```bash
npm run lint
npm run astro check
npm run test
npm run build
```

배포 대상은 GitHub Pages이며, 배포 방식은 저장소의 GitHub Actions 설정을 따른다.

## 핵심 문장

```text
Models change.
Projects survive.
```

## License

MIT
