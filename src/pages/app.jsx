import { Outlet } from 'react-router-dom';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function HomePage() {
  return (
    <section>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <p>Initiated by Rully Saputra</p>
      <Outlet />
    </section>
  );
}

export default HomePage;
