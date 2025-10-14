import { supabase } from '../lib/supabase';
import { ProjectInsert } from '../types/database.types';
import { projects } from '../pages/WorkPage/projectsData';

export async function seedProjects(): Promise<void> {
  try {
    console.log('Starting projects seeding...');

    // Convert static project data to Supabase format
    const projectInserts: ProjectInsert[] = projects.map((project, index) => ({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags,
      live_url: project.liveUrl || null,
      github_url: project.githubUrl || null,
      order_index: index,
      featured: index < 2 // First 2 projects are featured
    }));

    // Insert projects
    const { data, error } = await supabase
      .from('projects')
      .upsert(projectInserts, { 
        onConflict: 'title',
        ignoreDuplicates: false 
      })
      .select();

    if (error) {
      throw error;
    }

    console.log(`✅ Successfully seeded ${data?.length || projectInserts.length} projects`);
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
    throw error;
  }
}

export async function clearProjects(): Promise<void> {
  try {
    console.log('Clearing projects...');
    
    const { error } = await supabase
      .from('projects')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

    if (error) {
      throw error;
    }

    console.log('✅ Successfully cleared projects');
  } catch (error) {
    console.error('❌ Error clearing projects:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedProjects()
    .then(() => {
      console.log('Projects seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Projects seeding failed:', error);
      process.exit(1);
    });
}
