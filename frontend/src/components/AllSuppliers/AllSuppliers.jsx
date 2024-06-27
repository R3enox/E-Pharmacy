import { useState } from 'react';

import sprite from '../../assets/sprite.svg';

import { Table, TableCaption, Tr, TdC } from '../Table/Table.styled';
import {
  Action,
  Address,
  AddressData,
  Amount,
  BtnEdit,
  Company,
  CompanyData,
  DeliveryDate,
  DeliveryDateData,
  IconAction,
  Name,
  Status,
  SupplierStatus,
} from './AllSuppliers.styled';
import { useModal } from '../../hooks/useModal';
import { EditSupplierData } from '../EditSupplierData/EditSupplierData';

export const AllSuppliers = ({ suppliers, setSuppliers }) => {
  const [currentSupplier, setCurrentSupplier] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  const handleEditSupplierClick = (supplier) => {
    setCurrentSupplier(supplier);
    toggleModal();
  };

  return (
    <>
      <Table>
        <TableCaption>All Suppliers</TableCaption>
        <thead>
          <Tr>
            <Name>Supplier info</Name>
            <Address>Address</Address>
            <Company>Company</Company>
            <DeliveryDate>Delivery date</DeliveryDate>
            <Amount>Amount</Amount>
            <Status>Status</Status>
            <Action>Action</Action>
          </Tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <Tr key={supplier._id}>
              <TdC>{supplier.name}</TdC>
              <AddressData>{supplier.address}</AddressData>
              <CompanyData>{supplier.suppliers}</CompanyData>
              <DeliveryDateData>{supplier.date}</DeliveryDateData>
              <TdC>{supplier.amount.toLocaleString('en-US')}</TdC>
              <TdC>
                <SupplierStatus data-supplier-status={supplier.status}>
                  {supplier.status}
                </SupplierStatus>
              </TdC>
              <TdC>
                <BtnEdit
                  type="button"
                  onClick={() => handleEditSupplierClick(supplier)}
                >
                  <IconAction>
                    <use href={sprite + '#icon-edit'}></use>
                  </IconAction>
                  Edit
                </BtnEdit>
              </TdC>
            </Tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <EditSupplierData
          isOpen={isModalOpen}
          onClose={toggleModal}
          supplier={currentSupplier}
          setSuppliers={setSuppliers}
        />
      )}
    </>
  );
};
