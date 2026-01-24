import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../components/Layout';
import { RootLayout } from '../components/RootLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { WorkPage } from '../pages/WorkPage/index';
import { BlogPage } from '../pages/BlogPage/index';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoadingFallback } from '../components/LoadingFallback';

// Lazy load heavy/infrequent routes to reduce initial bundle size
// These routes contain large dependencies (Markdown/Shiki, Three.js, admin logic)
const BlogViewPage = lazy(() => import('../pages/BlogPage/BlogViewPage').then(m => ({ default: m.BlogViewPage })));
const ContactPage = lazy(() => import('../pages/ContactPage/index').then(m => ({ default: m.ContactPage })));
const AdminLoginPage = lazy(() => import('../pages/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));
const AdminPage = lazy(() => import('../pages/AdminPage').then(m => ({ default: m.AdminPage })));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));


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
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <BlogViewPage />
              </Suspense>
            ),
          },
          {
            path: 'contact',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <ContactPage />
              </Suspense>
            ),
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '/admin/login',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminLoginPage />
          </Suspense>
        ),
      },
      {
        path: '/admin',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: '/admin/dashboard',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
  future: {
    // @ts-ignore - Flag exists in runtime but might be missing in types
    v7_startTransition: true,
  }
});
