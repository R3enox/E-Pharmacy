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

const SupplierStatuses = {
  ACTIVE: 'Active',
  DEACTIVE: 'Deactive',
};

const statusOptions = createSelectOptions(Object.values(SupplierStatuses));

const supplierSchema = Yup.object().shape({
  name: Yup.string()
    .required('Supplier info is required')
    .matches(/^[a-zA-Z0-9_\- ]{3,40}$/, 'Enter a valid Supplier info*'),
  address: Yup.string()
    .required('Address is required')
    .matches(/^[a-zA-Z0-9\s,'-]+$/, 'Enter a valid Supplier address*'),
  suppliers: Yup.string()
    .required('Company is required')
    .matches(/^[a-zA-Z0-9_\- ]{3,50}$/, 'Enter a valid Company name*'),
  date: Yup.string().required('Delivery date is required'),
  amount: Yup.string().required('Price is required').min(0.01),
  status: Yup.string().required('Status is required'),
});

export const AddNewSupplier = ({ isOpen, onClose, setSuppliers }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = async (data) => {
    data.date = format(data.date, 'MMMM d, yyyy');

    try {
      const addSupplierPromise = API.post('/suppliers', data);
      await toast.promise(addSupplierPromise, {
        loading: 'Adding...',
        success: ({ data }) => {
          setSuppliers((prevState) => ({
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

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;
  const isCorrectAddress = dirtyFields.address && !errors.address;
  const hasErrorAddress = errors.address;
  const isCorrectCompany = dirtyFields.company && !errors.company;
  const hasErrorCompany = errors.company;
  const isCorrectDate = dirtyFields.date && !errors.date;
  const hasErrorDate = errors.date;
  const isCorrectAmount = dirtyFields.amount && !errors.amount;
  const hasErrorAmount = errors.amount;
  const isCorrectStatus = dirtyFields.status && !errors.status;
  const hasErrorStatus = errors.status;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WrapperForm>
        <TitleForm>Add a new supplier</TitleForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperFormFields>
            <InputForm
              type="text"
              {...register('name')}
              placeholder="Supplier Info"
              data-is-correct={isCorrectName}
              data-has-error={hasErrorName}
            />
            <InputForm
              type="text"
              {...register('address')}
              placeholder="Address"
              data-is-correct={isCorrectAddress}
              data-has-error={hasErrorAddress}
            />
            <InputForm
              type="text"
              {...register('suppliers')}
              placeholder="Suppliers"
              data-is-correct={isCorrectCompany}
              data-has-error={hasErrorCompany}
            />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="Delivery date"
                  onChange={field.onChange}
                  selected={field.value}
                  isCorrect={isCorrectDate}
                  hasError={hasErrorDate}
                />
              )}
            />
            <InputForm
              type="number"
              step="any"
              {...register('amount')}
              placeholder="Amount"
              data-is-correct={isCorrectAmount}
              data-has-error={hasErrorAmount}
            />
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectComp
                  options={statusOptions}
                  placeholder="Status"
                  menuHeight={76}
                  onChange={onChange}
                  isCorrect={isCorrectStatus}
                  hasError={hasErrorStatus}
                />
              )}
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
