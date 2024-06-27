import { Table, TableCaption, Tr } from '../Table/Table.styled';
import { addPlusOrMinus } from '../../helpers/addPlusOrMinus';
import {
  Amount,
  Date,
  Name,
  TransactionCell,
  TransactionText,
} from './Transaction.styled';

export const Transaction = ({ transactions }) => {
  return (
    <Table>
      <TableCaption>Income/Expenses</TableCaption>
      <tbody>
        <Tr>
          <Date colSpan="3">Today</Date>
        </Tr>
        {transactions.map((transaction) => (
          <Tr key={transaction._id}>
            <TransactionCell>
              <TransactionText data-transaction-type={transaction.type}>
                {transaction.type}
              </TransactionText>
            </TransactionCell>
            <Name>{transaction.name}</Name>
            <Amount data-transaction-type={transaction.type}>
              {addPlusOrMinus(transaction.type)}
              {transaction.amount.toLocaleString('en-US')}
            </Amount>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};
