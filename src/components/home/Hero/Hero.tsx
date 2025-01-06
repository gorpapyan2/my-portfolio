import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroScroll } from './HeroScroll';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0B]">
      <HeroBackground />
      <HeroContent />
      <HeroScroll />
    </section>
  );
}
