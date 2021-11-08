import { ReactNode, useState } from 'react';

import { Modal, WarningModal } from '../components/Modal';

export function useModal() {
  const [modal, setModal] = useState<ReactNode>();

  function handleOpenModal(result: any) {
    setModal(
      <Modal openModal closeModal={setModal} resultIfCloseModal={result} />
    );
  }

  function handleOpenWarningModal(title: string, text: string) {
    setModal(
      <WarningModal openModal closeModal={setModal} title={title} text={text} />
    );
  }

  return { modal, handleOpenModal, handleOpenWarningModal };
}
