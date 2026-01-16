import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer/index';
import { ThemeProvider } from '../context/ThemeContext';
import { LoadingProvider } from '../context/LoadingContext';
import { RouteLoadingHandler } from './loading/RouteLoadingHandler';

export function Layout() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
          <Header />
          <RouteLoadingHandler>
            <main className="min-h-screen">
              <Outlet />
            </main>
          </RouteLoadingHandler>
          <Footer />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
}
