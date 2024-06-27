import styled from 'styled-components';

import { ThC, TdC } from '../Table/Table.styled';

export const Tb = styled.tbody`
  tr {
    &:last-child td {
      @media screen and (min-width: 1440px) {
        padding-bottom: ${(p) => p.theme.spacing(5.875)};
      }
    }
  }
`;

export const Name = styled(ThC)`
  min-width: 92px;

  @media screen and (min-width: 768px) {
    min-width: 235px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 203px;
  }
`;

export const Email = styled(ThC)`
  min-width: 151px;

  @media screen and (min-width: 768px) {
    min-width: 279px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 269px;
  }
`;

export const Spent = styled(ThC)`
  min-width: 64px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 118px;
  }
`;

export const DataCell = styled(TdC)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
