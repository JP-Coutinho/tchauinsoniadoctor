import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 540px;
  width: 100%;
  padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1976d2;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: #0a1446;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 12px;
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 12px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;

export const PerguntaBox = styled.div`
  background: #f5faff;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 10px;
`;

export const PerguntaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PerguntaRemove = styled.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 1.2em;
  cursor: pointer;
`;

export const PerguntaOpcoes = styled.div`
  margin-left: 18px;
  margin-bottom: 6px;
`;

export const OpcaoInput = styled.input`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1em;
  padding: 4px 8px;
  margin-right: 6px;
`;

export const OpcaoBtn = styled.button`
  background: #eee;
  border: none;
  border-radius: 6px;
  color: #1976d2;
  font-size: 1em;
  margin-left: 4px;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: #e3f2fd;
  }
`;