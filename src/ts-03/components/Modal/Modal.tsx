import { Component, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { ModalBox, Overlay } from './Modal.styled';
import { IModalProps } from '../../types/interfaces';

class Modal extends Component<IModalProps> {
  componentDidMount(): void {
    window.addEventListener('keydown', this.handleEscDown);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleEscDown);
  }

  handleEscDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { children } = this.props;
    const modalRoot = document.querySelector<HTMLElement>('#modal-root');

    if (!modalRoot) return null;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>{children}</ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
