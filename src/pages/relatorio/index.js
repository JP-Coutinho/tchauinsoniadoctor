import React, { useMemo, useState } from "react";
import Menu from "../../components/Menu";
import pacientes from "../pacientesData";
import {
  Container,
  Title,
  DashGrid,
  Card,
  ChartTitle,
} from "./styles";
import FiltrosRelatorio from "../../components/FiltrosRelatorio/FiltrosRelatorio";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

// Utilitários para BI
function getIMC(p) {
  if (!p.altura || !p.peso) return 0;
  return +(p.peso / (p.altura * p.altura)).toFixed(1);
}

function getFaixaEtaria(idade) {
  if (idade < 18) return "<18";
  if (idade <= 30) return "18-30";
  if (idade <= 45) return "31-45";
  if (idade <= 60) return "46-60";
  return ">60";
}

function getFaixaIMC(imc) {
  if (imc < 18.5) return "Abaixo";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

function getHumorDistribuicao(pacientes) {
  const stats = { feliz: 0, neutro: 0, triste: 0 };
  pacientes.forEach((p) => {
    if (Array.isArray(p.historicoSono)) {
      p.historicoSono.forEach((h) => {
        if (stats[h.humor] !== undefined) stats[h.humor]++;
      });
    }
  });
  return [
    { name: "Feliz", value: stats.feliz, color: "#43a047" },
    { name: "Neutro", value: stats.neutro, color: "#ffb300" },
    { name: "Triste", value: stats.triste, color: "#e53935" },
  ];
}

function getIdadeDistribuicao(pacientes) {
  const faixas = [
    { faixa: "<18", count: 0 },
    { faixa: "18-30", count: 0 },
    { faixa: "31-45", count: 0 },
    { faixa: "46-60", count: 0 },
    { faixa: ">60", count: 0 },
  ];
  pacientes.forEach((p) => {
    const f = getFaixaEtaria(p.idade);
    const idx = faixas.findIndex((x) => x.faixa === f);
    if (idx >= 0) faixas[idx].count++;
  });
  return faixas;
}

function getMediaSono(pacientes) {
  return pacientes.map((p) => {
    let total = 0;
    let count = 0;
    if (Array.isArray(p.historicoSono)) {
      p.historicoSono.forEach((h) => {
        if (h.dormir && h.acordar) {
          const dormirMin =
            parseInt(h.dormir.split(":")[0]) * 60 +
            parseInt(h.dormir.split(":")[1]);
          const acordarMin =
            parseInt(h.acordar.split(":")[0]) * 60 +
            parseInt(h.acordar.split(":")[1]);
          let diff = acordarMin - dormirMin;
          if (diff <= 0) diff += 24 * 60;
          total += diff / 60;
          count++;
        }
      });
    }
    return {
      nome: p.nome,
      media: count ? +(total / count).toFixed(2) : 0,
    };
  });
}

function getConsultasPorMes(pacientes) {
  const meses = {};
  pacientes.forEach((p) => {
    if (Array.isArray(p.orientacoesMedicas)) {
      p.orientacoesMedicas.forEach((c) => {
        if (c.dataProximaVisita) {
          const [ano, mes] = c.dataProximaVisita.split("-");
          const key = `${mes}/${ano}`;
          meses[key] = (meses[key] || 0) + 1;
        }
      });
    }
  });
  return Object.entries(meses)
    .map(([mes, count]) => ({ mes, count }))
    .sort((a, b) => {
      const [ma, aa] = a.mes.split("/").map(Number);
      const [mb, ab] = b.mes.split("/").map(Number);
      return aa !== ab ? aa - ab : ma - mb;
    });
}

// Dispersão de horas dormidas por paciente (linha)
function getDispersaoSono(pacientes) {
  const nomes = pacientes.map((p) => p.nome);
  const maxDias = Math.max(
    ...pacientes.map((p) => (p.historicoSono ? p.historicoSono.length : 0))
  );
  const data = [];
  for (let i = 0; i < maxDias; i++) {
    const row = { dia: `Dia ${i + 1}` };
    pacientes.forEach((p) => {
      if (p.historicoSono && p.historicoSono[p.historicoSono.length - 1 - i]) {
        const h = p.historicoSono[p.historicoSono.length - 1 - i];
        if (h.dormir && h.acordar) {
          const dormirMin =
            parseInt(h.dormir.split(":")[0]) * 60 +
            parseInt(h.dormir.split(":")[1]);
          const acordarMin =
            parseInt(h.acordar.split(":")[0]) * 60 +
            parseInt(h.acordar.split(":")[1]);
          let diff = acordarMin - dormirMin;
          if (diff <= 0) diff += 24 * 60;
          row[p.nome] = +(diff / 60).toFixed(2);
        }
      }
    });
    data.push(row);
  }
  return { data: data.reverse(), nomes };
}

const COLORS = [
  "#43a047",
  "#ffb300",
  "#e53935",
  "#1976d2",
  "#8e24aa",
  "#00bcd4",
  "#f06292",
  "#ffa726",
];

const faixasEtarias = [
  "<18",
  "18-30",
  "31-45",
  "46-60",
  ">60"
];

const faixasIMC = [
  "Abaixo",
  "Normal",
  "Sobrepeso",
  "Obesidade"
];

const Relatorio = () => {
  // Filtros globais
  const [filtroPacientes, setFiltroPacientes] = useState([]);
  const [filtroFaixaEtaria, setFiltroFaixaEtaria] = useState([]);
  const [filtroIMC, setFiltroIMC] = useState([]);
  const [filtroDataVisita, setFiltroDataVisita] = useState({ de: "", ate: "" });
  const [filtroUltimoAcesso, setFiltroUltimoAcesso] = useState({ de: "", ate: "" });

  // Lista de pacientes para filtro (garante id único)
  const listaPacientes = useMemo(
    () =>
      pacientes.map((p, idx) => ({
        id: p.id !== undefined && p.id !== null ? p.id : idx,
        nome: p.nome,
        idade: p.idade,
        imc: getIMC(p),
        ultimaEntrada: p.ultimaEntrada,
        orientacoesMedicas: p.orientacoesMedicas,
      })),
    [pacientes]
  );
  
  const userName = localStorage.getItem("userName");
  const isMobile = window.innerWidth <= 600;

  // Função utilitária para buscar pacientes filtrados corretamente
  const getPacientesFiltrados = () => {
    let filtrados = [...pacientes];

    // Filtro por paciente
    if (filtroPacientes.length) {
      filtrados = filtrados.filter((p, idx) =>
        filtroPacientes.includes(p.id !== undefined && p.id !== null ? p.id : idx)
      );
    }

    // Filtro por faixa etária
    if (filtroFaixaEtaria.length) {
      filtrados = filtrados.filter((p) =>
        filtroFaixaEtaria.includes(getFaixaEtaria(p.idade))
      );
    }

    // Filtro por IMC
    if (filtroIMC.length) {
      filtrados = filtrados.filter((p) =>
        filtroIMC.includes(getFaixaIMC(getIMC(p)))
      );
    }

    // Filtro por data da visita (dataProximaVisita de qualquer orientação)
    if (filtroDataVisita.de || filtroDataVisita.ate) {
      filtrados = filtrados.filter((p) =>
        p.orientacoesMedicas &&
        p.orientacoesMedicas.some((o) => {
          if (!o.dataProximaVisita) return false;
          if (filtroDataVisita.de && o.dataProximaVisita < filtroDataVisita.de)
            return false;
          if (filtroDataVisita.ate && o.dataProximaVisita > filtroDataVisita.ate)
            return false;
          return true;
        })
      );
    }

    // Filtro por último acesso ao sistema
    if (filtroUltimoAcesso.de || filtroUltimoAcesso.ate) {
      filtrados = filtrados.filter((p) => {
        if (!p.ultimaEntrada) return false;
        if (filtroUltimoAcesso.de && p.ultimaEntrada < filtroUltimoAcesso.de)
          return false;
        if (filtroUltimoAcesso.ate && p.ultimaEntrada > filtroUltimoAcesso.ate)
          return false;
        return true;
      });
    }

    return filtrados;
  };

  // Dados filtrados
  const humorData = useMemo(() => getHumorDistribuicao(getPacientesFiltrados()), [filtroPacientes, filtroFaixaEtaria, filtroIMC, filtroDataVisita, filtroUltimoAcesso]);
  const idadeData = useMemo(() => getIdadeDistribuicao(getPacientesFiltrados()), [filtroPacientes, filtroFaixaEtaria, filtroIMC, filtroDataVisita, filtroUltimoAcesso]);
  const sonoData = useMemo(() => getMediaSono(getPacientesFiltrados()), [filtroPacientes, filtroFaixaEtaria, filtroIMC, filtroDataVisita, filtroUltimoAcesso]);
  const consultasMes = useMemo(() => getConsultasPorMes(getPacientesFiltrados()), [filtroPacientes, filtroFaixaEtaria, filtroIMC, filtroDataVisita, filtroUltimoAcesso]);
  const dispersaoSono = useMemo(() => getDispersaoSono(getPacientesFiltrados()), [filtroPacientes, filtroFaixaEtaria, filtroIMC, filtroDataVisita, filtroUltimoAcesso]);

  return (
    <>
      <Menu />
      <Container>
        <Title>Relatórios e BI</Title>
        <FiltrosRelatorio
          listaPacientes={listaPacientes}
          filtroPacientes={filtroPacientes}
          setFiltroPacientes={setFiltroPacientes}
          filtroFaixaEtaria={filtroFaixaEtaria}
          setFiltroFaixaEtaria={setFiltroFaixaEtaria}
          filtroIMC={filtroIMC}
          setFiltroIMC={setFiltroIMC}
          filtroDataVisita={filtroDataVisita}
          setFiltroDataVisita={setFiltroDataVisita}
          filtroUltimoAcesso={filtroUltimoAcesso}
          setFiltroUltimoAcesso={setFiltroUltimoAcesso}
          faixasEtarias={faixasEtarias}
          faixasIMC={faixasIMC}
        />
        <DashGrid id="relatorio-pdf-area">
          <Card>
            <ChartTitle>Distribuição do Humor ao Acordar</ChartTitle>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={humorData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {humorData.map((entry, idx) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <ChartTitle>Distribuição por Faixa Etária</ChartTitle>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={idadeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="faixa" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <ChartTitle>Média de Horas de Sono por Paciente</ChartTitle>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={sonoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="media" fill="#43a047" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <ChartTitle>Consultas Agendadas por Mês</ChartTitle>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={consultasMes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8e24aa" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <ChartTitle>Dispersão de Horas Dormidas (Selecione pacientes)</ChartTitle>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={dispersaoSono.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis domain={isMobile ? [0, 12] : [0, 'auto']} /> {/* Mantém o eixo Y de 0 a 12 */}
                <Tooltip />
                {dispersaoSono.nomes.map((nome, idx) => (
                  <Line
                    key={nome}
                    type="monotone"
                    dataKey={nome}
                    stroke={COLORS[idx % COLORS.length]}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </DashGrid>
      </Container>
    </>
  );
};

export default Relatorio;