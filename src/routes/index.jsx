import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/app';
import NotFoundPage from '../pages/404';

const modules = import.meta.glob('/src/pages/**/[a-z[]*.jsx', { eager: true });

const pages = Object.keys(modules)
  .map((mod) => {
    if (!mod.includes('app')) {
      const path = mod
        .replace(/\/src\/pages|app|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1');

      const Element = modules[mod].default;
      return {
        path: path,
        element: <Element />,
      };
    }
  })
  .filter((page) => !!page);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [...pages],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
