import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import {
  HeaderStyled,
  LogOutBtnWrapper,
  Logo,
  MobileMenuBtn,
  MobileMenuIcon,
  SubTitle,
  Title,
} from '../Header/Header.styled';
import { selectUser } from '../../redux/user/userSelectors';
const Pages = {
  dashboard: 'Dashboard',
  orders: 'All orders',
  products: 'All products',
  suppliers: 'All suppliers',
  customers: 'All customers',
};

export const Header = ({ onOpenSidebar }) => {
  const location = useLocation();
  const user = useSelector(selectUser);

  const page = location.pathname.slice(1);

  return (
    <HeaderStyled>
      <MobileMenuBtn
        type="button"
        onClick={onOpenSidebar}
        aria-label="open sidebar"
      >
        <MobileMenuIcon>
          <use href={sprite + '#icon-burger'}></use>
        </MobileMenuIcon>
      </MobileMenuBtn>
      <Logo to="/" aria-label="e-pharmacy logo" />
      <div>
        <Title>Medicine store</Title>
        <SubTitle>
          {Pages[page]} | {user.email}
        </SubTitle>
      </div>
      <LogOutBtnWrapper>
        <LogOutBtn />
      </LogOutBtnWrapper>
    </HeaderStyled>
  );
};
