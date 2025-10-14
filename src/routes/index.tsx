import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { WorkPage } from '../pages/WorkPage/index';
import { BlogPage } from '../pages/BlogPage/index';
import { ContactPage } from '../pages/ContactPage/index';
import { SettingsPage } from '../pages/SettingsPage/index';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'work',
        element: <WorkPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });
