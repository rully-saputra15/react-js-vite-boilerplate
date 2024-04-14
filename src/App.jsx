import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  console.log(routes);
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
