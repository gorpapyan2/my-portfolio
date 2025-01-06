import { CheckCircle, Code, Database, Bug, Lightbulb } from 'lucide-react';
import { Card } from '../shared/Card';
import { SectionHeader } from '../shared/SectionHeader';

export function Skills() {
  const skills = [
    {
      icon: <Bug className="h-6 w-6 text-[#edfc3a]" />,
      title: 'Manual Testing',
      description: 'Thorough testing of applications to ensure quality and reliability'
    },
    {
      icon: <Code className="h-6 w-6 text-[#edfc3a]" />,
      title: 'Automation Testing',
      description: 'Selenium, Cypress, and other automation frameworks'
    },
    {
      icon: <Database className="h-6 w-6 text-[#edfc3a]" />,
      title: 'Test Management',
      description: 'JIRA, TestRail, and other test management tools'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#edfc3a]" />,
      title: 'CI/CD Integration',
      description: 'Integration of tests in CI/CD pipelines'
    }
  ];

  return (
    <section className="mb-20">
      <SectionHeader
        icon={Lightbulb}
        title="Skills & Expertise"
        subtitle="Some of the tools and technologies I'm proficient in"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <Card key={index}>
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
