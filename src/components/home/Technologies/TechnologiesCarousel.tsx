import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Code2, Bug, Database } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';
import { PaginationDots } from '../../ui/PaginationDots';
import { Technology } from './index';

const technologys: Technology[] = [
    {
        icon: Code2,
        title: 'Automation Testing',
        description: "Automation testing utilizes software tools to execute tests, compare outcomes, and report defects, thereby saving time and reducing human error. Notable tools include:",
        detailedDescription: [
            'Selenium: An open-source framework for web application testing across various browsers and platforms.',
            'Appium: An open-source tool for automating mobile applications on iOS and Android platforms.',
            'Cypress: A JavaScript-based end-to-end testing framework for web applications.',
            'TestComplete: A functional UI testing tool for desktop, mobile, and web applications.',
            'Katalon Studio: An all-in-one test automation solution for web, mobile, API, and desktop applications.'
        ],
        realWorldExample: 'Successfully automated 500+ test cases for an e-commerce platform, reducing regression testing time by 75%.',
        level: 90,
        ctaLink: '/work#automation'
    },
    {
        icon: Bug,
        title: 'Manual Testing',
        description: 'Comprehensive test case design and execution',
        detailedDescription: [
            'Creating detailed test plans and test cases based on requirements.',
            'Performing exploratory testing to uncover edge cases.',
            'Conducting usability testing sessions with stakeholders.',
            'Documenting and tracking defects with clear reproduction steps.'
        ],
        realWorldExample: 'Led manual testing efforts for a financial app, identifying 150+ critical issues before production release.',
        level: 95,
        ctaLink: '/work#manual-testing'
    },
    {
        icon: Database,
        title: 'API Testing',
        description: 'REST and GraphQL API testing expertise',
        detailedDescription: [
            'Designing comprehensive API test suites using Postman and REST Assured.',
            'Validating request/response schemas and payload structures.',
            'Performance testing of API endpoints under various conditions.',
            'Implementing security testing for API authentication and authorization.'
        ],
        realWorldExample: 'Developed an automated API testing framework that reduced testing time by 60% for a microservices architecture.',
        level: 85,
        ctaLink: '/work#api-testing'
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
