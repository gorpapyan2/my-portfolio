import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    role: 'QA Automation Engineer',
    company: 'zealous (AXS)',
    period: 'Oct 2022 – Present',
    description:
      'Built and owned Playwright-based UI/API automation from scratch; embedded in Agile teams, integrated suites into AWS CI/CD, and stabilized regressions.',
    achievements: [
      'Cut manual regression time by ~40% via reliable Playwright suites', // Key result
      'Reduced flaky test rate by ~70% through data isolation and tuned timeouts', // Key result
      'Integrated E2E and integration tests into AWS CodeBuild with artifact mgmt via CodeArtifact',
      'Developed API contract/functional suites (OpenSearch enrichment service) and gated pipelines',
      'Improved CI runtime using parallel workers, sharding, and auth reuse (storageState)',
      'Introduced service virtualization with Mountebank for deterministic E2E flows',
      'Contributed iOS automation using XCUITest'
    ]
  }
];


export function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
}