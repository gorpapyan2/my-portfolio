import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { CodeThemeProvider } from './context/CodeThemeContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default function App() {
  console.log(import.meta.env.BASE_URL)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <CodeThemeProvider>
          <RouterProvider router={router} />
        </CodeThemeProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
