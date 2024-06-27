import styled from 'styled-components';

import { ThC, TdC } from '../Table/Table.styled';

export const Name = styled(ThC)`
  min-width: 94px;

  @media screen and (min-width: 768px) {
    min-width: 195px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 260px;
  }
`;

export const Email = styled(ThC)`
  min-width: 161px;

  @media screen and (min-width: 768px) {
    min-width: 234px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 299px;
  }
`;

export const Address = styled(ThC)`
  min-width: 120px;

  @media screen and (min-width: 768px) {
    min-width: 148px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 213px;
  }
`;

export const Phone = styled(ThC)`
  min-width: 148px;

  @media screen and (min-width: 768px) {
    min-width: 198px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 263px;
  }
`;

export const RegisterDate = styled(ThC)`
  min-width: 119px;

  @media screen and (min-width: 768px) {
    min-width: 145px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 205px;
  }
`;

export const NameData = styled(TdC)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const AddressData = styled(TdC)`
  white-space: nowrap;
`;
