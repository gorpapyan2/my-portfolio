import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroScroll } from './HeroScroll';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg)]">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
