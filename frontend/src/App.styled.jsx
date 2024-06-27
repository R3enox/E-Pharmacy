import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 32px;
  }
`;
