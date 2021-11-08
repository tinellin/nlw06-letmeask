import { Dispatch } from 'react';
import ReactModal from 'react-modal';
import { motion } from 'framer-motion';

import { AiOutlineWarning } from 'react-icons/ai';

import { modalConfigs, ModalWrapper } from './styles';

import closeImg from '../../assets/images/close.svg';
import { Button } from '../Button';

ReactModal.setAppElement(document.getElementById('root') || '');

type ModalProps = {
  openModal: boolean;
  closeModal: Dispatch<boolean>;
  resultIfCloseModal?: () => void;
};

type WarningModalProps = ModalProps & {
  title: string;
  text: string;
};

export function Modal({
  openModal,
  closeModal,
  resultIfCloseModal,
}: ModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -60 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 60 }}
    >
      <ReactModal isOpen={openModal} style={modalConfigs}>
        <ModalWrapper>
          <img src={closeImg} alt="Imagem de fechar modal" />

          <div className="close-text">
            <h1>Encerrar sala</h1>
            <span>Tem certeza que você deseja encerrar esta sala?</span>
          </div>

          <div className="buttons">
            <Button
              styles={{ color: '#737380', bgColor: '#DBDCDD' }}
              onClick={() => closeModal(false)}
            >
              Cancelar
            </Button>
            <Button
              styles={{ color: '#FEFEFE', bgColor: '#E73F5D' }}
              onClick={resultIfCloseModal}
            >
              Sim, encerrar
            </Button>
          </div>
        </ModalWrapper>
      </ReactModal>
    </motion.div>
  );
}

export function WarningModal({
  openModal,
  closeModal,
  title,
  text,
}: WarningModalProps) {
  return (
    <ReactModal isOpen={openModal} style={modalConfigs}>
      <ModalWrapper>
        <AiOutlineWarning color="#ffe04d" size="60" />

        <div className="close-text">
          <h1>{title}</h1>
          <span>{text}</span>
        </div>

        <div className="buttons">
          <Button onClick={() => closeModal(false)}>Ok</Button>
        </div>
      </ModalWrapper>
    </ReactModal>
  );
}
