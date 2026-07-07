import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AppLayout } from '../components/layout/AppLayout/AppLayout';
import { ComparePage } from '../pages/ComparePage/ComparePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RunPage } from '../pages/RunPage/RunPage';
import { ServiceDetailsPage } from '../pages/ServiceDetailsPage/ServiceDetailsPage';
import { ServicesPage } from '../pages/ServicesPage/ServicesPage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/services/:serviceId',
        element: <ServiceDetailsPage />,
      },
      {
        path: '/run/:runId',
        element: <RunPage />,
      },
      {
        path: '/compare',
        element: <ComparePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}