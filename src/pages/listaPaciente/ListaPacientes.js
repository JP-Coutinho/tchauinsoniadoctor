import React, { useState } from 'react';
import pacientes from '../pacientesData';
import Menu from '../../components/Menu';
import { Link } from "react-router-dom";
import {
  PageContainer,
  Title,
  CardsGrid,
  PacienteCard,
  PacienteNome,
  PacienteInfo,
  PacienteLink,
  PacienteAvatar,
  PacienteDados,
  PacienteLinha,
  SearchBarContainer,
  SearchInput,
  FiltrosContainer,
  FiltroLabel,
  FiltroSelect,
  FiltroInput,
  FiltroGroup,
  AccordionContainer,
  AccordionButton,
  AccordionContent,
  FiltroInputData
} from './styles';

// Função para calcular IMC
function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(1);
}

// Função para calcular média de horas dormidas nos últimos 30 dias
function calcularMediaHorasDormidas(historicoSono) {
  if (!historicoSono || historicoSono.length === 0) return '-';
  let totalMinutos = 0;
  historicoSono.forEach(({ dormir, acordar }) => {
    const [hDormir, mDormir] = dormir.split(':').map(Number);
    const [hAcordar, mAcordar] = acordar.split(':').map(Number);
    let minutosDormir = hDormir * 60 + mDormir;
    let minutosAcordar = hAcordar * 60 + mAcordar;
    // Se acordou no dia seguinte
    if (minutosAcordar <= minutosDormir) {
      minutosAcordar += 24 * 60;
    }
    totalMinutos += (minutosAcordar - minutosDormir);
  });
  const mediaMinutos = totalMinutos / historicoSono.length;
  const horas = Math.floor(mediaMinutos / 60);
  const minutos = Math.round(mediaMinutos % 60);
  return Number.isNaN(horas) ? '-' : `${horas}h${minutos > 0 ? ` ${minutos}min` : ''}`;
}

// Função para classificar IMC em graus
function grauIMC(imc) {
  imc = parseFloat(imc);
  if (imc < 18.5) return 'Baixo';
  if (imc < 25) return 'Normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade I';
  if (imc < 40) return 'Obesidade II';
  return 'Obesidade III';
}

