import { Avatar, Table, TableCaption, TdC, Tr } from '../Table/Table.styled';
import { Email, Name, Spent, Tb } from './RecentCustomers.styled';

export const RecentCustomers = ({ customers }) => {
  return (
    <Table>
      <TableCaption>Recent Customers</TableCaption>
      <thead>
        <Tr>
          <Name>Name</Name>
          <Email>Email</Email>
          <Spent>Spent</Spent>
        </Tr>
      </thead>
      <Tb>
        {customers.map((customer) => (
          <Tr key={customer._id}>
            <TdC>
              <Avatar src={customer.image} alt={`${customer.name} avatar`} />
              {customer.name}
            </TdC>
            <TdC>{customer.email}</TdC>
            <TdC>{customer.spent.toLocaleString('en-US')}</TdC>
          </Tr>
        ))}
      </Tb>
    </Table>
  );
};
