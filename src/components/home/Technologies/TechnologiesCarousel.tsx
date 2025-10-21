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
      realWorldExample: 'Maintained smoke/regression gates and post-release checks for AXS projects.',
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
        <div className="relative">
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-400/30 backdrop-blur-sm transition-all duration-300"
                    aria-label="Previous technology"
                >
                    <div className="p-2 rounded-xl bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-lime-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Previous</span>
                </button>

                <button
                    onClick={() => navigate(1)}
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-400/30 backdrop-blur-sm transition-all duration-300"
                    aria-label="Next technology"
                >
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Next</span>
                    <div className="p-2 rounded-xl bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
                        <ChevronRight className="w-5 h-5 text-lime-400" />
                    </div>
                </button>
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl">
                <TechnologyCard technology={currentTechnology} />
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-4">
                <PaginationDots
                    total={technologys.length}
                    current={currentIndex}
                    onChange={setCurrentIndex}
                />
            </div>
        </div>
    );
}
