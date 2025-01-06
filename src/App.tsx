import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default function App() {
  console.log(import.meta.env.BASE_URL)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageProvider>
  );
}
