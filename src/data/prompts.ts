export type PromptGroup =
  | 'A. 사람을 위한 아이디어, 피칭 스크립트 문서 생성 단계 (Planning Phase)'
  | 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)';

export interface PromptDefinition {
  number: number;
  slug: string;
  name: string;
  koreanName: string;
  description: string;
  group: PromptGroup;
  targetLabel: '생성 대상' | '검토 대상';
  targetFiles: string[];
}

export const promptDefinitions: PromptDefinition[] = [
  {
    number: 1,
    slug: 'idea-generation',
    name: 'IDEA.md Generation',
    koreanName: '`IDEAS.md` 생성',
    description:
      '대화형 AI가 대화하며 만들어진 아이디어를 IDEAS.md 파일로 생성합니다.',
    group:
      'A. 사람을 위한 아이디어, 피칭 스크립트 문서 생성 단계 (Planning Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['IDEAS.md'],
  },
  {
    number: 2,
    slug: 'pitch-creation',
    name: 'PITCHING_SCRIPT.md Generation',
    koreanName: '`PITCHING_SCRIPT.md` 생성',
    description:
      '대화형 AI가 대화하며 만들어진 아이디어를 바탕으로 PITCHING_SCRIPT.md 파일을 생성합니다.',
    group:
      'A. 사람을 위한 아이디어, 피칭 스크립트 문서 생성 단계 (Planning Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['PITCHING_SCRIPT.md'],
  },
  {
    number: 3,
    slug: 'product-specification',
    name: 'PRODUCT_SPEC.md Generation',
    koreanName: '`PRODUCT_SPEC.md` 생성',
    description:
      '제품의 도메인 비전, 타겟 유저, 정보 아키텍처 및 세부 기능 요구사항 규격을 구조화한 PRODUCT_SPEC.md 파일을 생성합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['PRODUCT_SPEC.md'],
  },
  {
    number: 4,
    slug: 'tech-stack',
    name: 'TECH_STACK.md Generation',
    koreanName: '`TECH_STACK.md` 생성',
    description:
      '사용 기술, 언어 버전, 파일 배치 규칙, Naming Rule 등 구현 컨벤션을 정의한 TECH_STACK.md 파일을 생성합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['TECH_STACK.md'],
  },
  {
    number: 5,
    slug: 'architecture-design',
    name: 'ARCHITECTURE.md Generation',
    koreanName: '`ARCHITECTURE.md` 생성',
    description:
      '시스템 컴포넌트 구조, 모듈 간 관계, 데이터 흐름 및 라우팅 설계를 정의한 ARCHITECTURE.md 파일을 생성합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['ARCHITECTURE.md'],
  },
  {
    number: 6,
    slug: 'architecture-review',
    name: 'ARCHITECTURE.md Review',
    koreanName: '`ARCHITECTURE.md` 검토',
    description:
      'ARCHITECTURE.md가 제품 요구사항과 기술 스택의 구현 제약을 충족하는지 검토합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '검토 대상',
    targetFiles: ['PRODUCT_SPEC.md', 'TECH_STACK.md', 'ARCHITECTURE.md'],
  },
  {
    number: 7,
    slug: 'execution-validation',
    name: 'Execution Validation',
    koreanName: '3종 문서 검토',
    description:
      '코드 구현을 시작하기 전에 상위 문서 간 충돌이나 빠진 영역이 없는지 검증합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '검토 대상',
    targetFiles: ['PRODUCT_SPEC.md', 'TECH_STACK.md', 'ARCHITECTURE.md'],
  },
  {
    number: 8,
    slug: 'task-generation',
    name: 'TASKS.md Generation',
    koreanName: '`TASKS.md` 생성',
    description:
      '아키텍처와 제품 명세를 바탕으로 실행 가능한 실행 마일스톤 목록이 포함된 TASKS.md 파일을 생성합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['TASKS.md'],
  },
  {
    number: 9,
    slug: 'task-review',
    name: 'TASKS.md Review',
    koreanName: '`TASKS.md` 검토',
    description:
      'TASKS.md가 제품 요구사항과 아키텍처 설계를 빠짐없이 반영했는지 검토합니다.',
    group: 'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
    targetLabel: '검토 대상',
    targetFiles: [
      'PRODUCT_SPEC.md',
      'TECH_STACK.md',
      'ARCHITECTURE.md',
      'TASKS.md',
    ],
  },
];

export const promptGroups: PromptGroup[] = [
  'A. 사람을 위한 아이디어, 피칭 스크립트 문서 생성 단계 (Planning Phase)',
  'B. 코딩형 AI를 위한 4종 문서 생성 단계 (Specification Phase)',
];
