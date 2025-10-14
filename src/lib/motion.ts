export const transitionFast = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;
export const transitionHero = { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 } as const;

export const stagger = (amount = 0.06) => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { ...transitionFast, staggerChildren: amount, when: "beforeChildren" }
  }
});
