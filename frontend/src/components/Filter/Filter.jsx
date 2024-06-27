import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import sprite from '../../assets/sprite.svg';
import { Message } from '../Message/Message';
import { Form, IconFilter, InputName, ActionBtn } from './Filter.styled';

const filterSchema = (fieldName) =>
  Yup.object().shape({
    name: Yup.string().required(`${fieldName} is required`),
  });

export const Filter = ({
  placeholder,
  fieldName,
  onFilterSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(filterSchema(fieldName)),
  });

  const onSubmit = (data) => {
    onFilterSubmit(data.name);
  };

  const handleFilterReset = () => {
    onFilterSubmit('');
  };

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Message hasError={hasErrorName} errorMessage={errors.name?.message}>
        <InputName
          type="text"
          {...register('name')}
          placeholder={placeholder}
          data-is-correct={isCorrectName}
          data-has-error={hasErrorName}
        />
      </Message>

      <ActionBtn type="submit" disabled={isLoading}>
        <IconFilter>
          <use href={sprite + '#icon-filter'}></use>
        </IconFilter>
        Filter
      </ActionBtn>
      <ActionBtn type="reset" disabled={isLoading} onClick={handleFilterReset}>
        Reset
      </ActionBtn>
    </Form>
  );
};
