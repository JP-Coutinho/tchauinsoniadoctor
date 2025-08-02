import React from "react";
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
  max-width: 500px;
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

const Section = styled.div`
  margin-bottom: 14px;
`;

const Label = styled.div`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 2px;
`;

const Text = styled.div`
  color: #222;
  margin-bottom: 6px;
`;

const FormTitle = styled.h3`
  font-size: 1.05rem;
  color: #0a1446;
  margin: 16px 0 8px 0;
`;

export default function AnamneseModal({ open, onClose, anamnese }) {
  if (!open || !anamnese) return null;
  return (
    <Overlay>
      <ModalBox>
        <CloseBtn onClick={onClose} title="Fechar">×</CloseBtn>
        <Title>Anamnese Completa</Title>
        <Section>
          <Label>Resumo:</Label>
          <Text>{anamnese.resumo}</Text>
        </Section>
        <Section>
          <Label>Antecedentes:</Label>
          <Text>{anamnese.antecedentes}</Text>
        </Section>
        <Section>
          <Label>Hábitos:</Label>
          <Text>{anamnese.habitos}</Text>
        </Section>
        <Section>
          <Label>Avaliação Psicológica:</Label>
          <Text>{anamnese.avaliacaoPsicologica}</Text>
        </Section>
        <Section>
          <Label>Exame Físico:</Label>
          <Text>{anamnese.exameFisico}</Text>
        </Section>
        <FormTitle>Formulário Respondido pelo Paciente</FormTitle>
        <Section>
          <Label>Problema de Sono:</Label>
          <Text>{anamnese.formulario.problemaSono}</Text>
        </Section>
        <Section>
          <Label>Impacto:</Label>
          <Text>{anamnese.formulario.impacto}</Text>
        </Section>
        <Section>
          <Label>Tentativas:</Label>
          <Text>{anamnese.formulario.tentativas}</Text>
        </Section>
        <Section>
          <Label>Expectativa:</Label>
          <Text>{anamnese.formulario.expectativa}</Text>
        </Section>
      </ModalBox>
    </Overlay>
  );
}