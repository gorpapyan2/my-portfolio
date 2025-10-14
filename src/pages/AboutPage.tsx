import { Users } from 'lucide-react';
import { PageLayout } from '../components/shared/PageLayout';
import { PageHeader } from '../components/shared/PageHeader';
import { Card } from '../components/shared/Card';
import { Skills } from '../components/about/Skills/index';
import { Education } from '../components/about/Education/index';
// NOTE: if your folder/file is actually spelled "Expirence", keep it;
// otherwise consider renaming the file/folder to "Experience" for consistency.
import { Experience } from '../components/about/Expirence';
import Portrait from '../../Gemini_Generated_Image_5ddpzd5ddpzd5ddp-Photoroom.png';

export function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        icon={Users}
        title="About Me"
        subtitle="Mid-level QA Automation Engineer specializing in Playwright and CI/CD"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent" />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative group">
          <img
            src={Portrait}
            alt="Gor Papyan portrait"
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
              QA Automation Engineer delivering reliable UI and API automation with Playwright,
              embedded in Agile teams since <span className="whitespace-nowrap">October 2022</span>.
              I build frameworks, integrate them into CI/CD (AWS CodeBuild/CodeArtifact),
              and use data isolation and tuned timeouts to stabilize regressions and cut runtime.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-[#edfc3a] mb-4">
              Philosophy
            </h2>
            <p className="text-gray-300">
              Quality isn’t only finding bugs—it’s enabling confident, fast delivery.
              Every test is a design decision: make it readable, deterministic, and valuable
              to developers and users alike.
            </p>
          </Card>

          {/* Optional: keep or remove this third card */}
          <Card>
            <h2 className="text-xl font-semibold text-[#edfc3a] mb-4">
              Toolbox
            </h2>
            <p className="text-gray-300">
              Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank;
              PostgreSQL; Git; AWS CodeBuild &amp; CodeArtifact; TestRail; Jira.
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
