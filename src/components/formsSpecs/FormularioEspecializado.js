import React, { useState } from "react";
import styled from "styled-components";

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
  max-width: 520px;
  width: 100%;
  padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1976d2;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #0a1446;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 4px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 12px;
  resize: vertical;
`;

const Button = styled.button`
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

export default function FormularioEspecializado({ open, onClose, paciente }) {
  const [problemaSono, setProblemaSono] = useState("");
  const [impacto, setImpacto] = useState("");
  const [tentativas, setTentativas] = useState("");
  const [expectativa, setExpectativa] = useState("");
  const [msg, setMsg] = useState("");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui você pode integrar com backend ou salvar localmente
      setMsg("Formulário enviado com sucesso!");
      setTimeout(() => {
        setMsg("");
        onClose();
      }, 1200);
    } catch (err) {
      setMsg("Erro ao enviar formulário.");
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <CloseBtn onClick={onClose} title="Fechar">×</CloseBtn>
        <Title>Formulário Especializado do Paciente</Title>
        <form onSubmit={handleSubmit}>
          <Label>Descreva seu principal problema de sono</Label>
          <Textarea value={problemaSono} onChange={e => setProblemaSono(e.target.value)} required />
          <Label>Como isso impacta seu dia a dia?</Label>
          <Textarea value={impacto} onChange={e => setImpacto(e.target.value)} required />
          <Label>O que já tentou para melhorar?</Label>
          <Textarea value={tentativas} onChange={e => setTentativas(e.target.value)} required />
          <Label>Qual sua expectativa com o tratamento?</Label>
          <Textarea value={expectativa} onChange={e => setExpectativa(e.target.value)} required />
          <Button type="submit">Enviar</Button>
        </form>
        {msg && <div style={{ marginTop: 10, color: "#1976d2" }}>{msg}</div>}
      </ModalBox>
    </Overlay>
  );
}