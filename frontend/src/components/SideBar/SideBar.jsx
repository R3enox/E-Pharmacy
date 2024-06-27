import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  Backdrop,
  BtnClose,
  IconCross,
  LogOutWrapper,
  Wrapper,
} from './SideBar.styled';
import { BtnLogOut } from '../LogOutBtn/LogOutBtn.styled';

export const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {
  useEffect(() => {
    const handleWindowResize = () => {
      if (innerWidth >= 1440) onCloseSidebar();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [onCloseSidebar]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseSidebar();
    }
  };

  return (
    <>
      <Wrapper data-is-sidebar-open={isSidebarOpen}>
        {/* <SidebarMenu onCloseSidebar={onCloseSidebar} />{' '} */}
        <SideBarNew onCloseSidebar={onCloseSidebar} />
        {/* <LogOutWrapper>
          <BtnLogOut />
        </LogOutWrapper> */}
      </Wrapper>

      {isSidebarOpen && <Backdrop onClick={handleBackdropClick} />}
    </>
  );
};
