import ReactModal from 'react-modal';
import sprite from '../../assets/sprite.svg';
import { Backdrop, BtnClose, IconCross, ModalStyled } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyled {...props}>{children}</ModalStyled>
      )}
      overlayElement={(props, contentElement) => (
        <Backdrop {...props}>{contentElement}</Backdrop>
      )}
    >
      <BtnClose type="button" onClick={onClose} aria-label="close modal window">
        <IconCross>
          <use href={sprite + '#icon-close'} />
        </IconCross>
      </BtnClose>
      {children}
    </ReactModal>
  );
};
