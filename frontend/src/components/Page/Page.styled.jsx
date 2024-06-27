import styled from 'styled-components';

export const WrapperPage = styled.div`
  height: 100%;
  padding-top: ${(p) => p.theme.spacing(10)};
  padding-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    padding-top: ${(p) => p.theme.spacing(12.5)};
  }

  @media screen and (min-width: 1440px) {
    padding-top: ${(p) => p.theme.spacing(13.75)};
  }
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(4)};
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const WrapperPlaceholder = styled.div`
  margin-top: 100px;
`;
