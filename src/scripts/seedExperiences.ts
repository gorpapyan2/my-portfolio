import { supabase } from '../lib/supabase';

const experiencesData = [
  {
    role: 'QA Automation Engineer',
    company: 'zealous (AXS)',
    period: 'Oct 2022 – Present',
    description: 'Built and owned Playwright-based UI/API automation from scratch; embedded in Agile teams, integrated suites into AWS CI/CD, and stabilized regressions.',
    achievements: [
      'Cut manual regression time by ~40% via reliable Playwright suites',
      'Reduced flaky test rate by ~70% through data isolation and tuned timeouts',
      'Integrated E2E and integration tests into AWS CodeBuild with artifact mgmt via CodeArtifact',
      'Developed API contract/functional suites (OpenSearch enrichment service) and gated pipelines',
      'Improved CI runtime using parallel workers, sharding, and auth reuse (storageState)',
      'Introduced service virtualization with Mountebank for deterministic E2E flows',
      'Contributed iOS automation using XCUITest'
    ],
    order_index: 0
  }
];

export async function seedExperiences() {
  try {
    console.log('🌱 Seeding experiences...');
    
    for (const experience of experiencesData) {
      const { data, error } = await supabase
        .from('experiences')
        .insert(experience)
        .select()
        .single();

      if (error) {
        console.error('Error inserting experience:', error);
      } else {
        console.log(`✅ Inserted experience: ${data.role} at ${data.company}`);
      }
    }
    
    console.log('🎉 Experiences seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding experiences:', error);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedExperiences();
}
