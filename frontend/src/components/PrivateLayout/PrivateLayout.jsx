import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Sidebar } from '../SideBar/SideBar';
import { Container, Main, Wrapper } from './PrivateLayout.styled';

export const PrivateLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Container>
      <Header onOpenSidebar={openSidebar} />
      <Wrapper>
        <Sidebar isSidebarOpen={isSidebarOpen} onCloseSidebar={closeSidebar} />

        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
      </Wrapper>
    </Container>
  );
};
