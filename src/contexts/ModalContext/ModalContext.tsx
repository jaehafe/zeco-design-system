import React, { PropsWithChildren, createContext, useState } from "react";

export interface ModalContextType {
  modals: { [modalId: string]: boolean };
  modalId: string | null;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({ children }: PropsWithChildren) {
  const [modals, setModals] = useState({});
  const [modalId, setModalId] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: true });
    setModalId(modalId);
  };

  const closeModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: false });
    setModalId(null);
  };

  const closeAllModals = () => {
    setModals({});
    setModalId(null);
  };

  const modalValue = {
    modals,
    modalId,
    openModal,
    closeModal,
    closeAllModals,
  };

  return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>;
}
