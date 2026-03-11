import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer/index';
import { SkipLink } from './SkipLink';
import { ThemeProvider } from '../context/ThemeContext';

export function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
