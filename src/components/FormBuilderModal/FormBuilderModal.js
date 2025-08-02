import React, { useState } from "react";
import {
  Overlay,
  ModalBox,
  CloseBtn,
  Title,
  Label,
  Input,
  Select,
  Option,
  Button,
  PerguntaBox,
  PerguntaHeader,
  PerguntaRemove,
  PerguntaOpcoes,
  OpcaoInput,
  OpcaoBtn
} from "./styles";

const tipos = [
  { value: "texto", label: "Texto livre" },
  { value: "data", label: "Data" },
  { value: "radio", label: "Escolha única (radio)" },
  { value: "checkbox", label: "Múltipla escolha (checkbox)" },
  { value: "lista", label: "Lista suspensa" },
];

export default function FormBuilderModal({ open, onClose, onSave, initial }) {
  const [perguntas, setPerguntas] = useState(initial || []);
  const [novaPergunta, setNovaPergunta] = useState("");
  const [novoTipo, setNovoTipo] = useState("texto");
  const [opcoes, setOpcoes] = useState([""]);

  if (!open) return null;

  const handleAddPergunta = () => {
    if (!novaPergunta.trim()) return;
    setPerguntas(prev => [
      ...prev,
      {
        texto: novaPergunta,
        tipo: novoTipo,
        opcoes: ["radio", "checkbox", "lista"].includes(novoTipo)
          ? opcoes.filter(o => o.trim())
          : [],
      }
    ]);
    setNovaPergunta("");
    setNovoTipo("texto");
    setOpcoes([""]);
  };

  const handleRemovePergunta = idx => {
    setPerguntas(prev => prev.filter((_, i) => i !== idx));
  };

  const handleOpcaoChange = (idx, value) => {
    setOpcoes(prev => prev.map((o, i) => (i === idx ? value : o)));
  };

  const handleAddOpcao = () => {
    setOpcoes(prev => [...prev, ""]);
  };

  const handleRemoveOpcao = idx => {
    setOpcoes(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = async () => {
    try {
      await onSave(perguntas);
      onClose();
    } catch (e) {
      // Trate erro se necessário
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <CloseBtn onClick={onClose} title="Fechar">×</CloseBtn>
        <Title>Montar Formulário Especializado</Title>
        {perguntas.map((p, idx) => (
          <PerguntaBox key={idx}>
            <PerguntaHeader>
              <span>
                <b>{idx + 1}.</b> {p.texto} <i>({tipos.find(t => t.value === p.tipo)?.label})</i>
              </span>
              <PerguntaRemove onClick={() => handleRemovePergunta(idx)} title="Remover">🗑️</PerguntaRemove>
            </PerguntaHeader>
            {["radio", "checkbox", "lista"].includes(p.tipo) && (
              <PerguntaOpcoes>
                {p.opcoes.map((op, i) => (
                  <span key={i} style={{ marginRight: 8, color: "#1976d2" }}>• {op}</span>
                ))}
              </PerguntaOpcoes>
            )}
          </PerguntaBox>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleAddPergunta();
          }}
        >
          <Label>Pergunta</Label>
          <Input
            value={novaPergunta}
            onChange={e => setNovaPergunta(e.target.value)}
            required
          />
          <Label>Tipo de resposta</Label>
          <Select
            value={novoTipo}
            onChange={e => setNovoTipo(e.target.value)}
          >
            {tipos.map(t => (
              <Option key={t.value} value={t.value}>{t.label}</Option>
            ))}
          </Select>
          {["radio", "checkbox", "lista"].includes(novoTipo) && (
            <PerguntaOpcoes>
              <Label>Opções</Label>
              {opcoes.map((op, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
                  <OpcaoInput
                    value={op}
                    onChange={e => handleOpcaoChange(i, e.target.value)}
                    required
                  />
                  <OpcaoBtn type="button" onClick={() => handleRemoveOpcao(i)} title="Remover opção">✖</OpcaoBtn>
                </div>
              ))}
              <OpcaoBtn type="button" onClick={handleAddOpcao}>Adicionar opção</OpcaoBtn>
            </PerguntaOpcoes>
          )}
          <Button type="submit" style={{ marginTop: 12 }}>Adicionar Pergunta</Button>
        </form>
        <Button onClick={handleSave} style={{ marginTop: 18, background: "#43a047" }}>
          Salvar Formulário
        </Button>
      </ModalBox>
    </Overlay>
  );
}