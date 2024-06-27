import { Table, TableCaption, Tr, TdC, Avatar } from '../Table/Table.styled';
import {
  Address,
  AddressData,
  Name,
  NameData,
  Order,
  OrderStatus,
  Price,
  Products,
  Status,
} from './AllOrders.styled';

export const AllOrders = ({ orders }) => {
  return (
    <Table>
      <TableCaption>All Orders</TableCaption>
      <thead>
        <Tr>
          <Name>User info</Name>
          <Address>Address</Address>
          <Products>Products</Products>
          <Order>Order date</Order>
          <Price>Price</Price>
          <Status>Status</Status>
        </Tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <Tr key={order._id}>
            <NameData>
              <Avatar src={order.photo} alt={`${order.name} avatar`} />
              {order.name}
            </NameData>
            <AddressData>{order.address}</AddressData>
            <TdC>{order.products}</TdC>
            <TdC>{order.order_date}</TdC>
            <TdC>{order.price.toLocaleString('en-US')}</TdC>
            <TdC>
              <OrderStatus data-order-status={order.status}>
                {order.status}
              </OrderStatus>
            </TdC>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};