// Função para formatar data para dd/MM/yyyy
function formatarDataBR(dataISO) {
  if (!dataISO) return '-';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

const ListaPacientes = ({ userName }) => {
  const [busca, setBusca] = useState('');
  const [idadeMin, setIdadeMin] = useState('');
  const [idadeMax, setIdadeMax] = useState('');
  const [imcFiltro, setImcFiltro] = useState('');
  const [mediaHorasFiltro, setMediaHorasFiltro] = useState('');
  const [ordem, setOrdem] = useState('');
  const [filtrosOpen, setFiltrosOpen] = useState(false);
  const [dataEntradaInicio, setDataEntradaInicio] = useState('');
  const [dataEntradaFim, setDataEntradaFim] = useState('');

  // Filtro principal
  let pacientesFiltrados = pacientes.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(busca.toLowerCase());
    const idadeOk =
      (!idadeMin || p.idade >= Number(idadeMin)) &&
      (!idadeMax || p.idade <= Number(idadeMax));
    const imc = calcularIMC(p.peso, p.altura);
    const grau = grauIMC(imc);
    const imcOk = !imcFiltro || grau === imcFiltro;
    const mediaHoras = calcularMediaHorasDormidas(p.historicoSono);
    const mediaHorasNum = typeof mediaHoras === 'string' && mediaHoras !== '-' ? parseFloat(mediaHoras) : null;
    const mediaOk = !mediaHorasFiltro || (mediaHorasNum && mediaHorasNum >= Number(mediaHorasFiltro));
    // Filtro de range de datas
    let dataOk = true;
    if (dataEntradaInicio) {
      dataOk = p.ultimaEntrada >= dataEntradaInicio;
    }
    if (dataOk && dataEntradaFim) {
      dataOk = p.ultimaEntrada <= dataEntradaFim;
    }
    return nomeOk && idadeOk && imcOk && mediaOk && dataOk;
  });

  // Ordenação
  if (ordem) {
    pacientesFiltrados = [...pacientesFiltrados].sort((a, b) => {
      if (ordem === 'idade') return a.idade - b.idade;
      if (ordem === 'imc') return calcularIMC(a.peso, a.altura) - calcularIMC(b.peso, b.altura);
      if (ordem === 'mediaHoras') {
        const ma = calcularMediaHorasDormidas(a.historicoSono);
        const mb = calcularMediaHorasDormidas(b.historicoSono);
        const va = typeof ma === 'string' && ma !== '-' ? parseFloat(ma) : 0;
        const vb = typeof mb === 'string' && mb !== '-' ? parseFloat(mb) : 0;
        return va - vb;
      }
      return 0;
    });
  }

  return (
    <>
      <Menu />
      <PageContainer>
        <Title>Lista de Pacientes</Title>
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="Pesquisar por nome..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          <FiltroLabel style={{ marginLeft: 16 }}>Ordenar por:</FiltroLabel>
          <FiltroSelect value={ordem} onChange={e => setOrdem(e.target.value)} style={{ minWidth: 180 }}>
            <option value="">Nenhum</option>
            <option value="idade">Idade</option>
            <option value="imc">IMC</option>
            <option value="mediaHoras">Média de horas dormidas</option>
          </FiltroSelect>
        </SearchBarContainer>
        <AccordionContainer>
          <AccordionButton onClick={() => setFiltrosOpen(o => !o)}>
            {filtrosOpen ? 'Ocultar filtros ▲' : 'Mostrar filtros ▼'}
          </AccordionButton>
          <AccordionContent open={filtrosOpen}>
            <FiltrosContainer>
              <FiltroGroup>
                <FiltroLabel>Idade:</FiltroLabel>
                <FiltroInput
                  type="number"
                  placeholder="Mín"
                  value={idadeMin}
                  min={0}
                  onChange={e => setIdadeMin(e.target.value)}
                />
                <FiltroInput
                  type="number"
                  placeholder="Máx"
                  value={idadeMax}
                  min={0}
                  onChange={e => setIdadeMax(e.target.value)}
                />
              </FiltroGroup>
              <FiltroGroup>
                <FiltroLabel>Data última entrada:</FiltroLabel>
                <FiltroInputData
                  type="date"
                  value={dataEntradaInicio}
                  onChange={e => setDataEntradaInicio(e.target.value)}
                  placeholder="Início"
                />
                <span style={{ margin: '0 8px' }}>até</span>
                <FiltroInputData
                  type="date"
                  value={dataEntradaFim}
                  onChange={e => setDataEntradaFim(e.target.value)}
                  placeholder="Fim"
                />
              </FiltroGroup>
              <FiltroGroup>
                <FiltroLabel>Grau IMC:</FiltroLabel>
                <FiltroSelect value={imcFiltro} onChange={e => setImcFiltro(e.target.value)}>
                  <option value="">Todos</option>
                  <option value="Baixo">Baixo</option>
                  <option value="Normal">Normal</option>
                  <option value="Sobrepeso">Sobrepeso</option>
                  <option value="Obesidade I">Obesidade I</option>
                  <option value="Obesidade II">Obesidade II</option>
                  <option value="Obesidade III">Obesidade III</option>
                </FiltroSelect>
              </FiltroGroup>
              <FiltroGroup>
                <FiltroLabel>Média horas dormidas ≥</FiltroLabel>
                <FiltroInput
                  type="number"
                  placeholder="h"
                  value={mediaHorasFiltro}
                  min={0}
                  onChange={e => setMediaHorasFiltro(e.target.value)}
                />
              </FiltroGroup>
            </FiltrosContainer>
          </AccordionContent>
        </AccordionContainer>
        <CardsGrid>
          {pacientesFiltrados.map((p, i) => (
            <PacienteCard key={i}>
              <PacienteAvatar>
                <span role="img" aria-label="avatar">👤</span>
              </PacienteAvatar>
              <PacienteDados>
                <PacienteNome>{p.nome}</PacienteNome>
                <PacienteLinha>
                  <PacienteInfo><b>Idade:</b> {p.idade} anos</PacienteInfo>
                  <PacienteInfo><b>Altura:</b> {p.altura.toFixed(2)} m</PacienteInfo>
                </PacienteLinha>
                <PacienteLinha>
                  <PacienteInfo><b>Peso:</b> {p.peso} kg</PacienteInfo>
                  <PacienteInfo><b>IMC:</b> {calcularIMC(p.peso, p.altura)} ({grauIMC(calcularIMC(p.peso, p.altura))})</PacienteInfo>
                </PacienteLinha>
                <PacienteInfo>
                  <b>Última entrada:</b> {formatarDataBR(p.ultimaEntrada)}
                </PacienteInfo>
                <PacienteInfo><b>Dificuldade de sono:</b> {p.dificuldadeSono}</PacienteInfo>
                <PacienteInfo>
                  <b>Média de horas dormidas:</b> {calcularMediaHorasDormidas(p.historicoSono)}
                </PacienteInfo>
                <PacienteLink
                  as={Link}
                  to={`/paciente/${i}`}
                >
                  Ver detalhes
                </PacienteLink>
              </PacienteDados>
            </PacienteCard>
          ))}
        </CardsGrid>
      </PageContainer>
    </>
  );
};

export default ListaPacientes;