# 리플웍스 - REPL Works

![홈페이지](/public/og/index.png)

[![CI Pipeline](https://github.com/replworks/replworks.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/replworks/replworks.github.io/actions/workflows/ci.yml)
[![Deploy Astro site to Pages](https://github.com/replworks/replworks.github.io/actions/workflows/astro.yml/badge.svg)](https://github.com/replworks/replworks.github.io/actions/workflows/astro.yml)
[![update-changelog](https://github.com/replworks/replworks.github.io/actions/workflows/update-changelog.yml/badge.svg)](https://github.com/replworks/replworks.github.io/actions/workflows/update-changelog.yml)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev/)
[![REPLWorks](https://img.shields.io/badge/with-REPLWorks-3375C6)](https://www.repl.net/)

REPL Works는 AI와 함께 제품을 만들 때 프로젝트의 의도와 결정이 사라지지 않도록 하는 문서 주도 개발 방식입니다.

AI는 코드를 빠르게 작성할 수 있지만, 프로젝트의 목적과 현재 상태를 자동으로 보존하지는 않습니다. REPL Works는 대화에서 결정된 내용을 문서와 Git에 남겨, 다음 세션·다음 모델·다음 작업자가 같은 프로젝트를 자연스럽게 이어갈 수 있도록 합니다.

핵심 원칙은 다음과 같습니다.

```text
AI는 추측하지 않습니다.

프로젝트의 현재 상태는 문서가 설명합니다.

과거의 상태는 Git이 보존합니다.

모델은 바뀌어도 프로젝트는 이어집니다.
```

## REPLWorks 방식

REPLWorks는 코드를 먼저 작성하는 방식이 아닙니다. 제품과 구현에 필요한 결정을 먼저 문서로 정리하고, AI는 그 문서를 읽은 뒤 정해진 범위의 작업만 수행합니다.

전체 흐름은 다음과 같습니다.

```text
아이디어 정제 - docs/IDEAS.md 생성
    ↓
제품 정의 - .replworks/PRODUCT_SPEC.md 생성
    ↓
기술 사양 정의 - .replworks/TECH_STACK.md 생성 혹은 templates/tech-stacks/ 에서 복사
    ↓
아키텍처 설계 - .replworks/ARCHITECTURE.md 생성
    ↓
작업 계획 - .replworks/TASKS.md 생성
    ↓
AI 구현
    ↓
사람의 검토
    ↓
`TASKS.md` 갱신
    ↓
다음 작업
```

문서가 비어 있거나 서로 충돌하면 AI가 임의로 결정하지 않습니다. 필요한 내용을 질문하거나 작업을 멈추고, 사람이 문서를 먼저 확정합니다.

## 세 가지 역할

### 대화형 AI

대화형 AI는 구현보다 생각을 정리하는 데 활용합니다.

- 아이디어를 검증합니다.
- 제품의 목적과 사용자를 구체화합니다.
- 기술적 선택과 설계 결정을 논의합니다.
- 구현 전에 문서의 빈틈과 충돌을 찾습니다.

### 코딩형 AI

코딩형 AI는 확정된 문서와 작업을 기준으로 구현합니다.

- 선언된 문서 순서를 따릅니다.
- 현재 선택된 작업만 구현합니다.
- 문서에 없는 요구사항을 추가하지 않습니다.
- 내부 로직을 테스트하고, 필요한 경우 실제 외부 경계도 검증합니다.
- 구현 결과가 문서와 달라지면 코드를 임의로 바꾸지 않고 문서 충돌을 보고합니다.

### Human Review

사람은 제품 의도와 구현 결과가 일치하는지 최종 판단합니다.

- 제품 요구사항이 지켜졌는지 확인합니다.
- 아키텍처와 기술 제약이 지켜졌는지 확인합니다.
- 테스트와 실제 동작을 확인합니다.
- 새로 발견된 결정을 문서에 반영합니다.

## 문서의 책임

문서는 하나의 책임만 가집니다.

| 문서              | 답하는 질문                  | 책임                                                          |
| ----------------- | ---------------------------- | ------------------------------------------------------------- |
| `PRODUCT_SPEC.md` | 무엇을 만드는가?             | 제품, 사용자, 경험, 요구사항                                  |
| `TECH_STACK.md`   | 어떤 기술 규칙으로 만드는가? | 사용언어, 버전, 파일 경로, 구현 규칙, 컨벤션, 사용 프레임워크 |
| `ARCHITECTURE.md` | 시스템은 어떻게 구성되는가?  | 구조, 모듈 관계, 데이터 흐름, 책임 경계                       |
| `TASKS.md`        | 지금 무엇을 해야 하는가?     | 현재 작업, 순서, 완료 상태                                    |
| `AGENTS.md`       | AI는 어떻게 작업하는가?      | 문서 순서, 실행 규칙, 범위와 검증                             |

버전 번호나 파일 경로로 설명할 수 있는 구현 규칙은 `TECH_STACK.md`에 둡니다. 컴포넌트 간 관계나 시스템의 동작을 설명하는 내용은 `ARCHITECTURE.md`에 둡니다. 제품의 목적이나 사용자 경험은 `PRODUCT_SPEC.md`에 둡니다.

## 문서 읽기와 작업 순서

AI agent는 먼저 `AGENTS.md`를 읽고, 그 문서가 선언한 순서에 따라 authoritative 문서를 읽습니다.

이 저장소의 authoritative 문서는 `.replworks/` 아래에 있습니다. `README.md`는 이 방식을 설명하기 위한 안내서이며, 제품 요구사항이나 구현 명세가 아닙니다.

작업은 다음 순서로 진행합니다.

1. `AGENTS.md`를 읽습니다.
2. `PRODUCT_SPEC.md`, `TECH_STACK.md`, `ARCHITECTURE.md`, `TASKS.md`를 읽습니다.
3. 선택된 작업의 범위와 완료 조건을 확인합니다.
4. 문서에 정의된 내용만 구현합니다.
5. 테스트와 빌드를 실행합니다.
6. 문서와 코드가 어긋나면 다음 작업으로 넘어가지 않고 충돌을 보고합니다.

## `templates/`의 역할

`templates/`는 웹사이트가 직접 렌더링하는 콘텐츠 디렉터리가 아닙니다.

`templates/`에는 REPLWorks 방식으로 실무를 진행할 때 사용하는 프롬프트와 미리 준비된 예제 `TECH_STACK.md`를 둡니다.

`templates/prompts/`의 프롬프트 파일은 웹사이트에 표시하고 복사하는 원문의 canonical source입니다. Astro는 사이트를 빌드할 때 이 파일을 읽어 정적 페이지에 포함합니다. 실행 중인 사이트가 `templates/`를 직접 읽는 것은 아닙니다.

프롬프트 원본 파일명은 다음 규칙을 사용합니다.

```text
<UPPER_SNAKE_CASE_SLUG>_PROMPT.txt
```

예를 들어 `PRODUCT_SPECIFICATION_PROMPT.txt`는 사이트의 `product-specification` 프롬프트 원본입니다. 별도의 파일 매핑 없이 파일명에서 사이트 slug를 계산합니다.

```text
templates/
├── prompts/       # 사이트 원문으로도 사용하는 재사용 프롬프트
└── tech-stacks/   # 프레임워크별 `TECH_STACK.md` 템플릿

src/
├── content/prompts/ # 프롬프트 설명, 목적, 사용 방법
└── ...              # Astro가 빌드하고 웹사이트에 렌더링하는 파일
```

`templates/`는 Astro content collection이나 public asset으로 등록하지 않습니다. 원본 파일을 raw endpoint로 제공하지 않으며, 빌드 결과에 필요한 프롬프트 텍스트만 정적으로 포함합니다.

## 이 저장소

이 저장소는 REPL Works 공식 웹사이트를 관리합니다. 웹사이트는 다음 내용을 설명하고 제공합니다.

- REPL Works의 방법론
- 재사용 가능한 프롬프트
- 프로젝트 표준 문서
- 도구와 사용 방법
- REPL Works를 적용한 프로젝트 사례

웹사이트의 주요 영역은 다음과 같습니다.

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

검증 명령은 다음과 같습니다.

```bash
npm run lint
npm run astro check
npm run test
npm run build
```

프롬프트 원문을 수정한 경우에는 다음 명령으로 사이트에 반영되는 결과를 확인합니다.

```bash
npm run build
npm run preview
```

`templates/prompts/`는 Astro의 일반 콘텐츠 디렉터리 바깥에 있으므로 개발 서버가 변경을 자동으로 갱신하지 않을 수 있습니다. 변경이 바로 보이지 않으면 개발 서버를 재시작합니다.

## OG 이미지 생성

각 페이지의 Open Graph 이미지는 `public/og/` 폴더에 저장합니다. 페이지가 추가되거나 디자인이 바뀌면 다음 명령으로 전체 이미지를 다시 생성합니다.

```bash
npm run og
```

이 명령은 다음 순서로 실행됩니다.

```text
astro build          # 사이트를 빌드합니다
astro preview        # 미리보기 서버를 시작합니다 (백그라운드)
npm run og:yml       # dist/ 의 HTML 파일을 스캔해 og.yml 을 자동 생성합니다
shot-scraper multi   # og.yml 에 따라 각 페이지를 1200×630으로 캡처합니다
서버 종료            # 미리보기 서버를 종료합니다
```

생성된 이미지는 `public/og/<페이지-경로>.png` 형식으로 저장됩니다.

```text
public/og/
├── index.png                      # /
├── prompts.png                    # /prompts
├── prompts-idea-generation.png    # /prompts/idea-generation
├── showcase-ai-issue.png          # /showcase/ai-issue
└── ...
```

`og.yml`만 먼저 갱신하려면 빌드가 완료된 상태에서 다음 명령을 사용합니다.

```bash
npm run og:yml
```

`shot-scraper`가 설치되어 있지 않으면 다음 명령으로 설치합니다.

```bash
pip install shot-scraper
shot-scraper install
```

OG 이미지를 새로 생성한 후에는 변경된 파일을 커밋하고 배포합니다.

## 배포

프롬프트 원문 수정은 실행 중인 배포 사이트에 즉시 반영되지 않습니다. 원본 수정 후 Astro 빌드가 다시 실행되어야 합니다.

배포 흐름은 다음과 같습니다.

```text
templates/prompts/ 원본 수정
    ↓
변경 사항 커밋 및 push
    ↓
GitHub Actions CI가 빌드 검증
    ↓
Release 발행 또는 Deploy workflow 수동 실행
    ↓
Astro가 원본 프롬프트를 읽어 dist 생성
    ↓
GitHub Pages 배포
```

배포된 사이트는 `templates/` 파일을 직접 읽지 않습니다. GitHub Actions가 빌드한 `dist/` 정적 결과물만 제공합니다. 배포 workflow는 Release 발행 또는 GitHub Actions의 수동 실행으로 시작합니다.

## 핵심 문장

```text
Models change.
Projects survive.
```

## License

MIT
