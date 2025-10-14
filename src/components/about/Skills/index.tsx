import { Code2, GitBranch, Workflow, Kanban, Database, Bug, Globe, Lightbulb, Smartphone, Table } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';

export function Skills() {
    const { t } = useLanguage();

    const skills = [
        {
          icon: Code2,
          title: t('skills.testAutomation'),
          description: 'Playwright (TypeScript), PyTest; page objects, fixtures, tracing',
          level: 90
        },
        {
          icon: Bug,
          title: t('skills.manualTesting'),
          description: 'Regression cycles, integration testing, Agile test planning',
          level: 92
        },
        {
          icon: Database,
          title: t('skills.apiTesting'),
          description: 'REST, Postman, contract/functional checks; service virtualization (Mountebank)',
          level: 88
        },
        {
          icon: Workflow,
          title: t('skills.cicdDevops'),
          description: 'Git; AWS CodeBuild and CodeArtifact; parallel/sharded pipelines',
          level: 86
        },
        {
          icon: GitBranch,
          title: t('skills.versionControl'),
          description: 'Advanced Git workflows for collaborative QA/Dev',
          level: 92
        },
        {
          icon: Globe,
          title: t('skills.crossBrowser'),
          description: 'Playwright across Chromium/Firefox/WebKit; network controls & timeouts',
          level: 88
        },
        {
          icon: Smartphone,
          title: t('skills.mobileAutomation'),
          description: 'iOS UI automation with XCUITest (Swift)',
          level: 80
        },
        {
          icon: Kanban,
          title: t('skills.testManagement'),
          description: 'Jira (JQL), TestRail; Scrum ceremonies & reporting',
          level: 87
        },
        {
          icon: Table,
          title: t('skills.sqlData'),
          description: 'PostgreSQL; data setup & verification with SQL scripts',
          level: 82
        }
      ];

    return (
        <section id="skills">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    icon={Lightbulb}
                    title={t('about.skills.title')}
                    subtitle={t('about.skills.subtitle')}
                />

                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                            transition-all duration-500 hover:transform hover:-translate-y-2 
                            hover:bg-white/10 hover:border-[#edfc3a]/30">
                                
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="inline-flex p-3 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a] 
                                    group-hover:bg-[#edfc3a]/20 group-hover:scale-110 transition-all duration-300">
                                        <skill.icon className="h-6 w-6" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#edfc3a] transition-colors duration-300">
                                    {skill.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {skill.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">{t('proficiency')}</span>
                                        <span className="text-[#edfc3a] font-semibold">{skill.level}%</span>
                                    </div>
                                    
                                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#edfc3a] to-[#edfc3a]/80 rounded-full
                                            group-hover:shadow-lg group-hover:shadow-[#edfc3a]/20"
                                        />
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#edfc3a]/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}