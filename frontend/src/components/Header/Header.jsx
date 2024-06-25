import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { SubTitle } from './SubTitle';
import { Title } from './Title';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSelectors';
import { SideBar } from '../SideBar/SideBar';
import { HeaderWrapper, TitleWrapper } from './Header.styled';

const Pages = {
  dashboard: 'Dashboard',
  orders: 'All orders',
  products: 'All products',
  suppliers: 'All suppliers',
  customers: 'All customers',
};

export const Header = () => {
  const location = useLocation();
  const { email } = useSelector(selectUser);

  const page = location.pathname.slice(1);
  return (
    <HeaderWrapper>
      <SideBar />
      <Logo />
      <TitleWrapper>
        <Title />
        <SubTitle>
          {Pages[page]} | {email}
        </SubTitle>
      </TitleWrapper>
    </HeaderWrapper>
  );
};
