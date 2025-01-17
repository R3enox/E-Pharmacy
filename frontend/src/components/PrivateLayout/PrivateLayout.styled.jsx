import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  min-height: calc(100vh - 79px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 81px);
  }
`;

export const Main = styled.main`
  width: 100%;
  padding-right: ${(p) => p.theme.spacing(5)};
  padding-left: ${(p) => p.theme.spacing(5)};
  padding-top: ${(p) => p.theme.spacing(5)};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-right: ${(p) => p.theme.spacing(8)};
    padding-left: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${(p) => p.theme.spacing(10)};
    padding-left: ${(p) => p.theme.spacing(10)};
  }
`;
