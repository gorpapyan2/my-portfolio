export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Cutting Regression Time by 40% with Playwright: A Case Study',
    date: 'September 22, 2025',
    excerpt:
      'How a greenfield Playwright framework (page objects, fixtures, tracing) and smarter test design trimmed our regression cycle by ~40%—without sacrificing coverage.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=1200',
    readTime: '7 min read'
  },
  {
    title: 'Taming Flaky Tests: storageState, Timeouts, and Data Isolation',
    date: 'August 30, 2025',
    excerpt:
      'A practical guide to eliminating flakiness using authenticated sessions, deterministic data, and calibrated timeouts—plus a checklist you can adopt today.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200',
    readTime: '6 min read'
  },
  {
    title: 'Service Virtualization with Mountebank for Deterministic E2E',
    date: 'July 18, 2025',
    excerpt:
      'When upstreams are unreliable, mocks save the day. Here’s how Mountebank stabilized end-to-end flows and unblocked CI for critical journeys.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readTime: '5 min read'
  },
  {
    title: 'CI/CD Test Gates on AWS CodeBuild + CodeArtifact',
    date: 'June 12, 2025',
    excerpt:
      'Wiring smoke and regression suites into CodeBuild with private deps via CodeArtifact, parallel/sharded runs, and artifacts that actually help you debug.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    readTime: '8 min read'
  },
  {
    title: 'Contract & Functional Testing for an OpenSearch Enrichment Service',
    date: 'May 4, 2025',
    excerpt:
      'Designing API suites that validate query enrichment logic, schemas, and edge cases—then running them continuously in CI for fast feedback.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200',
    readTime: '6 min read'
  },
  {
    title: 'From Web to Mobile: Getting Started with XCUITest (Swift) for QA Engineers',
    date: 'April 10, 2025',
    excerpt:
      'A no-nonsense starter for web-focused testers who need native iOS coverage: project setup, page objects, and debugging tips.',
    image:
      'https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&q=80&w=1200',
    readTime: '7 min read'
  }
];


