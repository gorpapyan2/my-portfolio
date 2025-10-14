import { supabase } from '../lib/supabase';

const educationData = [
  {
    degree: "B.Sc. in Information Technology",
    school: "National Polytechnic University of Armenia",
    year: "Graduated May 2024",
    description: "Bachelor of Science in Information Technology",
    order_index: 0
  }
];

export async function seedEducation() {
  try {
    console.log('🌱 Seeding education...');
    
    for (const edu of educationData) {
      const { data, error } = await supabase
        .from('education')
        .insert(edu)
        .select()
        .single();

      if (error) {
        console.error('Error inserting education:', error);
      } else {
        console.log(`✅ Inserted education: ${data.degree} at ${data.school}`);
      }
    }
    
    console.log('🎉 Education seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding education:', error);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedEducation();
}
