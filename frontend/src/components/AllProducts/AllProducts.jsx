import { useState } from 'react';
import toast from 'react-hot-toast';
import sprite from '../../assets/sprite.svg';
import API from '../../services/axios';
import { useModal } from '../../hooks/useModal';

import { Table, TableCaption, Tr, TdC } from '../Table/Table.styled';
import {
  Action,
  ActionData,
  BtnEdit,
  BtnRemove,
  Category,
  IconAction,
  Name,
  Price,
  Stock,
  Supplier,
} from './AllProducts.styled';
import { EditProductData } from '../EditProductData/EditProductData';

export const AllProducts = ({
  products,
  categories,
  suppliers,
  setProducts,
}) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  const handleEditProductClick = (product) => {
    setCurrentProduct(product);
    toggleModal();
  };

  const handleRemoveProductClick = async (productId) => {
    try {
      const removeProductPromise = API.delete(`/products/${productId}`);
      await toast.promise(removeProductPromise, {
        loading: 'Removing...',
        success: () => {
          setProducts((prevState) => ({
            ...prevState,
            paginatedResult: prevState.paginatedResult.filter(
              (product) => product._id !== productId
            ),
          }));
          return 'Successful removed!';
        },
        error: (error) => error.message,
      });
    } catch (error) {}
  };

  return (
    <>
      <Table>
        <TableCaption>All Products</TableCaption>
        <thead>
          <Tr>
            <Name>Product info</Name>
            <Category>Category</Category>
            <Stock>Stock</Stock>
            <Supplier>Supplier</Supplier>
            <Price>Price</Price>
            <Action>Action</Action>
          </Tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Tr key={product._id}>
              <TdC>{product.name}</TdC>
              <TdC>{product.category}</TdC>
              <TdC>{product.stock}</TdC>
              <TdC>{product.suppliers}</TdC>
              <TdC>{product.price.toLocaleString('en-US')}</TdC>
              <ActionData>
                <BtnEdit
                  type="button"
                  onClick={() => handleEditProductClick(product)}
                >
                  <IconAction>
                    <use href={sprite + '#icon-edit'}></use>
                  </IconAction>
                </BtnEdit>
                <BtnRemove
                  type="button"
                  onClick={() => handleRemoveProductClick(product._id)}
                >
                  <IconAction>
                    <use href={sprite + '#icon-trash'}></use>
                  </IconAction>
                </BtnRemove>
              </ActionData>
            </Tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <EditProductData
          isOpen={isModalOpen}
          onClose={toggleModal}
          product={currentProduct}
          categories={categories}
          suppliers={suppliers}
          setProducts={setProducts}
        />
      )}
    </>
  );
};
