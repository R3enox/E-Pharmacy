import { useState } from 'react';
import { IconNav, IconWrapper, SideBarMenu } from './SideBarNew.styled';
import sprite from '../../assets/sprite.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { toastSuccess } from '../../helpers/toast';
import { logOutThunk } from '../../redux/user/userOperations';
import { useDispatch } from 'react-redux';

const DashboardIcon = () => (
  <IconNav viewBox="0 0 24 24">
    <use href={sprite + '#icon-dashboard'} />
  </IconNav>
);

const OrdersIcon = () => (
  <IconNav viewBox="0 0 24 24">
    <use href={sprite + '#icon-orders'} />
  </IconNav>
);

const ProductsIcon = () => (
  <IconNav viewBox="0 0 24 24">
    <use href={sprite + '#icon-products'} />
  </IconNav>
);

const SuppliersIcon = () => (
  <IconNav viewBox="0 0 24 24">
    <use href={sprite + '#icon-suppliers'} />
  </IconNav>
);

const CustomersIcon = () => (
  <IconNav viewBox="0 0 24 24">
    <use href={sprite + '#icon-customers'} />
  </IconNav>
);
const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { name: 'Orders', path: '/orders', icon: <OrdersIcon /> },
  { name: 'Products', path: '/products', icon: <ProductsIcon /> },
  { name: 'Customers', path: '/customers', icon: <CustomersIcon /> },
  { name: 'Suppliers', path: '/suppliers', icon: <SuppliersIcon /> },
];

export const SideBarNew = ({ onCloseSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logOutThunk());
    toastSuccess('Logout successful!');
    navigate('/login');
  };

  return (
    <IconWrapper>
      <div className="wrapperBar">
        <SideBarMenu>
          <button className="iconBtn" type="button" onClick={onCloseSidebar}>
            <svg className="iconClose">
              <use href={sprite + '#icon-close'} />
            </svg>
          </button>
          <div className="wrapper">
            <ul className="listMenu">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    className={({ isActive }) =>
                      !isActive ? 'sideLink' : 'active'
                    }
                    to={item.path}
                    onClick={onCloseSidebar}
                  >
                    <button className="iconBtnNav">{item.icon}</button>
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="btnLogout" type="button" onClick={logOut}>
              <svg className="iconLogout">
                <use href={sprite + '#icon-logout'} />
              </svg>
            </button>
          </div>
        </SideBarMenu>
      </div>
    </IconWrapper>
  );
};
