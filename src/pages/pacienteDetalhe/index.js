import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pacientes from "../pacientesData";
import Menu from "../../components/Menu";
import AnamneseModal from "../../components/anamneseModal/AnamneseModal";
import FormBuilderModal from "../../components/FormBuilderModal/FormBuilderModal";
import Calendar from "../../components/Calendar/Calendar";
import {
  Container,
  Grid,
  Card,
  Title,
  Label,
  Info,
  ChartArea,
  ChartTitle,
  InputArea,
  Input,
  Button,
  List,
  ListItem,
  PieLegend,
  PieColor,
  FlexRow,
} from "./styles";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// --- Chart helpers ---
function getHumorStatsArray(historicoSono) {
  const stats = [
    { name: "Feliz", value: 0, color: "#43a047", key: "feliz" },
    { name: "Neutro", value: 0, color: "#ffb300", key: "neutro" },
    { name: "Triste", value: 0, color: "#e53935", key: "triste" },
  ];
  historicoSono.forEach((h) => {
    const idx = stats.findIndex((s) => s.key === h.humor);
    if (idx !== -1) stats[idx].value += 1;
  });
  return stats;
}
function getSleepData(historicoSono) {
  return historicoSono
    .slice()
    .reverse()
    .map((h, i) => {
      const dormirMin =
        parseInt(h.dormir.split(":")[0]) * 60 + parseInt(h.dormir.split(":")[1]);
      const acordarMin =
        parseInt(h.acordar.split(":")[0]) * 60 + parseInt(h.acordar.split(":")[1]);
      let diff = acordarMin - dormirMin;
      if (diff <= 0) diff += 24 * 60;
      return {
        dia: `Dia ${i + 1}`,
        horas: +(diff / 60).toFixed(2),
      };
    });
}

const COLORS = ["#43a047", "#ffb300", "#e53935"];

// --- Página Detalhe ---
const PacienteDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const paciente = useMemo(
    () =>
      typeof Number(id) === "number" && !isNaN(Number(id))
        ? pacientes[Number(id)]
        : pacientes.find((p) => p.nome === id || p.id === id),
    [id]
  );
  const [novaOrientacao, setNovaOrientacao] = useState("");
  const [historico, setHistorico] = useState(
    paciente ? paciente.orientacoesMedicas : []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [formBuilderOpen, setFormBuilderOpen] = useState(false);
  const [formularioEspecializado, setFormularioEspecializado] = useState(
    paciente?.formularioEspecializado || []
  );

  // Agenda states
  const [agendaData, setAgendaData] = useState("");
  const [agendaHora, setAgendaHora] = useState("");
  const [agendaMsg, setAgendaMsg] = useState("");
  const [showHora, setShowHora] = useState(false);

  if (!paciente) return <div>Paciente não encontrado.</div>;

  // Dashboard data
  const humorStatsArr = getHumorStatsArray(paciente.historicoSono);
  const sleepData = getSleepData(paciente.historicoSono);

  // Adicionar nova orientação
  const handleAddOrientacao = () => {
    if (!novaOrientacao.trim()) return;
    setHistorico((prev) => [
      ...prev,
      {
        dataVisita: new Date().toISOString().slice(0, 10),
        queixa: "—",
        orientacao: novaOrientacao,
        dataProximaVisita: "",
      },
    ]);
    setNovaOrientacao("");
  };

  // Salvar formulário especializado
  const handleSaveFormulario = async (perguntas) => {
    try {
      setFormularioEspecializado(perguntas);
      // Aqui você pode salvar no backend ou atualizar o paciente
    } catch (e) {
      // Trate erro se necessário
    }
  };

  // Marcar consulta
  const handleMarcarConsulta = async () => {
    try {
      if (!agendaData) {
        setAgendaMsg("Escolha uma data.");
        return;
      }
      if (showHora && !agendaHora) {
        setAgendaMsg("Escolha a hora.");
        return;
      }
      setAgendaMsg("Consulta agendada!");
      setTimeout(() => {
        setAgendaMsg("");
        setAgendaData("");
        setAgendaHora("");
        setShowHora(false);
      }, 1200);
      // Aqui você pode salvar no backend
    } catch (e) {
      setAgendaMsg("Erro ao agendar.");
    }
  };

  // IMC
  const imc = (paciente.peso / (paciente.altura * paciente.altura)).toFixed(1);

  return (
    <>
      <Menu userName="Médico" />
      <Container>
        <Button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
          ← Voltar para lista
        </Button>
        <Grid>
          {/* Perfil */}
          <Card>
            <Title>Perfil do Paciente</Title>
            <Info>
              <b>Nome:</b> {paciente.nome}
              <br />
              <b>Email:</b> {paciente.email || "-"}
              <br />
              <b>Idade:</b> {paciente.idade} anos
              <br />
              <b>Peso:</b> {paciente.peso} kg
              <br />
              <b>IMC:</b> {imc}
            </Info>
          </Card>
          {/* Histórico de Atendimentos */}
          <Card>
            <Title>Histórico de Atendimentos</Title>
            <List>
              {historico.map((h, i) => (
                <ListItem key={i}>
                  Consulta - {h.dataVisita && h.dataVisita.split("-").reverse().join("/")}
                  <br />
                  <span style={{ color: "#1976d2" }}>
                    Recomendação: {h.orientacao}
                  </span>
                  <br />
                  <a
                    href="#"
                    style={{ color: "#1976d2", textDecoration: "underline", fontSize: "0.97em" }}
                    onClick={e => {
                      e.preventDefault();
                      setModalOpen(true);
                    }}
                  >
                    Ver anamnese completa
                  </a>
                </ListItem>
              ))}
            </List>
          </Card>
          {/* Pie Chart */}
          <Card>
            <Title>Distribuição do humor ao acordar</Title>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={humorStatsArr}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {humorStatsArr.map((entry, idx) => (
                    <Cell key={entry.key} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="middle"
                  align="right"
                  layout="vertical"
                  iconType="circle"
                  formatter={(value, entry, i) => (
                    <span style={{ color: humorStatsArr[i]?.color }}>
                      {value}: {humorStatsArr[i]?.value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
            <PieLegend>
              <span>
                <PieColor color="#43a047" />
                Feliz: {humorStatsArr[0].value}
              </span>
              <span>
                <PieColor color="#ffb300" />
                Neutro: {humorStatsArr[1].value}
              </span>
              <span>
                <PieColor color="#e53935" />
                Triste: {humorStatsArr[2].value}
              </span>
            </PieLegend>
          </Card>
        </Grid>
        {/* Gráfico de linha */}
        <ChartArea>
          <ChartTitle>Horas de Sono nos Últimos 30 Dias</ChartTitle>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" hide />
              <YAxis domain={[0, 10]} />
              <Tooltip
                formatter={(value) => `${value} horas`}
                labelFormatter={(label) => label}
              />
              <Line
                type="monotone"
                dataKey="horas"
                stroke="#1976d2"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartArea>
        {/* Card de orientação, agenda e formulário especializado ocupa toda a linha */}
        <Card style={{ marginTop: 24, width: "100%" }}>
          <FlexRow>
            {/* Orientação */}
            <div style={{ flex: 1, minWidth: 260, marginRight: 32, display: "flex", flexDirection: "column", height: "100%" }}>
              <Label>Registrar nova orientação para o paciente:</Label>
              <Input
                value={novaOrientacao}
                onChange={(e) => setNovaOrientacao(e.target.value)}
                placeholder="Digite a orientação médica para o paciente..."
                style={{ minHeight: 100, height: "100%" }}
              />
              <Button onClick={handleAddOrientacao} style={{ marginTop: 8, alignSelf: "flex-start" }}>
                Registrar Orientação
              </Button>
            </div>
            {/* Agenda */}
            <div style={{ flex: 1, minWidth: 260, marginRight: 32, display: "flex", flexDirection: "column", height: "100%" }}>
              <Label>Marcar nova consulta:</Label>
              <Calendar
                selectedDate={agendaData}
                onSelectDate={(date) => {
                  setAgendaData(date);
                  setShowHora(false);
                  setAgendaHora("");
                }}
                onDoubleClickDay={() => setShowHora(true)}
              />
              {showHora && (
                <Input
                  as="input"
                  type="time"
                  value={agendaHora}
                  onChange={e => setAgendaHora(e.target.value)}
                  style={{ marginTop: 8 }}
                />
              )}
              <Button style={{ marginTop: 8, alignSelf: "flex-start" }} onClick={handleMarcarConsulta}>
                Marcar
              </Button>
              {agendaMsg && (
                <div style={{ color: "#1976d2", marginTop: 6 }}>{agendaMsg}</div>
              )}
              <div style={{ fontSize: "0.93em", color: "#888", marginTop: 6 }}>
                Dê dois cliques em um dia para escolher a hora
              </div>
            </div>
            {/* Formulário especializado */}
            <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", height: "100%" }}>
              <Label>Montar formulário especializado:</Label>
              <div style={{ fontSize: "0.97em", color: "#444", marginBottom: 8 }}>
                Crie perguntas personalizadas para o paciente responder antes da próxima consulta. Você pode escolher o tipo de resposta (texto, data, múltipla escolha, etc).
              </div>
              <Button onClick={() => setFormBuilderOpen(true)} style={{ alignSelf: "flex-start" }}>
                Montar formulário
              </Button>
            </div>
          </FlexRow>
        </Card>
        <FormBuilderModal
          open={formBuilderOpen}
          onClose={() => setFormBuilderOpen(false)}
          onSave={handleSaveFormulario}
          initial={formularioEspecializado}
        />
        <AnamneseModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          anamnese={paciente.anamneseDetail}
        />
      </Container>
    </>
  );
};

export default PacienteDetalhe;