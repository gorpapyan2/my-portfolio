import slugify from 'slugify';
import { supabase } from '../supabase';

/**
 * Calculate reading time estimate from markdown content
 * Simple browser-compatible implementation (no Node.js dependencies)
 * Assumes average reading speed of 200 words per minute
 * @param content - Markdown content string
 * @returns Reading time string (e.g., "5 min read")
 */
export function calculateReadingTime(content: string): string {
  if (!content) return '1 min read';
  
  try {
    // Count words: split on whitespace and filter empty strings
    const wordCount = content
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0)
      .length;
    
    // Average reading speed: 200 words per minute
    const readingSpeed = 200;
    const minutes = Math.ceil(wordCount / readingSpeed);
    
    return `${minutes} min read`;
  } catch (error) {
    console.error('Error calculating reading time:', error);
    return '1 min read';
  }
}

/**
 * Generate URL-safe slug from title
 * @param title - Blog post title
 * @returns URL-safe slug (lowercase, hyphen-separated)
 */
export function generateSlug(title: string): string {
  if (!title) return '';
  
  return slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
}

/**
 * Validate slug format and uniqueness in database
 * @param slug - Slug to validate
 * @param excludeId - Optional post ID to exclude from uniqueness check (for updates)
 * @returns Promise<boolean> true if slug is valid and unique
 */
export async function validateSlugUniqueness(
  slug: string,
  excludeId?: string
): Promise<boolean> {
  try {
    if (!slug || slug.length === 0) {
      return false;
    }

    // Check format: lowercase, hyphens, alphanumeric
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(slug)) {
      return false;
    }

    // Query database for existing slug
    const query = supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug);

    const { data, error } = await query;

    if (error) {
      console.error('Error checking slug uniqueness:', error);
      return false;
    }

    // If no matches found, slug is unique
    if (!data || data.length === 0) {
      return true;
    }

    // If excluding a post ID (update case), allow if only match is that ID
    if (excludeId && data.length === 1) {
      return (data[0] as { id: string }).id === excludeId;
    }

    // Otherwise, slug is not unique
    return false;
  } catch (error) {
    console.error('Error validating slug:', error);
    return false;
  }
}

/**
 * Normalize markdown content
 * Fixes common formatting issues:
 * - Convert Unicode bullets to markdown
 * - Collapse multiple spaces
 * - Normalize line endings
 * - Ensure heading syntax
 * @param content - Markdown content string
 * @returns Normalized markdown content
 */
export function normalizeMarkdown(content: string): string {
  if (!content) return '';

  return content
    // Normalize line endings (CRLF -> LF)
    .replace(/\r\n/g, '\n')
    // Convert Unicode bullets to markdown
    .replace(/^[\s]*[•·−–—]\s+/gm, '- ')
    // Collapse multiple spaces (except in code blocks)
    .split('\n')
    .map((line) => {
      // Don't collapse spaces in code blocks
      if (line.startsWith('```') || line.startsWith('    ')) {
        return line;
      }
      return line.replace(/  +/g, ' ');
    })
    .join('\n')
    // Ensure space after hash in headings
    .replace(/^(#+)([^\s#])/gm, '$1 $2')
    // Remove trailing whitespace from lines
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    // Remove multiple blank lines
    .replace(/\n\n\n+/g, '\n\n')
    .trim();
}

/**
 * Service hook interface
 */
export interface MarkdownService {
  calculateReadingTime: (content: string) => string;
  generateSlug: (title: string) => string;
  validateSlugUniqueness: (slug: string, excludeId?: string) => Promise<boolean>;
  normalizeMarkdown: (content: string) => string;
}

/**
 * Hook to use markdown utilities
 * @returns Markdown service object
 */
export function useMarkdownService(): MarkdownService {
  return {
    calculateReadingTime,
    generateSlug,
    validateSlugUniqueness,
    normalizeMarkdown,
  };
}
