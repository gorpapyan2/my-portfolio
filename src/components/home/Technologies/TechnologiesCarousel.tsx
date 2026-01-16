import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Workflow } from 'lucide-react';
import { Code2, Bug, Database } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';
import { PaginationDots } from '../../ui/PaginationDots';
import { Technology } from './index';
import { useLanguage } from '../../../context/LanguageContext';

const technologys: Technology[] = [
    {
      icon: Code2,
      title: 'Automation Testing',
      description: 'Framework-first approach to robust UI/API automation with traceable results and CI gates.',
      detailedDescription: [
        'Playwright (TypeScript): E2E + integration tests with page objects, fixtures, env configs, and tracing.',
        'PyTest: Fast, modular automation for API and integration layers.',
        'XCUITest (Swift): Native iOS UI automation for mobile coverage.'
      ],
      realWorldExample: 'Shipped Playwright suites integrated with AWS CodeBuild/CodeArtifact; regression time ↓ ~40% and flaky tests ↓ ~70%.',
      level: 90,
      category: 'Testing',
      tags: ['Playwright', 'PyTest', 'XCUITest', 'TypeScript', 'Swift']
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
      realWorldExample: 'Maintained smoke/regression gates and post-release checks for various projects.',
      level: 92,
      category: 'Testing',
      tags: ['Manual Testing', 'Regression', 'Agile', 'Test Planning']
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
      realWorldExample: 'Built API suites for an Enrichment Service verifying OpenSearch query enrichment in CI.',
      level: 88,
      category: 'Backend',
      tags: ['REST API', 'Postman', 'Mountebank', 'OpenSearch']
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
      realWorldExample: 'Cut CI runtimes while enforcing smoke/regression gates before deploy.',
      level: 86,
      category: 'DevOps',
      tags: ['AWS CodeBuild', 'CI/CD', 'Parallelization', 'Artifact Management']
    }
  ];

export function TechnologyCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const panelId = "technology-carousel-panel";
    
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
        <div className="relative">
            {/* Carousel Content */}
        <div className="relative overflow-hidden rounded-[var(--radius-xl)]">
            <TechnologyCard technology={currentTechnology} panelId={panelId} />
            
        </div>

        {/* Pagination + Controls */}
        <div className="mt-[var(--space-24)] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-[var(--space-16)]">
            <div className="flex items-center justify-start">
                <button
                    onClick={() => navigate(-1)}
                    type="button"
                    aria-controls={panelId}
                    data-testid="technology-carousel-prev"
                    className="group flex items-center justify-center w-[var(--size-tap)] h-[var(--size-tap)] rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] hover:border-accent/40 backdrop-blur-sm transition-all duration-300"
                    aria-label={t('aria.previousTechnology')}
                >
                    <ChevronLeft className="w-[var(--space-24)] h-[var(--space-24)] text-[var(--text)] group-hover:text-accent transition-colors" />
                </button>
            </div>

            <PaginationDots
                total={technologys.length}
                current={currentIndex}
                    onChange={setCurrentIndex}
            />

            <div className="flex items-center justify-end">
                <button
                    onClick={() => navigate(1)}
                    type="button"
                    aria-controls={panelId}
                    data-testid="technology-carousel-next"
                    className="group flex items-center justify-center w-[var(--size-tap)] h-[var(--size-tap)] rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] hover:border-accent/40 backdrop-blur-sm transition-all duration-300"
                    aria-label={t('aria.nextTechnology')}
                >
                    <ChevronRight className="w-[var(--space-24)] h-[var(--space-24)] text-[var(--text)] group-hover:text-accent transition-colors" />
                </button>
            </div>
        </div>
        </div>
    );
}
