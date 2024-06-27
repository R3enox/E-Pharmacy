import ReactDatePicker from 'react-datepicker';
import { InputForm } from '../Modal/Form.styled';
import sprite from '../../assets/sprite.svg';
import { DatePickerContainer, IconCalendar } from './DatePicker.styled';

export const DatePicker = ({
  placeholder,
  onChange,
  selected,
  isCorrect,
  hasError,
}) => {
  return (
    <DatePickerContainer>
      <ReactDatePicker
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholder}
        onChange={onChange}
        selected={selected}
        minDate={new Date()}
        showIcon
        icon={
          <IconCalendar>
            <use href={sprite + '#icon-calendar'}></use>
          </IconCalendar>
        }
        customInput={
          <InputForm data-is-correct={isCorrect} data-has-error={hasError} />
        }
        toggleCalendarOnIconClick
      />
    </DatePickerContainer>
  );
};
