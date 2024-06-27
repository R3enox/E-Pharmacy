import styled from 'styled-components';
import { ThC, TdC } from '../Table/Table.styled';

export const Name = styled(ThC)`
  min-width: 112px;

  @media screen and (min-width: 768px) {
    min-width: 240px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 276px;
  }
`;

export const Category = styled(ThC)`
  min-width: 78px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 230px;
  }
`;

export const Stock = styled(ThC)`
  min-width: 57px;

  @media screen and (min-width: 768px) {
    min-width: 119px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 199px;
  }
`;

export const Supplier = styled(ThC)`
  min-width: 78px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 226px;
  }
`;

export const Price = styled(ThC)`
  min-width: 69px;

  @media screen and (min-width: 768px) {
    min-width: 140px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 163px;
  }
`;

export const Action = styled(ThC)`
  min-width: 89px;

  @media screen and (min-width: 768px) {
    min-width: 121px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 146px;
  }
`;

export const ActionData = styled(TdC)`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const BtnAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  background-color: transparent;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BtnEdit = styled(BtnAction)`
  color: ${(p) => p.theme.colors.green()};

  border: 1px solid ${(p) => p.theme.colors.green(0.5)};
`;

export const BtnRemove = styled(BtnAction)`
  color: ${(p) => p.theme.colors.red()};

  border: 1px solid ${(p) => p.theme.colors.red(0.5)};
`;

export const IconAction = styled.svg`
  width: 16px;
  height: 16px;

  fill: none;
  stroke: currentColor;
`;
