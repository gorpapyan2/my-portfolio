import { supabase } from '../lib/supabase';
import { calculateReadingTime, normalizeMarkdown } from '../lib/services/useMarkdownService';

/**
 * Script to normalize existing blog posts in Supabase
 * Fixes formatting issues and applies markdown normalization
 * 
 * Run with: npx tsx src/scripts/normalizeBlogPosts.ts
 */
async function normalizeBlogPosts() {
  console.log('Starting blog post normalization...\n');

  try {
    // Fetch all blog posts
    const { data: blogPosts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*');

    if (fetchError) {
      throw new Error(`Failed to fetch blog posts: ${fetchError.message}`);
    }

    if (!blogPosts || blogPosts.length === 0) {
      console.log('No blog posts found to normalize.');
      return;
    }

    console.log(`Found ${blogPosts.length} blog posts to normalize.\n`);

    let normalizedCount = 0;

    // Process each blog post
    for (const post of blogPosts) {
      try {
        if (!post.content) {
          console.log(`⊘ Skipping "${post.title}" - no content`);
          continue;
        }

        const originalContent = post.content;
        const normalizedContent = normalizeMarkdown(originalContent);
        const newReadingTime = calculateReadingTime(normalizedContent);

        // Check if content changed
        const contentChanged = originalContent !== normalizedContent;
        const readingTimeChanged = newReadingTime !== post.read_time;

        if (!contentChanged && !readingTimeChanged) {
          console.log(`✓ "${post.title}" - already normalized`);
          continue;
        }

        // Update the blog post
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({
            content: normalizedContent,
            read_time: newReadingTime,
            updated_at: new Date().toISOString(),
          })
          .eq('id', post.id);

        if (updateError) {
          console.error(`✗ Error updating "${post.title}":`, updateError.message);
          continue;
        }

        normalizedCount++;
        console.log(`✓ "${post.title}" normalized`);
        
        if (contentChanged) {
          console.log(`  • Content normalized (lines cleaned, formatting fixed)`);
        }
        if (readingTimeChanged) {
          console.log(`  • Reading time: ${post.read_time} → ${newReadingTime}`);
        }
      } catch (err) {
        console.error(`✗ Error processing "${post.title}":`, err);
      }
    }

    console.log(`\n✓ Normalization complete: ${normalizedCount}/${blogPosts.length} posts updated`);
  } catch (error) {
    console.error('Fatal error during normalization:', error);
    process.exit(1);
  }
}

// Run the script
normalizeBlogPosts().then(() => process.exit(0)).catch(() => process.exit(1));
