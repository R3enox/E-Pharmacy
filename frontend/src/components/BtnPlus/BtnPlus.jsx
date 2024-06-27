import sprite from '../../assets/sprite.svg';
import { AddBtn, IconAdd, WrapperIcon } from './BtnPlus.styled';

export const BtnPlus = ({ children, onClick }) => {
  return (
    <AddBtn type="button" onClick={onClick}>
      <WrapperIcon>
        <IconAdd>
          <use href={sprite + '#icon-plus'} />
        </IconAdd>
      </WrapperIcon>
      {children}
    </AddBtn>
  );
};
