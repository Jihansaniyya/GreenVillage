import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

// Route-based code splitting (lazy chunking)
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Plants = lazy(() => import('../pages/Plants'));
const PlantDetail = lazy(() => import('../pages/PlantDetail'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'plants', element: <Plants /> },
      { path: 'plants/:slug', element: <PlantDetail /> },
    ],
  },
]);

export default router;
