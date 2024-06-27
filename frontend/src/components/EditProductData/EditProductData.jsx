import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

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

export const EditProductData = ({
  isOpen,
  onClose,
  product,
  categories,
  suppliers,
  setProducts,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name,
      category: product.category,
      stock: product.stock,
      supplier: product.id,
      price: product.price,
    },
  });

  const onSubmit = async (data) => {
    const supplier = suppliers.find(
      ({ suppliers }) => suppliers._id === data.supplier
    );

    const supplierName = supplier.suppliers.suppliers;

    data.suppliers = supplierName;

    try {
      const editProductPromise = API.put(`/products/${product._id}`, data);
      await toast.promise(editProductPromise, {
        loading: 'Saving...',
        success: ({ data }) => {
          setProducts((prevState) => ({
            ...prevState,
            paginatedResult: prevState.paginatedResult.map((product) =>
              product._id === data._id ? data : product
            ),
          }));
          return 'Successful saved!';
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WrapperForm>
        <TitleForm>Edit product</TitleForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperFormFields>
            <InputForm
              type="text"
              {...register('name')}
              placeholder="Product Info"
              data-is-correct={!errors.name}
              data-has-error={errors.name}
            />
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  defaultValue={{
                    value: product.category,
                    label: product.category,
                  }}
                  options={categoryOptions}
                  placeholder="Category"
                  menuHeight={140}
                  onChange={onChange}
                  isCorrect={!errors.category}
                  hasError={errors.category}
                />
              )}
            />
            <InputForm
              type="number"
              {...register('stock')}
              placeholder="Stock"
              data-is-correct={!errors.stock}
              data-has-error={errors.stock}
            />
            <Controller
              name="supplier"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  defaultValue={{
                    value: product.suppliers.id,
                    label: product.suppliers,
                  }}
                  options={supplierOptions}
                  placeholder="Supplier"
                  menuHeight={140}
                  onChange={onChange}
                  isCorrect={!errors.supplier}
                  hasError={errors.supplier}
                />
              )}
            />
            <InputForm
              type="number"
              step="any"
              {...register('price')}
              placeholder="Price"
              data-is-correct={!errors.price}
              data-has-error={errors.price}
            />
          </WrapperFormFields>

          <BtnsWrapper>
            <BtnSubmit type="submit">Save</BtnSubmit>
            <BtnCancel type="reset" onClick={onClose}>
              Cancel
            </BtnCancel>
          </BtnsWrapper>
        </Form>
      </WrapperForm>
    </Modal>
  );
};
