import Select from 'react-select';
import { useTheme } from 'styled-components';

import { selectStyled } from './SelectComp.styled';

const BorderColorValidationResult = (theme, isCorrect, hasError) => {
  if (isCorrect) return theme.colors.green();

  if (hasError) return theme.colors.red();

  return theme.colors.border;
};

export const SelectComp = ({
  placeholder,
  options,
  defaultValue,
  menuHeight,
  onChange,
  isCorrect,
  hasError,
}) => {
  const theme = useTheme();

  return (
    <Select
      placeholder={placeholder}
      styles={{
        ...selectStyled,
        control: (baseStyles, state) => ({
          ...selectStyled.control(baseStyles, state),
          border: `1px solid ${BorderColorValidationResult(
            theme,
            isCorrect,
            hasError
          )}`,
        }),
        menu: (baseStyles, state) => ({
          ...selectStyled.menu(baseStyles, state),
          height: menuHeight,
        }),
      }}
      options={options}
      defaultValue={defaultValue}
      onChange={(selected) => onChange(selected?.value || '')}
      isCorrect={isCorrect}
      hasError={hasError}
    />
  );
};
