export const TransactionTypes = {
  INCOME: 'Income',
  EXPENSE: 'Expense',
  ERROR: 'Error',
};

export const addPlusOrMinus = (transactionType) => {
  switch (transactionType) {
    case TransactionTypes.INCOME:
      return '+';
    case TransactionTypes.EXPENSE:
      return '-';
    default:
      return '';
  }
};
