import React, { useEffect, useRef } from 'react';
import { Code2, GitBranch, Workflow, Kanban } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';
import { useLanguage } from '../../../context/LanguageContext';

export function Technologies() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const technologies = [
    {
      icon: Code2,
      title: t('technologies.testing'),
      items: ['Jest', 'Cypress', 'Selenium', 'TestCafe'],
    },
    {
      icon: Workflow,
      title: t('technologies.cicd'),
      items: ['Jenkins', 'GitLab CI', 'CircleCI', 'GitHub Actions'],
    },
    {
      icon: GitBranch,
      title: t('technologies.versionControl'),
      items: ['Git', 'SVN', 'Bitbucket', 'GitHub'],
    },
    {
      icon: Kanban,
      title: t('technologies.projectManagement'),
      items: ['JIRA', 'TestRail', 'Confluence', 'Azure DevOps'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="tools-section relative py-32 bg-black bg-grid-pattern overflow-hidden opacity-0 translate-y-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t('technologies.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.title} {...tech} cardIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
