import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../utils/cn';

interface TranslationTextProps {
  translationKey: string;
  className?: string;
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  shimmerWidth?: string | number;
  shimmerHeight?: string;
  children?: React.ReactNode;
}

/**
 * TranslationText component that automatically shows shimmer skeleton
 * when translation is missing instead of displaying [missing:key]
 */
export function TranslationText({
  translationKey,
  className = '',
  as: Component = 'span',
  shimmerWidth,
  shimmerHeight = '1em',
  children,
}: TranslationTextProps) {
  const { t, isLoading } = useLanguage();
  const translation = t(translationKey);
  const isMissing = translation.startsWith('[missing:');

  // Show shimmer if translation is missing or still loading
  if (isMissing || isLoading) {
    // Calculate width based on key length or use provided width
    const width = shimmerWidth || estimateWidth(translationKey);
    
    return (
      <Component
        className={cn(
          'inline-block shimmer rounded',
          'bg-white/5',
          className
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: shimmerHeight,
          minWidth: '60px',
          verticalAlign: 'baseline',
        }}
        aria-label={`Loading translation for ${translationKey}`}
        aria-busy="true"
      >
        {children}
      </Component>
    );
  }

  return (
    <Component className={className}>
      {translation}
      {children}
    </Component>
  );
}

/**
 * Estimate width based on translation key or common patterns
 */
function estimateWidth(key: string): string {
  // Common patterns for different text types
  const patterns: Record<string, string> = {
    'nav.': '80px',
    'hero.title': '300px',
    'hero.subtitle': '500px',
    'pages.': '120px',
    'blog.': '150px',
    'settings.': '100px',
    'footer.': '120px',
  };

  for (const [pattern, width] of Object.entries(patterns)) {
    if (key.startsWith(pattern)) {
      return width;
    }
  }

  // Default width based on key length
  const keyLength = key.length;
  if (keyLength < 10) return '60px';
  if (keyLength < 20) return '100px';
  if (keyLength < 30) return '150px';
  return '200px';
}

