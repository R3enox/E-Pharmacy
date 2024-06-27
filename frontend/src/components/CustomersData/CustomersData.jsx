import { Table, TableCaption, Tr, TdC, Avatar } from '../Table/Table.styled';
import {
  Address,
  AddressData,
  Email,
  Name,
  NameData,
  Phone,
  RegisterDate,
} from './CustomersData.styled';

export const CustomersData = ({ customers }) => {
  return (
    <Table>
      <TableCaption>Customers Data</TableCaption>
      <thead>
        <Tr>
          <Name>User info</Name>
          <Email>Email</Email>
          <Address>Address</Address>
          <Phone>Phone</Phone>
          <RegisterDate>Register date</RegisterDate>
        </Tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <Tr key={customer._id}>
            <NameData>
              <Avatar src={customer.image} alt={`${customer.name} avatar`} />
              {customer.name}
            </NameData>
            <TdC>{customer.email}</TdC>
            <AddressData>{customer.address}</AddressData>
            <TdC>{customer.phone}</TdC>
            <TdC>{customer.registerDate}</TdC>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};
