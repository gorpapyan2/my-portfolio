import { Users } from 'lucide-react';
import { PageLayout } from '../components/shared/PageLayout';
import { PageHeader } from '../components/shared/PageHeader';
import { Card } from '../components/shared/Card';
import { Skills } from '../components/about/Skills';
import { Education } from '../components/about/Education/index';
import { Experience } from '../components/about/Expirence';

export function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        icon={Users}
        title="About Me"
        subtitle="Dedicated QA Engineer with a passion for ensuring software excellence"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=600"
            alt="Professional Portrait"
            className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold text-[#edfc3a] mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-300">
              With over 8 years of experience in Quality Assurance, I've
              dedicated my career to ensuring software excellence. My approach
              combines technical expertise with a deep understanding of user
              experience.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-[#edfc3a] mb-4">
              Philosophy
            </h2>
            <p className="text-gray-300">
              I believe that quality is not just about finding bugs, but about
              creating exceptional user experiences. Every test case is an
              opportunity to improve the product.
            </p>
          </Card>
        </div>
      </div>
      <Skills />
      <Education />
      <Experience />
    </PageLayout>
  );
}
