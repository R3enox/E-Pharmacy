import styled from 'styled-components';

import { ThC, TdC } from '../Table/Table.styled';
import { TransactionTypes } from '../../helpers/addPlusOrMinus';

const TextColorTransactionType = (p) => {
  const transactionType = p['data-transaction-type'];

  switch (transactionType) {
    case TransactionTypes.INCOME:
      return p.theme.colors.green();
    case TransactionTypes.EXPENSE:
      return p.theme.colors.red();
    default:
      return p.theme.colors.primaryText;
  }
};

const BgColorTransactionType = (p) => {
  const transactionType = p['data-transaction-type'];

  switch (transactionType) {
    case TransactionTypes.INCOME:
      return p.theme.colors.green(0.1);
    case TransactionTypes.EXPENSE:
      return p.theme.colors.red(0.1);
    default:
      return p.theme.colors.border;
  }
};

export const Date = styled(ThC)`
  width: 100%;
`;

export const TransactionCell = styled(TdC)`
  min-width: 98px;

  border-right: 0;

  @media screen and (min-width: 768px) {
    min-width: 100px;
  }
`;

export const TransactionText = styled.p`
  width: 80px;
  padding-top: ${(p) => p.theme.spacing(1)};
  padding-bottom: ${(p) => p.theme.spacing(1)};

  letter-spacing: -0.05em;
  text-align: center;
  color: ${TextColorTransactionType};

  background-color: ${BgColorTransactionType};
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Name = styled(TdC)`
  min-width: 131px;

  border-right: 0;
  border-left: 0;

  @media screen and (min-width: 768px) {
    min-width: 466px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 392px;
  }
`;

export const Amount = styled(TdC)`
  min-width: 78px;

  text-align: right;
  text-decoration: ${(p) =>
    p['data-transaction-type'] === TransactionTypes.ERROR
      ? 'line-through'
      : 'unset'};
  color: ${TextColorTransactionType};

  border-left: 0;

  @media screen and (min-width: 768px) {
    min-width: 98px;
  }
`;
