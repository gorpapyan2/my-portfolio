import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { TranslationGate } from './components/loading/TranslationGate';
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <LanguageProvider>
          <TranslationGate>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </TranslationGate>
        </LanguageProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
