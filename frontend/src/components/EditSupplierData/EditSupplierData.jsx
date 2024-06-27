import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

import API from '../../services/axios';
import { createSelectOptions } from '../../helpers/createSelectOptions';

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
import { DatePicker } from '../DatePicker/DatePicker';

const supplierSchema = Yup.object().shape({
  name: Yup.string()
    .required('Supplier info is required')
    .matches(/^[a-zA-Z0-9_\- ]{3,40}$/, 'Enter a valid Supplier info*'),
  address: Yup.string()
    .required('Address is required')
    .matches(/^[a-zA-Z0-9\s,'-]+$/, 'Enter a valid Supplier address*'),
  supplier: Yup.string()
    .required('supplier is required')
    .matches(/^[a-zA-Z0-9_\- ]{3,50}$/, 'Enter a valid Supplier name*'),
  date: Yup.string().required('Delivery date is required'),
  amount: Yup.string().required('Price is required').min(0.01),
  status: Yup.string().required('Status is required'),
});

const SupplierStatuses = {
  ACTIVE: 'Active',
  DEACTIVE: 'Deactive',
};

const statusOptions = createSelectOptions(Object.values(SupplierStatuses));

export const EditSupplierData = ({
  isOpen,
  onClose,
  supplier,
  setSuppliers,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(supplierSchema),
    defaultValues: {
      name: supplier.name,
      address: supplier.address,
      supplier: supplier.suppliers,
      date: supplier.date,
      amount: supplier.amount,
      status: supplier.status,
    },
  });

  const onSubmit = async (data) => {
    data.date = format(data.date, 'MMMM d, yyyy');

    try {
      const editSupplierPromise = API.put(`/suppliers/${supplier._id}`, data);
      await toast.promise(editSupplierPromise, {
        loading: 'Saving...',
        success: ({ data }) => {
          setSuppliers((prevState) => ({
            ...prevState,
            paginatedResult: prevState.paginatedResult.map((supplier) =>
              supplier._id === data._id ? data : supplier
            ),
          }));
          return 'Successful saved!';
        },
        error: (error) => error.message,
      });
      onClose();
    } catch (error) {}
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WrapperForm>
        <TitleForm>Edit supplier</TitleForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperFormFields>
            <InputForm
              type="text"
              {...register('name')}
              placeholder="Supplier Info"
              data-is-correct={!errors.name}
              data-has-error={errors.name}
            />
            <InputForm
              type="text"
              {...register('address')}
              placeholder="Address"
              data-is-correct={!errors.address}
              data-has-error={errors.address}
            />
            <InputForm
              type="text"
              {...register('supplier')}
              placeholder="Supplier"
              data-is-correct={!errors.supplier}
              data-has-error={errors.supplier}
            />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="Delivery date"
                  onChange={field.onChange}
                  selected={field.value}
                  isCorrect={!errors.date}
                  hasError={errors.date}
                />
              )}
            />
            <InputForm
              type="number"
              step="any"
              {...register('amount')}
              placeholder="Amount"
              data-is-correct={!errors.amount}
              data-has-error={errors.amount}
            />
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  defaultValue={{
                    value: supplier.status,
                    label: supplier.status,
                  }}
                  options={statusOptions}
                  placeholder="Status"
                  menuHeight={76}
                  onChange={onChange}
                  isCorrect={!errors.status}
                  hasError={errors.status}
                />
              )}
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
