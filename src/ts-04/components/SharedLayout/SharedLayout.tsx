import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
