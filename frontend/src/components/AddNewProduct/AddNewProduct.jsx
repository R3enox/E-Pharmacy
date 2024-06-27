import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import API from '../../services/axios';
import { Modal } from '../Modal/Modal';
import {
  WrapperForm,
  TitleForm,
  Form,
  WrapperFormFields,
  InputForm,
  BtnsWrapper,
  BtnSubmit,
  BtnCancel,
} from '../Modal/Form.styled';
import { SelectComp } from '../SelectComp/SelectComp';
import { createSelectOptions } from '../../helpers/createSelectOptions';

const productSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product info is required')
    .matches(/^[a-zA-Z0-9_\- ]{3,30}$/, 'Enter a valid Product info*'),
  category: Yup.string().required('Category is required'),
  stock: Yup.string().required('Stock is required').min(0),
  supplier: Yup.string().required('Supplier is required'),
  price: Yup.string().required('Price is required').min(0.01),
});

export const AddNewProduct = ({
  isOpen,
  onClose,
  categories,
  suppliers,
  setProducts,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    const supplier = suppliers.find(
      ({ suppliers }) => suppliers._id === data.supplier
    );

    const supplierName = supplier.suppliers.suppliers;

    data.suppliers = supplierName;

    try {
      const addProductPromise = API.post('/products', data);
      await toast.promise(addProductPromise, {
        loading: 'Adding...',
        success: ({ data }) => {
          setProducts((prevState) => ({
            ...prevState,
            paginatedResult: [data, ...prevState.paginatedResult.slice(0, 4)],
            totalCount: prevState.totalCount + 1,
          }));
          return 'Successful added!';
        },
        error: (error) => error.message,
      });
      onClose();
    } catch (error) {}
  };

  const categoryOptions = createSelectOptions(categories);
  const supplierOptions = suppliers.map(({ suppliers }) => ({
    value: suppliers._id,
    label: suppliers.suppliers,
  }));

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;
  const isCorrectCategory = dirtyFields.category && !errors.category;
  const hasErrorCategory = errors.category;
  const isCorrectStock = dirtyFields.stock && !errors.stock;
  const hasErrorStock = errors.stock;
  const isCorrectSupplier = dirtyFields.supplier && !errors.supplier;
  const hasErrorSupplier = errors.supplier;
  const isCorrectPrice = dirtyFields.price && !errors.price;
  const hasErrorPrice = errors.price;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WrapperForm>
        <TitleForm>Add a new product</TitleForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperFormFields>
            <InputForm
              type="text"
              {...register('name')}
              placeholder="Product Info"
              data-is-correct={isCorrectName}
              data-has-error={hasErrorName}
            />
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  options={categoryOptions}
                  placeholder="Category"
                  menuHeight={140}
                  onChange={onChange}
                  isCorrect={isCorrectCategory}
                  hasError={hasErrorCategory}
                />
              )}
            />
            <InputForm
              type="number"
              {...register('stock')}
              placeholder="Stock"
              data-is-correct={isCorrectStock}
              data-has-error={hasErrorStock}
            />
            <Controller
              name="supplier"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  options={supplierOptions}
                  placeholder="Suppliers"
                  menuHeight={140}
                  onChange={onChange}
                  isCorrect={isCorrectSupplier}
                  hasError={hasErrorSupplier}
                />
              )}
            />
            <InputForm
              type="number"
              step="any"
              {...register('price')}
              placeholder="Price"
              data-is-correct={isCorrectPrice}
              data-has-error={hasErrorPrice}
            />
          </WrapperFormFields>

          <BtnsWrapper>
            <BtnSubmit type="submit">Add</BtnSubmit>
            <BtnCancel type="reset" onClick={onClose}>
              Cancel
            </BtnCancel>
          </BtnsWrapper>
        </Form>
      </WrapperForm>
    </Modal>
  );
};
