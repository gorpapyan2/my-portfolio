import { createHashRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { WorkPage } from '../pages/WorkPage/index';
import { BlogPage } from '../pages/BlogPage/index';
import { ContactPage } from '../pages/ContactPage/index';

export const router = createHashRouter([
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
    ],
  },
]);
