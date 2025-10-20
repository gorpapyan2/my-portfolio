import { supabase } from '../lib/supabase';

const experiencesData = [
  {
    role: 'QA Automation Engineer',
    company: 'zealous',
    period: 'Oct 2022 – Present',
    description: 'Built and owned Playwright-based UI/API automation from scratch; embedded in Agile teams, integrated suites into AWS CI/CD, and stabilized regressions.',
    achievements: [
      'Studied and analyzed specs; collaborated with developers/PM to create test plans and test cases (Agile/Scrum).',
      'Built Playwright automation frameworks from scratch for UI & API (page objects/components, fixtures, env configs, tracing).',
      'Executed manual and automated suites; analyzed results and evaluated product behavior against documentation.',
      'Logged defects with clear steps, logs, and traces; reported to developers and helped troubleshoot.',
      'Ran post‑release/integration testing and maintained regression cycles.',
      'UI: E2E + integration tests in AWS CodeBuild; dependencies via AWS CodeArtifact; smoke/regression gates.',
      'API: Suites for an Enrichment Service to verify OpenSearch query enrichment; contract + functional checks in CI.',
      'Reduced runtime with parallel workers, sharding, and authentication reuse (storageState); improved stability via isolation and calibrated timeouts.',
      'iOS automation with XCUITest; service virtualization with Mountebank for deterministic end‑to‑end flows.'
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
        .insert(experience as never)  
        .select()
        .single();

      if (error) {
        console.error('Error inserting experience:', error);
      } else {
        console.log(`✅ Inserted experience: ${data?.role} at ${data?.company}`);
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
