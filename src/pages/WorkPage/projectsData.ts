interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Playwright UI/API Automation Framework',
    description:
      'Greenfield Playwright (TypeScript) framework for UI and API coverage with page objects, fixtures, env configs, and trace artifacts. Integrated smoke/regression gates.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Playwright', 'TypeScript', 'Trace', 'Regression', 'Agile']
  },
  {
    title: 'CI/CD Test Gates on AWS',
    description:
      'End-to-end and integration suites wired into AWS CodeBuild with private package management via CodeArtifact. Parallel/sharded runs and auth reuse to cut runtime.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['AWS CodeBuild', 'AWS CodeArtifact', 'CI/CD', 'Parallelism', 'Git']
  },
  {
    title: 'Enrichment Service API Validation',
    description:
      'Contract and functional API suites validating OpenSearch query enrichment, executed in CI. Deterministic runs using service virtualization where needed.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200',
    tags: ['API', 'Postman', 'OpenSearch', 'Contract Tests', 'CI']
  },
  {
    title: 'Service Virtualization for Stable E2E',
    description:
      'Introduced Mountebank to emulate upstream/downstream services, eliminating flaky dependencies and stabilizing end-to-end flows.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Mountebank', 'E2E', 'Deterministic Tests']
  },
  {
    title: 'iOS Mobile UI Automation',
    description:
      'Native iOS coverage using XCUITest (Swift) for critical user journeys, complementing web automation to expand device test matrices.',
    image:
      'https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&q=80&w=1200',
    tags: ['XCUITest', 'Swift', 'Mobile', 'iOS']
  },
  {
    title: 'Data-Backed Testing & Verification',
    description:
      'PostgreSQL-driven data setup and verification scripts to support integration and regression scenarios; leveraged in automation and manual checks.',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=1200',
    tags: ['PostgreSQL', 'SQL', 'Integration']
  }
];
