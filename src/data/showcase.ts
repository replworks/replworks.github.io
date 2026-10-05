export interface ShowcaseProject {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  lesson: string;
  detailUrl: string;
  website?: string;
  github?: string;
  featured: boolean;
  order: number;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: 'repl-works-website',
    name: 'REPL Works 웹사이트',
    description:
      'REPL Works 방법론과 6+1종 표준 문서를 스스로에게 최초로 적용한 도그푸딩(Dogfooding) 참조 프로덕트',
    tags: ['Website', 'Dogfooding'],
    lesson:
      'Content First: 구현 코드는 언제든 바뀌지만, 잘 정제된 문서는 프로젝트 기억으로 영구 보존됩니다.',
    detailUrl: '/showcase/repl-works-website',
    website: 'https://www.repl.net',
    github: 'https://github.com/replworks/replworks.github.io',
    featured: true,
    order: 1,
  },
  {
    slug: 'wifinote',
    name: '와이파이 노트 (WIFI Note)',
    description:
      '와이파이 노트(WIFI Note)는 매장과 오프라인 공간에 붙이는 Wi-Fi 안내문을 만드는 REPLWorks 호환 상용 웹 서비스입니다.',
    tags: ['Commercial', 'Web App'],
    lesson:
      '비공개 상용 프로덕트일수록 약속이 필요합니다. 코드를 공개하지 않아도 팀원과 AI 에이전트 사이에는 문서 표준이라는 명확한 약속이 있어야 합니다.',
    detailUrl: '/showcase/wifinote',
    website: 'https://wifinote.net',
    featured: true,
    order: 2,
  },
  {
    slug: 'ai-issue',
    name: 'AI Issue Publisher',
    description:
      'AI와 나눈 대화에서 나온 작업 항목을 GitHub Issue로 발행하는 CLI 도구입니다.',
    tags: ['Tooling', 'CLI'],
    lesson:
      '모호한 지시는 에이전트의 환각을 유발합니다. 수락 기준(Acceptance Criteria)이 명시된 이슈일수록 구현이 정밀해집니다.',
    detailUrl: '/showcase/ai-issue',
    github: 'https://github.com/replworks/ai-issue',
    featured: true,
    order: 3,
  },
  {
    slug: 'claytube',
    name: '클래이튜브 (ClayTube)',
    description:
      '장기간에 걸쳐 지속 확장되는 서비스에서 AI 모델 변경에도 견디는 프로젝트 연속성을 증명하는 REPL Works 호환 프로젝트',
    tags: ['Tooling', 'CLI'],
    lesson:
      '장기 연속성은 내구성 있는 기억을 필요로 합니다: 수개월 동안 세션이 바뀌더라도 Git 문서가 있으면 맥락 유실이 없습니다.',
    detailUrl: '/showcase/claytube',
    website: 'https://www.palgle.com/claytube/',
    github: 'https://github.com/eternops/claytube',
    featured: true,
    order: 4,
  },
  {
    slug: 'eternops',
    name: '이터놉스 (ETERNOps)',
    description:
      '엔터프라이즈 운영 자동화 및 장기적인 서비스 구축 시스템을 준수하는 REPL Works 호환 프로덕트',
    tags: ['Enterprise', 'Operations'],
    lesson:
      '프로젝트 기억이 세션 기억보다 우월합니다: 일시적인 대화 내역에 의존하지 않고 Git에 명세화된 시스템이 운영의 안정성을 제공합니다.',
    detailUrl: '/showcase/eternops',
    featured: false,
    order: 5,
  },
  {
    slug: 'etern-labs',
    name: '이턴랩스 (ETERN Labs)',
    description:
      '불확실성이 높은 신규 아이디어 및 R&D 실험 프로젝트에 적용하여 빠른 검증과 연속성을 제공하는 REPL Works 호환 프로젝트',
    tags: ['R&D', 'Experimental'],
    lesson:
      '아키텍처가 빠른 실험을 안정화합니다: 자유로운 실험 과정에서도 ARCHITECTURE.md가 기본 뼈대를 유지하여 무질서한 코드 누적을 방지합니다.',
    detailUrl: '/showcase/etern-labs',
    website: 'https://www.etern.co.kr/labs',
    featured: false,
    order: 6,
  },
  {
    slug: 'mma',
    name: 'MMA (Multi-Model Agent)',
    description:
      '인간 엔지니어와 다중 AI 에이전트 간 역할 분담 및 협업 구조를 보여주는 REPL Works 호환 프로젝트',
    tags: ['AI', 'Collaboration'],
    lesson:
      '공유 기억의 필수성: 팀과 에이전트가 완벽히 동일한 문서를 참조하지 않으면 오버 스코프와 상충된 구현이 발생합니다.',
    detailUrl: '/showcase/mma',
    featured: false,
    order: 7,
  },
];
