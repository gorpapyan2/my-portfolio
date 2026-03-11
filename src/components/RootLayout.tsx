import { Outlet } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { ScrollToTop } from './ScrollToTop';
import { LoadingProvider } from '../context/LoadingContext';
import { RouteLoadingHandler } from './loading/RouteLoadingHandler';

export function RootLayout() {
  const shouldReduceMotion = useReducedMotion();
  const motionEnabled = !shouldReduceMotion;
  return (
    <LoadingProvider>
      <ScrollToTop />
      {!motionEnabled && (
        <style>{`
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        `}</style>
      )}
      <RouteLoadingHandler>
        <Outlet />
      </RouteLoadingHandler>
    </LoadingProvider>
  );
}
