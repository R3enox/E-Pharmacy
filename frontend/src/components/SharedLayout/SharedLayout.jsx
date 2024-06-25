import { Suspense } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { Header } from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
