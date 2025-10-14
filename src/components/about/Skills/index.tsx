import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';
import { useSkillService } from '../../../lib/services/useSkillService';
import { getIcon } from '../../../utils/iconMap';

export function Skills() {
    const { t } = useLanguage();
    const { skills, isLoading, error } = useSkillService();

    if (isLoading) {
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
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-[320px] bg-white/5 rounded-xl"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="skills">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeader
                        icon={Lightbulb}
                        title={t('about.skills.title')}
                        subtitle={t('about.skills.subtitle')}
                    />
                    <div className="text-center py-8">
                        <p className="text-red-400">Failed to load skills: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

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
                    {skills.map((skill, index) => {
                        const IconComponent = getIcon(skill.icon);
                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                                transition-all duration-500 hover:transform hover:-translate-y-2 
                                hover:bg-white/10 hover:border-[#edfc3a]/30 h-[320px] flex flex-col">
                                    
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className="inline-flex p-3 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a] 
                                        group-hover:bg-[#edfc3a]/20 group-hover:scale-110 transition-all duration-300">
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#edfc3a] transition-colors duration-300">
                                        {skill.title}
                                    </h3>

                                    {/* Description */}
                                    <div className="flex-1 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-[#edfc3a]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#edfc3a]/50">
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {skill.description}
                                        </p>
                                    </div>

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
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}