import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateLayout } from '../components/PrivateLayout/PrivateLayout';

const DashboardPage = lazy(() => import('../pages/DasboardPage/DasboardPage'));
const OrdersPage = lazy(() => import('../pages//AllOrdersPage/AllOrdersPage'));
const ProductsPage = lazy(() =>
  import('../pages/AllProductsPage/AllProductsPage')
);
const SuppliersPage = lazy(() =>
  import('../pages/AllSuppliersPage/AllSuppliersPage')
);
const CustomersPage = lazy(() =>
  import('../pages/CustomersDataPage/CustomersDataPage')
);

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
