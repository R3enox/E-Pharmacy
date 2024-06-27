import {
  TextPlaceholder,
  WrapperContent,
  WrapperPlaceholder,
} from './Placeholder.styled';

export const Placeholder = ({ children }) => {
  return (
    <WrapperPlaceholder>
      <WrapperContent>
        <TextPlaceholder>{children}</TextPlaceholder>
      </WrapperContent>
    </WrapperPlaceholder>
  );
};
