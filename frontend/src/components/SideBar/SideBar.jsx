import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import { Backdrop, Wrapper } from './SideBar.styled';
import { SideBarNew } from '../SideBarNew/SideBarNew';

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
        <SideBarNew onCloseSidebar={onCloseSidebar} />
      </Wrapper>

      {isSidebarOpen && <Backdrop onClick={handleBackdropClick} />}
    </>
  );
};
