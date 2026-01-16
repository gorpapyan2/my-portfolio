import { Languages as LanguagesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { useAboutService } from '../../lib/services/useAboutService';
import { cn } from '../../utils/cn';
import { TranslationText } from '../../components/shared/TranslationText';

export function Languages() {
  const { t } = useLanguage();
  const { languages, isLoading, error } = useAboutService();

	function parseLanguage(raw: string): { name: string; level?: string } {
		const match = raw.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
		return match ? { name: match[1].trim(), level: match[2].trim() } : { name: raw.trim(), level: undefined };
	}

	function levelClass(level?: string): string {
		const l = (level ?? '').toLowerCase();
		if (l.includes('native')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
		if (l.includes('proficient') || l.includes('fluent')) return 'bg-sky-500/20 text-sky-300 border-sky-400/30';
		if (l.includes('intermediate')) return 'bg-amber-500/20 text-amber-300 border-amber-400/30';
		if (l.includes('basic') || l.includes('beginner')) return 'bg-zinc-500/20 text-zinc-300 border-zinc-400/30';
		return 'bg-[var(--surface-strong)] text-[var(--text-muted)] border-[var(--border)]';
	}

	function LanguageBadge({ name, level }: { name: string; level?: string }) {
		return (
			<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] hover:border-accent/40 transition-colors whitespace-nowrap">
				<span className="text-[var(--text)] whitespace-nowrap">{name}</span>
				{level && (
					<span className={cn('text-xs px-2 py-0.5 rounded-full border whitespace-nowrap', levelClass(level))}>{level}</span>
				)}
			</div>
		);
	}

  return (
    <section id="languages" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          icon={LanguagesIcon}
          title={<TranslationText translationKey="about.languages.title" shimmerWidth="150px" />}
        />

		{isLoading && (
			<div className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)]">
				<div className="grid grid-cols-1 gap-2" aria-label="language badges loading">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="h-9 rounded-full bg-[var(--surface-strong)] border border-[var(--border)] animate-pulse" />
					))}
				</div>
			</div>
		)}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

		{!isLoading && !error && (
			<div className="bg-[var(--surface)] backdrop-blur-sm rounded-xl p-4 border border-[var(--border)] hover:border-accent/30 transition-colors">
				<div className="grid grid-cols-1 gap-2" aria-label="language badges">
					{languages.map((raw, idx) => {
						const { name, level } = parseLanguage(raw);
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 8 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.35, delay: idx * 0.03 }}
							>
								<LanguageBadge name={name} level={level} />
							</motion.div>
						);
					})}
				</div>
			</div>
		)}
      </div>
    </section>
  );
}



