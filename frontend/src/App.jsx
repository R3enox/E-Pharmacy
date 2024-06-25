import { lazy, useEffect } from 'react';
import { AppWrapper } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchCurrentThunk } from './redux/user/userOperations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoutes';
import * as ROUTES from './constants/routes.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const DasboardPage = lazy(() =>
  import('./pages/DasboardPage/DasboardPage.jsx')
);
const AllOrdersPage = lazy(() =>
  import('./pages/AllOrdersPage/AllOrdersPage.jsx')
);
const AllProductsPage = lazy(() =>
  import('./pages/AllProductsPage/AllProductsPage.jsx')
);
const AllSuppliersPage = lazy(() =>
  import('./pages/AllSuppliersPage/AllSuppliersPage.jsx')
);
const CustomersDataPage = lazy(() =>
  import('./pages/CustomersDataPage/CustomersDataPage.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const appRoutesPrivate = [
    {
      path: ROUTES.DASHBOARD_ROUTE,
      element: (
        <PrivateRoute>
          <DasboardPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.ALL_ORDERS_ROUTE,
      element: (
        <PrivateRoute>
          <AllOrdersPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.ALL_PRODUCTS_ROUTE,
      element: (
        <PrivateRoute>
          <AllProductsPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.ALL_SUPPLIERS_ROUTE,
      element: (
        <PrivateRoute>
          <AllSuppliersPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.CUSTOMERS_DATA_ROUTE,
      element: (
        <PrivateRoute>
          <CustomersDataPage />
        </PrivateRoute>
      ),
    },
  ];

  const appRoutesRestricted = [
    {
      path: ROUTES.LOGIN_ROUTE,
      element: (
        <RestrictedRoute navigateTo={ROUTES.LOGIN_ROUTE}>
          <LoginPage />
        </RestrictedRoute>
      ),
    },
  ];

  useEffect(() => {
    // dispatch(fetchCurrentThunk());
  }, [dispatch]);
  return (
    <AppWrapper>
      <ToastContainer />
      <Routes>
        {appRoutesRestricted.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route element={<SharedLayout />}>
          {appRoutesPrivate.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AppWrapper>
  );
};
export default App;
