import { useEffect, useMemo, useState } from 'react';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import Bug from 'lucide-react/dist/esm/icons/bug';
import Database from 'lucide-react/dist/esm/icons/database';
import { TechnologyCard } from './TechnologyCard';
import { PaginationDots } from '../../ui/PaginationDots';
import type { TechnologyItem } from '../../../lib/services/useTechnologyCatalog';
import { useTechnologyCatalog } from '../../../lib/services/useTechnologyCatalog';
import { LoadingSpinner } from '../../loading/LoadingSpinner';
import { useLanguage } from '../../../context/LanguageContext';

const fallbackTechnologies: TechnologyItem[] = [
    {
      id: 'automation-testing',
      slug: 'automation-testing',
      icon: Code2,
      title: 'Automation Testing',
      description: 'Framework-first approach to robust UI/API automation with traceable results and CI gates.',
      detailedDescription: [
        'Playwright (TypeScript): E2E + integration tests with page objects, fixtures, env configs, and tracing.',
        'PyTest: Fast, modular automation for API and integration layers.',
        'XCUITest (Swift): Native iOS UI automation for mobile coverage.'
      ],
      realWorldExample: 'Shipped Playwright suites integrated with AWS CodeBuild/CodeArtifact; regression time down ~40% and flaky tests down ~70%.',
      level: 90,
      category: 'Testing',
      tags: ['Playwright', 'PyTest', 'XCUITest', 'TypeScript', 'Swift']
    },
    {
      id: 'manual-integration-testing',
      slug: 'manual-integration-testing',
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
      id: 'api-service-validation',
      slug: 'api-service-validation',
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
      id: 'cicd-acceleration',
      slug: 'cicd-acceleration',
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
    const { t, language } = useLanguage();
    const { technologies, isLoading, error } = useTechnologyCatalog(language);
    const [currentIndex, setCurrentIndex] = useState(0);
    const panelId = "technology-carousel-panel";
    const items = technologies.length > 0 ? technologies : fallbackTechnologies;
    
    const currentTechnology = useMemo(
        () => items[currentIndex],
        [currentIndex, items]
    );

    useEffect(() => {
        if (currentIndex >= items.length) {
            setCurrentIndex(0);
        }
    }, [currentIndex, items.length]);

    const navigate = (direction: number) => {
        setCurrentIndex((prev) => {
            let next = prev + direction;
            if (next >= items.length) next = 0;
            if (next < 0) next = items.length - 1;
            return next;
        });
    };

    if (isLoading && technologies.length === 0) {
        return (
            <div className="flex justify-center py-[var(--space-24)]">
                <LoadingSpinner />
            </div>
        );
    }

    if (!currentTechnology) {
        return (
            <div className="text-center text-[var(--text-muted)] text-[length:var(--font-200)]">
                {error ? `${t('error')}: ${error}` : 'No technologies available yet.'}
            </div>
        );
    }

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
                    className="group flex items-center justify-center w-[var(--size-tap)] h-[var(--size-tap)] rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] hover:border-accent/40 backdrop-blur-sm transition-[border-color,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    aria-label={t('aria.previousTechnology')}
                >
                    <ChevronLeft className="w-[var(--space-24)] h-[var(--space-24)] text-[var(--text)] group-hover:text-accent transition-colors" aria-hidden="true" />
                </button>
            </div>

            <PaginationDots
                total={items.length}
                current={currentIndex}
                    onChange={setCurrentIndex}
            />

            <div className="flex items-center justify-end">
                <button
                    onClick={() => navigate(1)}
                    type="button"
                    aria-controls={panelId}
                    data-testid="technology-carousel-next"
                    className="group flex items-center justify-center w-[var(--size-tap)] h-[var(--size-tap)] rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] border border-[var(--border)] hover:border-accent/40 backdrop-blur-sm transition-[border-color,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    aria-label={t('aria.nextTechnology')}
                >
                    <ChevronRight className="w-[var(--space-24)] h-[var(--space-24)] text-[var(--text)] group-hover:text-accent transition-colors" aria-hidden="true" />
                </button>
            </div>
        </div>
        </div>
    );
}
