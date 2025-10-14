import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Workflow } from 'lucide-react';
import { Code2, Bug, Database } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';
import { PaginationDots } from '../../ui/PaginationDots';
import { Technology } from './index';

const technologys: Technology[] = [
    {
      icon: Code2,
      title: 'Automation Testing',
      description:
        'Framework-first approach to robust UI/API automation with traceable results and CI gates.',
      detailedDescription: [
        'Playwright (TypeScript): E2E + integration tests with page objects, fixtures, env configs, and tracing.',
        'PyTest: Fast, modular automation for API and integration layers.',
        'XCUITest (Swift): Native iOS UI automation for mobile coverage.'
      ],
      realWorldExample:
        'Shipped Playwright suites integrated with AWS CodeBuild/CodeArtifact; regression time ↓ ~40% and flaky tests ↓ ~70%.',
      level: 90,
      ctaLink: '/work#automation'
    },
    {
      icon: Bug,
      title: 'Manual & Integration Testing',
      description: 'Structured regression + exploratory testing within Agile teams.',
      detailedDescription: [
        'Create test plans/cases from specs; collaborate with PM/Dev.',
        'Execute regression/integration cycles; evaluate behavior vs. docs.',
        'Log defects with steps, logs, traces; drive fixes and retests.'
      ],
      realWorldExample:
        'Maintained smoke/regression gates and post-release checks for AXS projects.',
      level: 92,
      ctaLink: '/work#manual-testing'
    },
    {
      icon: Database,
      title: 'API & Service Validation',
      description: 'Contract and functional testing for reliable backend services.',
      detailedDescription: [
        'REST and Postman-based suites with schema/payload validation.',
        'Service virtualization using Mountebank for deterministic E2E flows.',
        'OpenSearch enrichment service checks wired into CI pipelines.'
      ],
      realWorldExample:
        'Built API suites for an Enrichment Service verifying OpenSearch query enrichment in CI.',
      level: 88,
      ctaLink: '/work#api-testing'
    },
    {
      icon: Workflow,
      title: 'CI/CD Acceleration',
      description: 'Speedy, reliable pipelines with parallelism and artifact hygiene.',
      detailedDescription: [
        'AWS CodeBuild integration for E2E/integration tests.',
        'Dependency management via AWS CodeArtifact.',
        'Parallel workers, sharding, and auth reuse (storageState) to reduce runtime.'
      ],
      realWorldExample:
        'Cut CI runtimes while enforcing smoke/regression gates before deploy.',
      level: 86,
      ctaLink: '/work#cicd'
    }
  ];
  

export function TechnologyCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTechnology = useMemo(
        () => technologys[currentIndex],
        [currentIndex]
    );

    const navigate = (direction: number) => {
        setCurrentIndex((prev) => {
            let next = prev + direction;
            if (next >= technologys.length) next = 0;
            if (next < 0) next = technologys.length - 1;
            return next;
        });
    };
    return (
        <div className="relative max-w]">
            {/* Navigation Buttons */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors border border-gray-800"
                    aria-label="Previous technology"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <button
                    onClick={() => navigate(1)}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors border border-gray-800"
                    aria-label="Next technology"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Carousel Content */}
            <div className="transition-all duration-500 ease-out">
                <TechnologyCard technology={currentTechnology} />
            </div>

            {/* Pagination */}
            <PaginationDots
                total={technologys.length}
                current={currentIndex}
                onChange={setCurrentIndex}
            />
        </div>
    );
}
