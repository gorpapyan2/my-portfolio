import { TechnologyCarousel } from "./TechnologiesCarousel";

export interface Technology {
  icon: React.ElementType;
  title: string;
  description: string;
  detailedDescription: string[];
  realWorldExample: string;
  level: number;
  ctaLink?: string;
}


export function Technologies() {

  return (
    <section className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Leveraging modern tools and technologies to ensure software quality
          </p>
        </div>
        <TechnologyCarousel />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
    </section>
  );
}