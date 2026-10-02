export type PromptGroup =
  | 'A. 기획 및 아이디어 정의 단계 (Planning Phase)'
  | 'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)'
  | 'C. 검증 및 리뷰 단계 (Review & Validation Phase)';

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
    slug: 'idea-refinement',
    name: 'Idea Refinement',
    koreanName: '아이디어 정제',
    description:
      '기획자와 Discussion AI가 대화하며 아이디어와 비즈니스 가설을 다듬고 정제합니다.',
    group: 'A. 기획 및 아이디어 정의 단계 (Planning Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['IDEAS.md'],
  },
  {
    number: 2,
    slug: 'pitch-creation',
    name: 'Pitch Creation',
    koreanName: '피치 작성',
    description:
      '프로젝트의 목적과 차별성을 핵심 카피라인과 짧은 피치 스크립트로 압축 정리합니다.',
    group: 'A. 기획 및 아이디어 정의 단계 (Planning Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['PITCHING_SCRIPT.md'],
  },
  {
    number: 3,
    slug: 'product-specification',
    name: 'Product Specification',
    koreanName: '제품 정의 명세',
    description:
      '제품의 도메인 비전, 타겟 유저, 정보 아키텍처 및 세부 기능 요구사항 규격을 구조화합니다.',
    group: 'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['PRODUCT_SPEC.md'],
  },
  {
    number: 4,
    slug: 'tech-stack',
    name: 'Tech Stack',
    koreanName: '기술 사양 정의',
    description:
      '사용 기술, 언어 버전, 파일 배치 규칙, Naming Rule 등 구현 컨벤션을 정의합니다.',
    group: 'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['TECH_STACK.md'],
  },
  {
    number: 5,
    slug: 'architecture-design',
    name: 'Architecture Design',
    koreanName: '아키텍처 설계',
    description:
      '시스템 컴포넌트 구조, 모듈 간 관계, 데이터 흐름 및 라우팅 설계를 정의합니다.',
    group: 'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['ARCHITECTURE.md'],
  },
  {
    number: 6,
    slug: 'task-generation',
    name: 'Task Generation',
    koreanName: '작업 계획 수립',
    description:
      '아키텍처와 제품 명세를 바탕으로 실행 가능한 실행 마일스톤 목록을 생성합니다.',
    group: 'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)',
    targetLabel: '생성 대상',
    targetFiles: ['TASKS.md'],
  },
  {
    number: 7,
    slug: 'execution-validation',
    name: 'Execution Validation',
    koreanName: '구현 준비 상태 검증',
    description:
      '코드 구현을 시작하기 전에 상위 문서 간 충돌이나 빠진 영역이 없는지 검증합니다.',
    group: 'C. 검증 및 리뷰 단계 (Review & Validation Phase)',
    targetLabel: '검토 대상',
    targetFiles: [
      'PRODUCT_SPEC.md',
      'TECH_STACK.md',
      'ARCHITECTURE.md',
      'TASKS.md',
      'AGENTS.md',
    ],
  },
  {
    number: 8,
    slug: 'architecture-review',
    name: 'Architecture Review',
    koreanName: '아키텍처 명세 검토',
    description:
      'ARCHITECTURE.md가 제품 요구사항과 기술 스택의 구현 제약을 충족하는지 검토합니다.',
    group: 'C. 검증 및 리뷰 단계 (Review & Validation Phase)',
    targetLabel: '검토 대상',
    targetFiles: ['PRODUCT_SPEC.md', 'TECH_STACK.md', 'ARCHITECTURE.md'],
  },
  {
    number: 9,
    slug: 'task-review',
    name: 'Task Review',
    koreanName: '작업 계획 검토',
    description:
      'TASKS.md가 제품 요구사항과 아키텍처 설계를 빠짐없이 반영했는지 검토합니다.',
    group: 'C. 검증 및 리뷰 단계 (Review & Validation Phase)',
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
  'A. 기획 및 아이디어 정의 단계 (Planning Phase)',
  'B. 제품 및 시스템 사양 정의 단계 (Specification Phase)',
  'C. 검증 및 리뷰 단계 (Review & Validation Phase)',
];
