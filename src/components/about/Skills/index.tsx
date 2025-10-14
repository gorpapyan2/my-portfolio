import { Code2, GitBranch, Workflow, Kanban, Database, Bug, Globe, Shield, Lightbulb, Smartphone, Table } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { SectionHeader } from '../../shared/SectionHeader';

export function Skills() {

    const { t } = useLanguage();

    const skills = [
        {
          icon: Code2,
          title: 'Test Automation',
          description: 'Playwright (TypeScript), PyTest; page objects, fixtures, tracing',
          level: 90
        },
        {
          icon: Bug,
          title: 'Manual & Exploratory Testing',
          description: 'Regression cycles, integration testing, Agile test planning',
          level: 92
        },
        {
          icon: Database,
          title: 'API Testing',
          description: 'REST, Postman, contract/functional checks; service virtualization (Mountebank)',
          level: 88
        },
        {
          icon: Workflow,
          title: 'CI/CD & DevOps',
          description: 'Git; AWS CodeBuild and CodeArtifact; parallel/sharded pipelines',
          level: 86
        },
        {
          icon: GitBranch,
          title: 'Version Control',
          description: 'Advanced Git workflows for collaborative QA/Dev',
          level: 92
        },
        {
          icon: Globe,
          title: 'Cross-browser & Web',
          description: 'Playwright across Chromium/Firefox/WebKit; network controls & timeouts',
          level: 88
        },
        {
          icon: Smartphone, // from lucide-react; swap if you prefer another
          title: 'Mobile Automation',
          description: 'iOS UI automation with XCUITest (Swift)',
          level: 80
        },
        {
          icon: Kanban,
          title: 'Test Management & Agile',
          description: 'Jira (JQL), TestRail; Scrum ceremonies & reporting',
          level: 87
        },
        {
          icon: Table,
          title: 'SQL & Data',
          description: 'PostgreSQL; data setup & verification with SQL scripts',
          level: 82
        }
      ];

    return (
        <section className="mb-20">
            <SectionHeader
                icon={Lightbulb}
                title="Skills & Expertise"
                subtitle=" Comprehensive skill set in software testing and quality assurance"
            />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                            transition-all duration-300 hover:transform hover:-translate-y-1 
                            hover:bg-white/10">
                                <div className="mb-4">
                                    <div className="inline-flex p-3 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
                                        <skill.icon className="h-6 w-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {skill.title}
                                </h3>

                                <p className="text-gray-400 mb-4">
                                    {skill.description}
                                </p>

                                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="absolute top-0 left-0 h-full bg-[#edfc3a] rounded-full"
                                    />
                                </div>
                                <div className="mt-2 text-sm text-gray-400">
                                    Proficiency: {skill.level}%
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}