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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <RouteLoadingHandler>
            <main>
              <Outlet />
            </main>
          </RouteLoadingHandler>
          <Footer />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
}
