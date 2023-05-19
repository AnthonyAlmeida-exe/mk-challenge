import { ReactNode, useState } from "react";

import * as S from "./styles";
import { Divider } from "../Divider";
import { Button } from "../Button";
import ReactModal from "react-modal";
import { CSSProperties } from "styled-components";

interface ModalProps {
  title: string;
  children: ReactNode;
  cta: () => void;
  modalIsOpen: boolean;
  closeModal: () => void;
}
interface ModalStyles {
  overlay: CSSProperties;
  content: CSSProperties;
}

const customStyles: ModalStyles = {
  overlay: {
    backgroundColor: "rgba(32, 82, 102, 0.77)",
    zIndex: 1000,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    maxWidth: "451px",
    maxHeight: "200px",
    width: "100%",
    height: "100%",
    padding: "20px 25px ",
    borderRadius: "20px",
  },
};

// Componente do modal
export function Modal({
  title,
  cta,
  children,
  modalIsOpen,
  closeModal,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Exemplo Modal"
    >
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.FakeBorder />
      </S.TitleWrapper>
      {children}
      <Divider />
      <S.CtasWrapper>
        <Button title={"Voltar"} modifier="link" onClick={closeModal} />
        <Button
          title={"Excluir"}
          onClick={() => {
            cta();
            closeModal();
          }}
        />
      </S.CtasWrapper>
    </ReactModal>
  );
}
