import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { SectionHeader } from '../../shared/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';
import { useSkillService } from '../../../lib/services/useSkillService';
import { getIcon } from '../../../utils/iconMap';
import { PaginationDots } from '../../ui/PaginationDots';
import { TranslationText } from '../../../components/shared/TranslationText';

// Helper to compute proficiency level from percentage
function getProficiencyLevel(level: number): string {
  if (level >= 80) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  return 'Familiar';
}

export function Skills() {
    const { t } = useLanguage();
    const { skills, isLoading, error } = useSkillService();
    const [pageByCategory, setPageByCategory] = useState<Record<string, number>>({});

    const PAGE_SIZE = 9;

    const groupedSkills = useMemo(() => {
        const groups: Record<string, typeof skills> = {};
        for (const skill of skills) {
            const key = skill.category || 'General';
            if (!groups[key]) groups[key] = [];
            groups[key].push(skill);
        }
        // Ensure stable order (alphabetical)
        return Object.fromEntries(
            Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
        );
    }, [skills]);

    const setPage = (category: string, next: number) => {
        setPageByCategory(prev => ({ ...prev, [category]: next }));
    };

    const navigate = (category: string, delta: number, totalPages: number) => {
        setPageByCategory(prev => {
            const current = prev[category] ?? 0;
            let next = current + delta;
            if (next < 0) next = totalPages - 1;
            if (next >= totalPages) next = 0;
            return { ...prev, [category]: next };
        });
    };

    if (isLoading) {
        return (
            <section id="skills">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeader
                        icon={Lightbulb}
                        title={<TranslationText translationKey="about.skills.title" shimmerWidth="120px" />}
                        subtitle={<TranslationText translationKey="about.skills.subtitle" as="span" shimmerWidth="300px" />}
                    />

                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-[320px] bg-[var(--surface)] border border-[var(--border)] rounded-xl"></div>
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
                        title={<TranslationText translationKey="about.skills.title" shimmerWidth="120px" />}
                        subtitle={<TranslationText translationKey="about.skills.subtitle" as="span" shimmerWidth="300px" />}
                    />
                    <div className="text-center py-8">
                        <p className="text-red-400">
                          <TranslationText translationKey="error.loadFailed.skills" as="span" shimmerWidth="150px" />: {error}
                        </p>
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

                <div className="relative z-10 space-y-12">
                    {Object.entries(groupedSkills).map(([category, list]) => {
                        const pages = Math.ceil(list.length / PAGE_SIZE) || 1;
                        const currentPage = pageByCategory[category] ?? 0;
                        const start = currentPage * PAGE_SIZE;
                        const currentItems = list.slice(start, start + PAGE_SIZE);

                        return (
                            <div key={category}>
                                {/* Category header with navigation */}
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[var(--text)]">
                                        {category}
                                    </h3>
                                    {pages > 1 && (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => navigate(category, -1, pages)}
                                                className="p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors"
                                                aria-label={`Previous ${category} page`}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => navigate(category, 1, pages)}
                                                className="p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors"
                                                aria-label={`Next ${category} page`}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Grid page (max 9 visible) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={`${category}-${currentPage}`}>
                                    {currentItems.map((skill, index) => {
                                        const IconComponent = getIcon(skill.icon);
                                        const proficiencyLevel = getProficiencyLevel(skill.level);

                                        return (
                                            <motion.div
                                                key={skill.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="relative bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)] 
                                                transition-all duration-500 hover:transform hover:-translate-y-2 
                                                hover:bg-[var(--surface-strong)] hover:border-accent/30 h-[320px] flex flex-col">

                                                    {/* Icon */}
                                                    <div className="mb-3">
                                                        <div className="inline-flex p-3 rounded-lg bg-accent/10 text-accent 
                                                        group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                                                            <IconComponent className="h-6 w-6" />
                                                        </div>
                                                    </div>

                                                    {/* Title with Level Badge */}
                                                    <div className="mb-2 flex items-center gap-2">
                                                        <h4 className="text-lg font-semibold text-[var(--text)] group-hover:text-accent transition-colors duration-300">
                                                            {skill.title}
                                                        </h4>
                                                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                                                            proficiencyLevel === 'Advanced' 
                                                                ? 'bg-accent/20 text-accent'
                                                                : proficiencyLevel === 'Intermediate'
                                                                ? 'bg-[var(--surface-strong)] text-[var(--text)]'
                                                                : 'bg-[var(--surface)] text-[var(--text-muted)]'
                                                        }`}>
                                                            {proficiencyLevel}
                                                        </span>
                                                    </div>

                                                    {/* Description */}
                                                    <div className="flex-1 overflow-y-auto mb-3 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent hover:scrollbar-thumb-accent/50">
                                                        <p className="text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text)] transition-colors duration-300 text-sm">
                                                            {skill.description}
                                                        </p>
                                                    </div>

                                                    {/* Proficiency Bar */}
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-center text-xs md:text-sm">
                                                            <span className="text-[var(--text-muted)]">
                                                                <TranslationText translationKey="proficiency" shimmerWidth="100px" />
                                                            </span>
                                                            <span className="text-accent font-semibold">{skill.level}%</span>
                                                        </div>
                                                        
                                                        <div className="relative h-2 bg-[var(--surface-strong)] rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${skill.level}%` }}
                                                                transition={{ duration: 1.0, delay: 0.4 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent/80 rounded-full
                                                                group-hover:shadow-lg group-hover:shadow-accent/20"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Hover Effect Overlay */}
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent 
                                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {pages > 1 && (
                                    <PaginationDots
                                        total={pages}
                                        current={currentPage}
                                        onChange={(i) => setPage(category, i)}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
