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

[repl.net](https://www.repl.net/)의 소스 저장소입니다. REPL Works 방법론 자체의 설명은 사이트가 유일한 원본이며, 이 문서는 사이트를 개발하고 운영하는 방법만 다룹니다.

## 시작하기

Node.js 24 버전(`>=24.0.0 <25.0.0`)이 필요합니다. 범위를 벗어나면 `package.json`의 `engines`와 맞지 않습니다.

```bash
npm install
npm run dev
```

개발 서버는 `npm run dev:stop`으로 종료합니다. Astro 개발 툴바는 `npm run toolbar:start`와 `npm run toolbar:stop`으로 켜고 끕니다.

## 저장소 구조

사이트의 영역은 Home, Workflow, Prompts, Documents, Tools, Showcase, FAQ입니다. 콘텐츠는 한 곳에만 있지 않습니다. 특히 프롬프트는 원문과 설명이 다른 디렉터리에 있으니 아래 구조로 확인하세요.

```text
templates/
├── prompts/       # 프롬프트 원문. 사이트에 표시하고 복사하는 canonical source
├── documents/     # 사이트가 사용하는 표준 문서 원본 (AGENTS.md)
└── tech-stacks/   # 프레임워크별 TECH_STACK.md 템플릿 (사이트에서 사용하지 않음)

src/
├── content/prompts/   # 프롬프트의 설명, 목적, 사용 방법
└── ...                # Astro가 빌드해서 렌더링하는 파일

public/og/             # 페이지별 Open Graph 이미지
scripts/               # 운영 스크립트 (og-yml.mjs: OG 캡처 대상 목록 생성)
.replworks/            # 이 저장소 자체의 REPL Works 문서
AGENTS.md              # 이 저장소를 개발하는 AI 에이전트용 규칙
```

`templates/`의 파일은 Astro가 빌드할 때 읽어서 사이트의 페이지로 만듭니다. GitHub Pages는 정적 호스팅이므로 배포된 사이트가 실행 중에 `templates/`를 읽는 일은 없고, 원문을 수정하면 다시 빌드하고 배포해야 보입니다.

## 콘텐츠 업데이트

### 프롬프트 추가·수정

1. `templates/prompts/`에서 원문 파일을 추가하거나 수정합니다.
2. `src/content/prompts/`에서 해당 프롬프트의 설명 문서를 추가하거나 수정합니다.
3. 아래 [검증](#검증)을 실행하고 `npm run preview`로 결과를 확인합니다.
4. 커밋하고 push합니다. 사이트에는 [배포](#배포)를 해야 반영됩니다.

원문 파일명 규칙은 다음과 같습니다.

```text
<UPPER_SNAKE_CASE_SLUG>_PROMPT.txt
```

사이트의 slug는 파일명에서 계산합니다. 별도의 매핑 파일은 없습니다. 예를 들어 `PRODUCT_SPECIFICATION_PROMPT.txt`는 `product-specification` 프롬프트의 원본입니다.

### 페이지에서 원본 파일 보여주기

MDX 페이지에서 `templates/`의 파일을 복사해 붙이지 말고 `CodeFile`로 참조합니다. 원본이 바뀌면 페이지도 함께 바뀌므로 두 내용이 어긋나지 않습니다.

```mdx
<CodeFile path="/templates/documents/AGENTS.md" title="AGENTS.md" />
```

`path`는 프로젝트 루트 기준이며 프로젝트 밖의 경로는 오류가 납니다. `lang`을 생략하면 `md`로 표시하고, `title`을 생략하면 경로가 제목이 됩니다.

### AGENTS.md 수정

저장소 루트의 `AGENTS.md`는 이 사이트를 개발하고 운영하는 AI 에이전트가 읽는 파일이고, `templates/documents/AGENTS.md`는 웹사이트에 보여주는 용도입니다. 규칙은 루트 `AGENTS.md`에서 먼저 바꾸고 이 저장소에서 써 보며 검증합니다. 변경이 확정되면 같은 내용을 `templates/documents/AGENTS.md`에 반영하고, 사이트에는 [배포](#배포)해야 보입니다. 그래서 두 파일은 확정된 시점에는 같지만, 검증 중에는 루트가 앞서 있을 수 있습니다.

### TECH_STACK 템플릿 추가·수정

`templates/tech-stacks/`의 템플릿은 저장소에만 있고 사이트에서 사용하지 않습니다. 수정해도 사이트 콘텐츠를 갱신하거나 배포할 필요가 없습니다.

## 검증

변경을 push하기 전에 다음을 실행합니다.

```bash
npm run check
```

`check`는 lint, 포맷 검사(`format:check`), Astro 타입 검사(`astro:check`), 테스트, 빌드를 차례로 실행합니다. 하나만 확인하려면 각 스크립트를 따로 실행하세요. `npm run test`는 단위 테스트(Vitest)와 E2E 테스트(Playwright)를 차례로 실행합니다. 따로 실행하려면 `npm run test:unit`과 `npm run test:e2e`를 쓰세요. `test:unit`은 감시 모드로 시작할 수 있으니 한 번만 실행하려면 `npx vitest run`을 사용합니다. E2E를 처음 실행하기 전에는 Playwright 브라우저를 설치합니다.

```bash
npx playwright install
```

포맷은 `npm run format`이 저장소 전체를 고치고, `npm run format:check`는 `.ts`, `.tsx`, `.astro`, `.md`, `.mdx` 파일을 검사합니다.

`src/site-invariants.test.ts`는 사이트가 지켜야 할 불변 조건을 검사합니다. 예를 들어 AGENTS.md 문서 페이지가 `templates/documents/AGENTS.md`를 `CodeFile`로 직접 참조하는지 확인합니다.

빌드 중에는 깨진 링크도 검사합니다(`astro-broken-links-checker`). 페이지를 옮기거나 지웠다면 빌드 로그를 확인하세요. CI(`ci.yml`)는 빌드를 검증합니다. 프롬프트 원문을 수정했다면 빌드 후 미리보기로 사이트에 반영되는 결과를 확인합니다.

```bash
npm run build
npm run preview
```

## OG 이미지

각 페이지의 Open Graph 이미지는 `public/og/<페이지-경로>.png`에 저장합니다. 페이지를 추가하거나 디자인이 바뀌면 전체를 다시 생성합니다.

```bash
npm run og
```

이 명령은 사이트를 빌드하고 미리보기 서버를 띄운 뒤, `dist/`의 HTML을 스캔해 `og.yml`을 만들고, `shot-scraper`로 각 페이지를 1200×630으로 캡처합니다. 끝나면 서버를 종료합니다. 이 스크립트는 셸의 백그라운드 실행(`&`)과 `kill`을 쓰므로 macOS와 Linux 셸에서 실행하세요(Windows는 WSL). 서버가 뜨기를 고정 3초만 기다립니다. `og.yml`만 갱신하려면 빌드가 끝난 상태에서 `npm run og:yml`을 실행합니다.

`shot-scraper`가 없으면 먼저 설치합니다.

```bash
pip install shot-scraper
shot-scraper install
```

생성된 이미지는 변경 사항으로 커밋해야 배포에 포함됩니다.

```text
public/og/
├── index.png                      # /
├── prompts.png                    # /prompts
├── prompts-idea-generation.png    # /prompts/idea-generation
└── showcase-ai-issue.png          # /showcase/ai-issue
```

## 배포

사이트는 GitHub Pages로 배포합니다. push만으로는 반영되지 않고, `astro.yml`(Deploy Astro site to Pages)이 다음 중 하나로 시작합니다.

- GitHub Release를 발행한다. 해당 태그 시점의 코드가 배포됩니다.
- GitHub Actions에서 workflow를 수동으로 실행한다(`workflow_dispatch`). 선택한 브랜치가 배포됩니다.

workflow는 Node 24로 의존성을 설치하고(`npm ci`, `yarn.lock`이 있으면 yarn) `astro build`를 실행해서 `dist/`를 Pages에 올립니다. `--site`와 `--base`는 Pages 설정의 값으로 빌드할 때 덮어씁니다. 배포는 한 번에 하나만 진행하며, 진행 중인 배포는 취소하지 않습니다.

배포할 때 알아 둘 점이 세 가지 있습니다.

- 배포 workflow는 빌드만 합니다. lint와 테스트는 실행하지 않으므로, Release를 발행하기 전에 [검증](#검증)을 통과시키세요.
- `npm ci`를 쓰므로 `package-lock.json`을 항상 커밋해야 합니다. `yarn.lock`이 저장소에 있으면 workflow가 yarn을 선택하니 두 패키지 매니저를 섞지 마세요.
- 저장소 Settings의 Pages에서 Source가 GitHub Actions여야 합니다.

## 문제 해결

`npm run og`가 실패하면 `shot-scraper`가 설치되어 있는지부터 확인하세요.

## 기여와 AI 에이전트

이 저장소도 REPL Works 방식으로 개발합니다. AI 에이전트는 작업 전에 `AGENTS.md`를 읽고, 거기에 선언된 순서로 `.replworks/`의 문서를 따릅니다. 이 README는 안내서일 뿐 요구사항이나 구현 명세가 아닙니다.

## License

MIT
