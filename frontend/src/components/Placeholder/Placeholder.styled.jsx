import styled from 'styled-components';

export const WrapperPlaceholder = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const WrapperContent = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2.5)};
  height: 100%;

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(5)};
  }
`;

export const TextPlaceholder = styled.p`
  max-width: 197px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    max-width: 274px;
  }
`;
