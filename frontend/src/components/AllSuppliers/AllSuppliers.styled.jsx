import styled from 'styled-components';

import { ThC, TdC } from '../Table/Table.styled';

const SupplierStatuses = {
  ACTIVE: 'Active',
  DEACTIVE: 'Deactive',
};

const TextColorSupplierStatus = (p) => {
  const supplierStatus = p['data-supplier-status'];

  switch (supplierStatus) {
    case SupplierStatuses.ACTIVE:
      return p.theme.colors.green();
    case SupplierStatuses.DEACTIVE:
      return p.theme.colors.red();
    default:
      return p.theme.colors.primaryText;
  }
};

const BgColorSupplierStatus = (p) => {
  const supplierStatus = p['data-supplier-status'];

  switch (supplierStatus) {
    case SupplierStatuses.ACTIVE:
      return p.theme.colors.green(0.1);
    case SupplierStatuses.DEACTIVE:
      return p.theme.colors.red(0.1);
    default:
      return p.theme.colors.border;
  }
};

export const Name = styled(ThC)`
  min-width: 94px;

  @media screen and (min-width: 768px) {
    min-width: 175px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 191px;
  }
`;

export const Address = styled(ThC)`
  min-width: 94px;

  @media screen and (min-width: 768px) {
    min-width: 128px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 188px;
  }
`;

export const Company = styled(ThC)`
  min-width: 83px;

  @media screen and (min-width: 768px) {
    min-width: 108px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 166px;
  }
`;

export const DeliveryDate = styled(ThC)`
  min-width: 115px;

  @media screen and (min-width: 768px) {
    min-width: 157px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 215px;
  }
`;

export const Amount = styled(ThC)`
  min-width: 88px;

  @media screen and (min-width: 768px) {
    min-width: 121px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 162px;
  }
`;

export const Status = styled(ThC)`
  min-width: 90px;

  @media screen and (min-width: 768px) {
    min-width: 129px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 189px;
  }
`;

export const Action = styled(ThC)`
  min-width: 86px;

  @media screen and (min-width: 768px) {
    min-width: 102px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 129px;
  }
`;

export const AddressData = styled(TdC)`
  white-space: nowrap;
`;

export const CompanyData = styled(TdC)`
  white-space: nowrap;
`;

export const DeliveryDateData = styled(TdC)`
  white-space: nowrap;
`;

export const SupplierStatus = styled.p`
  width: 62px;
  padding-top: ${(p) => p.theme.spacing(1)};
  padding-bottom: ${(p) => p.theme.spacing(1)};

  letter-spacing: -0.05em;
  text-align: center;
  color: ${TextColorSupplierStatus};

  background-color: ${BgColorSupplierStatus};
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 89px;

    font-size: 14px;
  }
`;

export const BtnEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};
  padding: ${(p) => p.theme.spacing(1.25)} ${(p) => p.theme.spacing(3.25)};

  font-weight: 500;
  color: ${(p) => p.theme.colors.green()};

  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.green(0.5)};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(1.75)} ${(p) => p.theme.spacing(4)};
  }
`;

export const IconAction = styled.svg`
  width: 14px;
  height: 14px;

  fill: none;
  stroke: currentColor;
`;
