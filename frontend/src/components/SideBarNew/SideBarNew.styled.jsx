import styled, { css } from 'styled-components';

export const IconNav = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${({ isActive }) => (isActive ? '#59b17a' : '#dcdddf')};

  &.active {
    fill: #59b17a;

    &:hover,
    &:focus {
      transition-duration: 300ms;
    }
  }

  &.headerLink {
    fill: #dcdddf;
    &:hover,
    &:focus {
      transition-duration: 300ms;
    }
  }
`;

export const BackDrop = styled.div`
  ${({ open }) =>
    open &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      background: rgba(29, 30, 33, 0.3);
      z-index: 99;
      overflow: hidden;

      .iconBurger {
        display: none;
      }
    `}
`;

export const IconWrapper = styled.nav`
  display: flex;
  gap: 10px;

  .iconBtn {
    border: none;
    background-color: transparent;
    width: 32px;
    height: 32px;
  }

  .iconBurger {
    stroke: black;
    width: 32px;
    height: 32px;
  }

  .iconClose {
    position: absolute;
    top: 20px;
    right: 14px;
    width: 32px;
    height: 32px;
    stroke: #1d1e21;
  }

  .listMenu {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  left: 79px;
  height: 100%;
  width: 78px;
  /* background-color: #f7f8fa; */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  padding: 92px 20px 20px;
  overflow-y: none;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .iconBtnNav {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 100%;
    background-color: #fff;
  }

  .btnLogout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 100%;
    background-color: #59b17a;
  }

  .iconLogout {
    width: 14px;
    height: 14px;
    fill: #f7f8fa;
  }

  @media screen and (min-width: 768px) {
    .iconBtnNav {
      width: 44px;
      height: 44px;
    }

    .iconBtn {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    .btnLogout {
      display: none;
    }
  }
`;

export const MenuContent = styled.div`
  padding: 20px;
  color: white;
`;
