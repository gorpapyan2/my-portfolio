import LanguagesIcon from 'lucide-react/dist/esm/icons/languages';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { TranslationText } from '../../components/shared/TranslationText';

type LanguageItem = {
  name: string;
  level?: string | null;
};

type LanguagesProps = {
  items: LanguageItem[];
  isLoading?: boolean;
};

export function Languages({ items, isLoading = false }: LanguagesProps) {
  const languages = items ?? [];
  const shouldReduceMotion = useReducedMotion();

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
    <div>
      <h3 className="text-lg font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
        <LanguagesIcon className="w-5 h-5 text-accent" aria-hidden="true" />
        <TranslationText translationKey="about.languages.title" shimmerWidth="150px" />
      </h3>

      {isLoading ? (
        <div className="space-y-2">
          {[0, 1].map(i => (
            <div key={i} className="h-8 bg-[var(--surface-strong)] rounded-full animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-2" aria-label="language badges">
          {(languages.length > 0 ? languages : [{ name: "Languages coming soon." }]).map((lang, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : idx * 0.03 }}
            >
              <LanguageBadge name={lang.name} level={lang.level ?? undefined} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}


