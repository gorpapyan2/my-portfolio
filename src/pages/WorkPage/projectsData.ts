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
    title: 'E-commerce Testing Suite',
    description: 'Comprehensive automated testing framework for a large-scale e-commerce platform. Includes end-to-end tests, integration tests, and performance testing.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000',
    tags: ['Cypress', 'Jest', 'TypeScript', 'CI/CD'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'API Testing Framework',
    description: 'REST API testing framework with automated reporting and CI/CD integration. Features parallel test execution and comprehensive coverage reporting.',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=1000',
    tags: ['Postman', 'Newman', 'JavaScript', 'Jenkins'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Mobile App Test Automation',
    description: 'Cross-platform mobile testing suite for iOS and Android applications. Includes UI testing, performance monitoring, and crash reporting.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1000',
    tags: ['Appium', 'XCUITest', 'Espresso', 'Docker'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'Performance Testing Dashboard',
    description: 'Real-time performance monitoring dashboard for web applications. Tracks key metrics and provides automated alerts for performance degradation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['JMeter', 'Grafana', 'Python', 'AWS'],
    liveUrl: 'https://example.com'
  }
];