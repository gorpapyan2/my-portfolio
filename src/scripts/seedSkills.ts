import { supabase } from '../lib/supabase';

const skillsData = [
  {
    title: "Test Automation",
    description: "Playwright (TypeScript), PyTest; page objects, fixtures, tracing",
    icon: "Code2",
    level: 90,
    order_index: 0
  },
  {
    title: "Manual Testing",
    description: "Regression cycles, integration testing, Agile test planning",
    icon: "Bug",
    level: 92,
    order_index: 1
  },
  {
    title: "API Testing",
    description: "REST, Postman, contract/functional checks; service virtualization (Mountebank)",
    icon: "Database",
    level: 88,
    order_index: 2
  },
  {
    title: "CI/CD & DevOps",
    description: "Git; AWS CodeBuild and CodeArtifact; parallel/sharded pipelines",
    icon: "Workflow",
    level: 86,
    order_index: 3
  },
  {
    title: "Version Control",
    description: "Advanced Git workflows for collaborative QA/Dev",
    icon: "GitBranch",
    level: 92,
    order_index: 4
  },
  {
    title: "Cross-Browser Testing",
    description: "Playwright across Chromium/Firefox/WebKit; network controls & timeouts",
    icon: "Globe",
    level: 88,
    order_index: 5
  },
  {
    title: "Mobile Automation",
    description: "iOS UI automation with XCUITest (Swift)",
    icon: "Smartphone",
    level: 80,
    order_index: 6
  },
  {
    title: "Test Management",
    description: "Jira (JQL), TestRail; Scrum ceremonies & reporting",
    icon: "Kanban",
    level: 87,
    order_index: 7
  },
  {
    title: "SQL & Data Testing",
    description: "PostgreSQL; data setup & verification with SQL scripts",
    icon: "Table",
    level: 82,
    order_index: 8
  }
];

export async function seedSkills() {
  try {
    console.log('🌱 Seeding skills...');
    
    for (const skill of skillsData) {
      const { data, error } = await supabase
        .from('skills')
        .insert(skill)
        .select()
        .single();

      if (error) {
        console.error('Error inserting skill:', error);
      } else {
        console.log(`✅ Inserted skill: ${data.title}`);
      }
    }
    
    console.log('🎉 Skills seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding skills:', error);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedSkills();
}
