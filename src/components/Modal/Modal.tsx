import React from 'react';

import Backdrop from './Backdrop';
import ModalPortal from './ModalPortal';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  backdropClosable?: boolean;
  children: React.ReactNode;
  secondModal?: boolean;

  //
  modalId?: string;
}

export default function Modal({
  isOpen = true,
  onClose,
  backdropClosable = false,
  children,
  secondModal = false,
  //
  modalId,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Backdrop onClose={onClose} backdropClosable={backdropClosable} secondModal={secondModal}>
      <ModalPortal open={isOpen}>{modalId && children}</ModalPortal>
    </Backdrop>
  );
}
