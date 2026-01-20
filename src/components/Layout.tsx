import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer/index';
import { SkipLink } from './SkipLink';
import { ThemeProvider } from '../context/ThemeContext';
import { LoadingProvider } from '../context/LoadingContext';
import { RouteLoadingHandler } from './loading/RouteLoadingHandler';

export function Layout() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
          <SkipLink />
          <Header />
          <RouteLoadingHandler>
            <main id="main-content" className="min-h-screen">
              <Outlet />
            </main>
          </RouteLoadingHandler>
          <Footer />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
}
