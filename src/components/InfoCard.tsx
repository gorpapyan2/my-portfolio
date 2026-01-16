import { motion } from "framer-motion";
import { transitionFast } from "@/lib/motion";

export default function InfoCard({ title, children, delay = 0 }: { title: React.ReactNode; children: React.ReactNode; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...transitionFast, delay }}
      className="rounded-[var(--radius-lg)] p-[var(--space-24)] md:p-[var(--space-32)] bg-[var(--surface)] border border-[var(--border)] backdrop-blur hover:-translate-y-1 hover:bg-[var(--surface-strong)] transition-all duration-300 will-change-transform"
    >
      <h3 className="text-[var(--text)] font-semibold tracking-[var(--tracking-tight)] mb-[var(--space-8)]">{title}</h3>
      <div className="text-[var(--text-muted)] leading-[var(--leading-body)]">{children}</div>
    </motion.article>
  );
}
