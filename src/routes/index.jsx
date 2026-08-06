import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Plants from '../pages/Plants';
import PlantDetail from '../pages/PlantDetail';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'plants', element: <Plants /> },
      { path: 'plants/:slug', element: <PlantDetail /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
