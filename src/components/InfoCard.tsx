import { motion } from "framer-motion";
import { transitionFast } from "@/lib/motion";

export default function InfoCard({ title, children, delay = 0 }: { title: React.ReactNode; children: React.ReactNode; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...transitionFast, delay }}
      className="rounded-2xl p-6 md:p-7 bg-white/4 border border-white/10 backdrop-blur hover:-translate-y-1 hover:bg-white/6 hover:border-white/20 transition-all duration-300 will-change-transform"
    >
      <h3 className="text-slate-100 font-semibold tracking-tight mb-2">{title}</h3>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </motion.article>
  );
}
