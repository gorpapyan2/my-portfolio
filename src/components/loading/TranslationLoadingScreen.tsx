import { LoadingSpinner } from './LoadingSpinner';
import { ParticlesBackground } from './ParticlesBackground';
import { ProgressRing } from './ProgressRing';
import { motion } from 'framer-motion';
import { useLanguage, Language } from '../../context/LanguageContext';

const loadingMessagesPerLanguage: Record<Language, string[]> = {
  en: [
    "Welcome! Getting everything ready for you...",
    "Just a moment, we're setting things up...",
    "Almost ready! Preparing your experience...",
    "Thanks for your patience...",
  ],
  ru: [
    "Добро пожаловать! Подготавливаем все для вас...",
    "Один момент, настраиваем все...",
    "Почти готово! Подготавливаем ваш опыт...",
    "Спасибо за ваше терпение...",
  ],
  am: [
    "Բարի գալուստ! Ամեն ինչ պատրաստում ենք ձեզ համար...",
    "Մեկ վայրկյան, կարգավորում ենք...",
    "Գրեթե պատրաստ է! Պատրաստում ենք ձեր փորձը...",
    "Շնորհակալություն համբերատարության համար...",
  ]
};

const hints: Record<Language, string> = {
  en: "Please wait while we load your preferred language...",
  ru: "Пожалуйста, подождите, пока мы загрузим ваш предпочтительный язык...",
  am: "Խնդրում ենք սպասել, մինչ մենք բեռնում ենք ձեր նախընտրած լեզուն..."
};

export function TranslationLoadingScreen() {
  const { language } = useLanguage();
  const messages = loadingMessagesPerLanguage[language] || loadingMessagesPerLanguage.en;
  const hint = hints[language] || hints.en;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--bg)] via-[var(--bg-elevated)] to-[var(--bg)]"
    >
      <ParticlesBackground />

      <div className="relative flex flex-col items-center gap-[var(--space-32)] p-[var(--space-32)] z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <ProgressRing progress={undefined} />
          <LoadingSpinner />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-[20rem] text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              delay: 0.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[length:var(--font-400)] font-medium text-[var(--text)] mb-[var(--space-8)]"
          >
            {messages[Math.floor(Math.random() * messages.length)]}
          </motion.p>

          {/* Loading dots animation */}
          <div className="flex justify-center gap-[var(--space-8)] mt-[var(--space-16)]">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-[var(--space-8)] h-[var(--space-8)] bg-accent rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[length:var(--font-100)] text-[var(--text-muted)] mt-[var(--space-16)]"
        >
          {hint}
        </motion.p>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}


