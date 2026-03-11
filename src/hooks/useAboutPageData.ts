import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getAbout, type AboutContent } from '@/lib/db/getAbout';
import { getSiteAsset } from '@/lib/db/getSiteAsset';
import { assetUrls } from '@/lib/config';

/**
 * AboutPageData interface - aggregates all data needed for AboutPage
 */
export interface AboutPageData {
  // Content
  aboutContent: AboutContent;
  portraitUrl: string | null;

  // Loading state
  isLoading: boolean;
  errorKey: string | null;

  // Feature flags
  soundEnabled: boolean;
  motionEnabled: boolean;
  performanceMonitoring: boolean;
  setPerformanceMonitoring: (enabled: boolean | ((prev: boolean) => boolean)) => void;

  // Language
  t: (key: string) => string;
}

/**
 * Custom hook for AboutPage data orchestration
 *
 * Handles all data fetching, state management, and feature flags for AboutPage.
 * Separates data concerns from presentation logic.
 *
 * Responsibilities:
 * - Fetch about content from database
 * - Fetch portrait asset URL
 * - Manage loading and error states
 * - Provide feature flag values (sound, motion, performance monitoring)
 * - Handle language changes with automatic refetch
 *
 * @example
 * ```tsx
 * function AboutPage() {
 *   const {
 *     aboutContent,
 *     portraitUrl,
 *     isLoading,
 *     errorKey,
 *     motionEnabled,
 *     t
 *   } = useAboutPageData();
 *
 *   return <AboutMe content={aboutContent} isLoading={isLoading} />;
 * }
 * ```
 *
 * @returns {AboutPageData} All data and state needed for AboutPage
 */
export function useAboutPageData(): AboutPageData {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const requestIdRef = useRef(0);
  const ABOUT_FETCH_TIMEOUT_MS = 8000;

  // Feature flags
  const soundEnabled = false; // Feature flag for sound effects
  const motionEnabled = !shouldReduceMotion; // Respect user's motion preference
  const [performanceMonitoring, setPerformanceMonitoring] = useState(false);

  // Content state
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    professionalJourney: [],
    philosophy: [],
    toolbox: [],
    keyResults: [],
    languages: [],
  });

  const [portraitUrl, setPortraitUrl] = useState<string | null>(assetUrls.portrait);
  const [isLoading, setIsLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  // Fetch about content and portrait when language changes
  useEffect(() => {
    let isActive = true;
    const requestId = ++requestIdRef.current;
    let timedOut = false;

    setIsLoading(true);
    setErrorKey(null);

    // Fetch about content
    const timeoutId = window.setTimeout(() => {
      if (!isActive || requestIdRef.current !== requestId) return;
      timedOut = true;
      setErrorKey('about.fallback.error');
      setIsLoading(false);
    }, ABOUT_FETCH_TIMEOUT_MS);

    void getAbout(language)
      .then(data => {
        if (!isActive || requestIdRef.current !== requestId || timedOut) return;
        setAboutContent(data);
        setErrorKey(null);
      })
      .catch(() => {
        if (!isActive || requestIdRef.current !== requestId || timedOut) return;
        setErrorKey('about.fallback.error');
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        if (!isActive || requestIdRef.current !== requestId || timedOut) return;
        setIsLoading(false);
      });

    // Fetch portrait asset
    void getSiteAsset('about_portrait')
      .then(asset => {
        if (!isActive) return;
        setPortraitUrl(asset?.url ?? assetUrls.portrait);
      })
      .catch(() => {
        if (!isActive) return;
        setPortraitUrl(assetUrls.portrait);
      });

    // Cleanup function to prevent state updates after unmount
    return () => {
      window.clearTimeout(timeoutId);
      isActive = false;
    };
  }, [language]);

  return {
    aboutContent,
    portraitUrl,
    isLoading,
    errorKey,
    soundEnabled,
    motionEnabled,
    performanceMonitoring,
    setPerformanceMonitoring,
    t,
  };
}
