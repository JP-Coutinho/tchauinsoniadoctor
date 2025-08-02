import React, { useState } from "react";
import Menu from "../../components/Menu";
import Calendar from "../../components/Calendar/Calendar";
import ConsultaModal from "../../components/ConsultaModal/ConsultaModal";
import {
  Container,
  Title,
  FlexRow,
  Card,
  CardPaciente,
  CardInfo,
  CardTitle,
  CardSubtitle,
  CardActions,
  Input,
  Button,
  PersonalNoteArea,
  PersonalNoteTitle,
  PersonalNoteInput,
  PersonalNoteList,
  PersonalNoteItem,
} from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import pacientes from "../pacientesData";

// Extrai todas as consultas agendadas dos pacientes
function getConsultasFromPacientes(pacientes) {
  const consultas = [];
  pacientes.forEach((p, idx) => {
    if (Array.isArray(p.orientacoesMedicas)) {
      p.orientacoesMedicas.forEach((c, i) => {
        if (c.dataProximaVisita) {
          consultas.push({
            id: `${idx}-${i}`,
            paciente: p.nome,
            pacienteId: p.id ?? idx,
            data: c.dataProximaVisita,
            hora: c.hora || "", // ajuste se houver campo de hora
            motivo: c.queixa || "Consulta",
            observacao: c.orientacao || "",
          });
        }
      });
    }
  });
  return consultas;
}

// Exemplo de dados de consultas (substitua por dados reais do backend)
const consultasExemplo = getConsultasFromPacientes(pacientes);

function getConsultasPorData(consultas, data) {
  return consultas.filter((c) => c.data === data);
}

function getConsultasProximas(consultas, dataAtual) {
  // Próximas 7 dias
  const atual = new Date(dataAtual);
  return consultas.filter((c) => {
    const dataC = new Date(c.data);
    return dataC > atual && dataC - atual <= 7 * 24 * 60 * 60 * 1000;
  });
}

const Agenda = () => {
  // Recupera o nome do usuário do localStorage (ajuste conforme seu fluxo)
  const userName = localStorage.getItem("userName");

  const hoje = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(hoje);
  const [personalNotes, setPersonalNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [modalConsulta, setModalConsulta] = useState(null);

  const navigate = useNavigate();

  const consultasReais = getConsultasFromPacientes(pacientes);

  const consultasHoje = getConsultasPorData(consultasReais, selectedDate);
  const consultasProximas = getConsultasProximas(consultasReais, hoje);
  const diasComConsulta = consultasReais.map(c => c.data);

  const handleAddNote = async () => {
    try {
      if (!noteInput.trim()) return;
      setPersonalNotes((prev) => [
        ...prev,
        { data: selectedDate, texto: noteInput },
      ]);
      setNoteInput("");
    } catch (e) {
      // Trate erro se necessário
    }
  };

  // Quando clicar em um dia do calendário
  const handleCalendarDayClick = (dateStr) => {
    const consultas = getConsultasPorData(consultasExemplo, dateStr);
    if (consultas.length > 0) {
      setModalConsulta({ data: dateStr, consultas });
    }
    setSelectedDate(dateStr);
  };

  return (
    <>
      <Menu />
      <Container>
        <Title>Minha Agenda</Title>
        <FlexRow>
          <div style={{ flex: 1, minWidth: 320, marginRight: 32 }}>
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={handleCalendarDayClick}
              markedDates={diasComConsulta}
            />
            <PersonalNoteArea>
              <PersonalNoteTitle>Adicionar nota pessoal para o dia:</PersonalNoteTitle>
              <PersonalNoteInput
                as="textarea"
                rows={2}
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Digite um lembrete ou anotação pessoal..."
              />
              <Button style={{ marginTop: 8 }} onClick={handleAddNote}>
                Adicionar nota
              </Button>
              <PersonalNoteList>
                {personalNotes
                  .filter((n) => n.data === selectedDate)
                  .map((n, i) => (
                    <PersonalNoteItem key={i}>{n.texto}</PersonalNoteItem>
                  ))}
              </PersonalNoteList>
            </PersonalNoteArea>
          </div>
          <div style={{ flex: 2, minWidth: 320 }}>
            <Card>
              <CardTitle>Consultas marcadas para {selectedDate.split("-").reverse().join("/")}</CardTitle>
              {consultasHoje.length === 0 && (
                <CardSubtitle>Nenhuma consulta marcada para este dia.</CardSubtitle>
              )}
              {consultasHoje.map((c) => (
                <CardPaciente key={c.id}>
                  <CardInfo>
                    <b>Paciente:</b>{" "}
                    <a
                      href="#"
                      style={{ color: "#1976d2", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/paciente/${c.pacienteId}`);
                      }}
                    >
                      {c.paciente}
                    </a>
                  </CardInfo>
                  <CardInfo>
                    <b>Horário:</b> {c.hora}
                  </CardInfo>
                  <CardInfo>
                    <b>Motivo:</b> {c.motivo}
                  </CardInfo>
                  {c.observacao && (
                    <CardInfo>
                      <b>Obs.:</b> {c.observacao}
                    </CardInfo>
                  )}
                  <CardActions>
                    {/* Aqui você pode adicionar botões para editar/remover/abrir prontuário */}
                  </CardActions>
                </CardPaciente>
              ))}
            </Card>
            <Card style={{ marginTop: 24 }}>
              <CardTitle>Consultas para os próximos 7 dias</CardTitle>
              {consultasProximas.length === 0 && (
                <CardSubtitle>Nenhuma consulta agendada para os próximos dias.</CardSubtitle>
              )}
              {consultasProximas.map((c) => (
                <CardPaciente key={c.id}>
                  <CardInfo>
                    <b>Paciente:</b>{" "}
                    <a
                      href="#"
                      style={{ color: "#1976d2", textDecoration: "underline" }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/paciente/${c.pacienteId}`);
                      }}
                    >
                      {c.paciente}
                    </a>
                  </CardInfo>
                  <CardInfo>
                    <b>Data:</b> {c.data.split("-").reverse().join("/")}
                  </CardInfo>
                  <CardInfo>
                    <b>Horário:</b> {c.hora}
                  </CardInfo>
                  <CardInfo>
                    <b>Motivo:</b> {c.motivo}
                  </CardInfo>
                  {c.observacao && (
                    <CardInfo>
                      <b>Obs.:</b> {c.observacao}
                    </CardInfo>
                  )}
                  <CardActions>
                    {/* Aqui você pode adicionar botões para editar/remover/abrir prontuário */}
                  </CardActions>
                </CardPaciente>
              ))}
            </Card>
          </div>
        </FlexRow>
        <ConsultaModal
          open={!!modalConsulta}
          onClose={() => setModalConsulta(null)}
          data={modalConsulta?.data}
          consultas={modalConsulta?.consultas}
        />
      </Container>
    </>
  );
};

export default Agenda;