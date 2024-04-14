import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/app';

const modules = import.meta.glob('/src/pages/**/[a-z[]*.jsx', { eager: true });

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]);

const pages = Object.keys(modules)
  .map((mod) => {
    if (!mod.includes('app')) {
      const path = mod
        .replace(/\/src\/pages|app|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1');

      const Element = modules[mod].default;
      return {
        path: path.slice(1, path.length + 1),
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
]);

export default routes;
