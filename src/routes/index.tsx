import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { RootLayout } from '../components/RootLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { WorkPage } from '../pages/WorkPage/index';
import { BlogPage } from '../pages/BlogPage/index';
import { BlogViewPage } from '../pages/BlogPage/BlogViewPage';
import { ContactPage } from '../pages/ContactPage/index';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { AdminDashboard } from '../pages/AdminDashboard';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { AdminPage } from '../pages/AdminPage';


export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
            path: 'blog/:slug',
            element: <BlogViewPage />,
          },
          {
            path: 'contact',
            element: <ContactPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '/admin/login',
        element: <AdminLoginPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
      {
        path: '/admin/dashboard',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });
