import { CorrectMessage, ErrorMessage } from './Message.styled';

export const Message = ({
  isCorrect,
  correctMessage,
  hasError,
  errorMessage,
  children,
}) => {
  return (
    <div>
      {children}
      {isCorrect && <CorrectMessage>{correctMessage}</CorrectMessage>}
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
