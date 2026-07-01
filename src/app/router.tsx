import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ServicesPage } from '../pages/ServicesPage/ServicesPage';
import { ServiceDetailsPage } from '../pages/ServiceDetailsPage/ServiceDetailsPage';
import { RunPage } from '../pages/RunPage/RunPage';
import { ComparePage } from '../pages/ComparePage/ComparePage';

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
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}