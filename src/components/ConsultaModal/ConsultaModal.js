import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 420px;
  width: 100%;
  padding: 32px 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const ModalButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background: #0056b3;
  }
`;

const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalActions>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
          <ModalButton onClick={onConfirm}>Confirm</ModalButton>
        </ModalActions>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;