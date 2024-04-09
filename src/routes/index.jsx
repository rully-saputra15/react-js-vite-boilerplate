import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default routes;
