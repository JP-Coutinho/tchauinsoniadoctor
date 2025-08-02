// Função utilitária para gerar horários de sono mockados dos últimos 30 dias
function gerarHistoricoSono() {
  const hoje = new Date();
  const historico = [];
  for (let i = 0; i < 30; i++) {
    const dia = new Date(hoje);
    dia.setDate(hoje.getDate() - i);
    const dormirHora = 21 + Math.floor(Math.random() * 3); // 21h a 23h
    const dormirMin = Math.floor(Math.random() * 60);
    const acordarHora = 6 + Math.floor(Math.random() * 3); // 6h a 8h
    const acordarMin = Math.floor(Math.random() * 60);

    const dormir = `${String(dormirHora).padStart(2, '0')}:${String(dormirMin).padStart(2, '0')}`;
    const acordar = `${String(acordarHora).padStart(2, '0')}:${String(acordarMin).padStart(2, '0')}`;

    // Calcular duração do sono em minutos
    let minutosDormir = dormirHora * 60 + dormirMin;
    let minutosAcordar = acordarHora * 60 + acordarMin;
    if (minutosAcordar <= minutosDormir) {
      minutosAcordar += 24 * 60;
    }
    const duracaoMin = minutosAcordar - minutosDormir;
    const duracaoHoras = duracaoMin / 60;

    // Definir humor baseado na duração do sono
    let humor;
    if (duracaoHoras < 6) {
      humor = "triste";
    } else if (duracaoHoras < 7.5) {
      humor = "neutro";
    } else {
      humor = "feliz";
    }

    historico.push({
      data: dia.toISOString().slice(0, 10),
      dormir,
      acordar,
      humor
    });
  }
  return historico;
}

const pacientes = [
  {
    nome: "Ana Souza",
    idade: 32,
    altura: 1.65,
    peso: 62,
    ultimaEntrada: "2025-07-30",
    dificuldadeSono: "Acorda várias vezes à noite",
    foto: "https://randomuser.me/api/portraits/women/10.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-10",
        queixa: "Relatou dificuldade para dormir e cansaço ao acordar.",
        orientacao: "Foi orientada a evitar telas antes de dormir e manter horários regulares para o sono.",
        dataProximaVisita: "2025-07-10"
      },
      {
        dataVisita: "2025-07-10",
        queixa: "Referiu melhora parcial, mas ainda acorda durante a noite.",
        orientacao: "Reforçada a higiene do sono e sugerido exercícios leves no fim da tarde.",
        dataProximaVisita: "2025-08-10"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dificuldade para dormir há 6 meses, com cansaço ao acordar.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, usa telas até tarde, não pratica atividade física regularmente.",
      avaliacaoPsicologica: "Refere ansiedade leve, sem acompanhamento psicológico.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo várias vezes durante a noite e tenho dificuldade para voltar a dormir.",
        impacto: "Sinto muito cansaço durante o dia e dificuldade de concentração.",
        tentativas: "Já tentei tomar chá, evitar café à noite e usar tampão de ouvido.",
        expectativa: "Gostaria de voltar a dormir a noite toda e acordar descansada."
      }
    }
  },
  {
    nome: "Carlos Lima",
    idade: 45,
    altura: 1.78,
    peso: 85,
    ultimaEntrada: "2025-07-28",
    dificuldadeSono: "Demora para dormir",
    foto: "https://randomuser.me/api/portraits/men/11.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-20",
        queixa: "Queixa de insônia e ansiedade noturna.",
        orientacao: "Orientado a praticar técnicas de relaxamento antes de dormir e evitar cafeína após as 16h.",
        dataProximaVisita: "2025-06-20"
      },
      {
        dataVisita: "2025-06-20",
        queixa: "Melhora discreta, mas ainda sente ansiedade.",
        orientacao: "Sugerida avaliação com especialista em sono.",
        dataProximaVisita: "2025-07-20"
      },
      {
        dataVisita: "2025-07-20",
        queixa: "Relata noites mais tranquilas após iniciar relaxamento.",
        orientacao: "Manter rotina e retornar em caso de piora.",
        dataProximaVisita: "2025-08-20"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata insônia há 3 meses, com dificuldade para iniciar o sono.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em turnos alternados, consome cafeína à tarde.",
      avaliacaoPsicologica: "Refere ansiedade moderada, em acompanhamento psicológico.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Demoro para dormir e sinto ansiedade ao tentar dormir.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei técnicas de respiração e evitar cafeína, com pouca melhora.",
        expectativa: "Gostaria de dormir mais rápido e ter um sono reparador."
      }
    }
  },
  {
    nome: "Beatriz Silva",
    idade: 28,
    altura: 1.60,
    peso: 58,
    ultimaEntrada: "2025-07-29",
    dificuldadeSono: "Sono leve",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-05",
        queixa: "Diz que acorda com qualquer barulho e sente sono não reparador.",
        orientacao: "Orientada a usar protetores auriculares e manter o quarto escuro.",
        dataProximaVisita: "2025-07-05"
      },
      {
        dataVisita: "2025-07-05",
        queixa: "Referiu melhora com uso dos protetores.",
        orientacao: "Sugerido manter as medidas e iniciar meditação guiada.",
        dataProximaVisita: "2025-08-05"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata sono leve e fragmentado, com múltiplos despertares noturnos.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em home office, tem rotina irregular de sono.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo com facilidade e tenho dificuldade para voltar a dormir.",
        impacto: "Sinto cansaço leve e falta de concentração algumas vezes ao dia.",
        tentativas: "Usei protetores auriculares e mantive o quarto escuro, com alguma melhora.",
        expectativa: "Gostaria de ter um sono mais profundo e reparador."
      }
    }
  },
  {
    nome: "João Pedro",
    idade: 36,
    altura: 1.72,
    peso: 74,
    ultimaEntrada: "2025-07-27",
    dificuldadeSono: "Acorda cansado",
    foto: "https://randomuser.me/api/portraits/men/13.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-15",
        queixa: "Relata acordar cansado mesmo dormindo cedo.",
        orientacao: "Solicitado exame de polissonografia e orientado sobre higiene do sono.",
        dataProximaVisita: "2025-06-15"
      },
      {
        dataVisita: "2025-06-15",
        queixa: "Trouxe exame, sem alterações relevantes.",
        orientacao: "Reforçada a importância de atividade física regular.",
        dataProximaVisita: "2025-07-15"
      },
      {
        dataVisita: "2025-07-15",
        queixa: "Melhora do cansaço após iniciar caminhadas.",
        orientacao: "Manter rotina e retornar em 1 mês.",
        dataProximaVisita: "2025-08-15"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata cansaço ao acordar, mesmo após 8 horas de sono.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínas.",
      habitos: "Pratica atividade física irregularmente, trabalha em escritório.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo cansado e com dor no corpo.",
        impacto: "Sinto dificuldade para realizar minhas atividades diárias.",
        tentativas: "Tentei mudar o horário de dormir e acordar, mas sem sucesso.",
        expectativa: "Gostaria de acordar disposto e sem dores."
      }
    }
  },
  {
    nome: "Mariana Costa",
    idade: 40,
    altura: 1.68,
    peso: 70,
    ultimaEntrada: "2025-07-25",
    dificuldadeSono: "Insônia crônica",
    foto: "https://randomuser.me/api/portraits/women/14.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-04-30",
        queixa: "Insônia há mais de 6 meses, dificuldade para iniciar o sono.",
        orientacao: "Encaminhada para psicoterapia e iniciada higiene do sono.",
        dataProximaVisita: "2025-05-30"
      },
      {
        dataVisita: "2025-05-30",
        queixa: "Relata início da terapia, ainda sem grandes mudanças.",
        orientacao: "Ajustada rotina de sono e sugerido evitar cochilos diurnos.",
        dataProximaVisita: "2025-06-30"
      },
      {
        dataVisita: "2025-06-30",
        queixa: "Pequena melhora, mas ainda sente dificuldade.",
        orientacao: "Manter acompanhamento psicológico e reavaliar em 1 mês.",
        dataProximaVisita: "2025-07-30"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente com insônia crônica, relata dificuldade para iniciar e manter o sono.",
      antecedentes: "Sem doenças crônicas conhecidas. Faz uso de antidepressivo há 2 anos.",
      habitos: "Trabalha em turnos, faz uso irregular de medicação para dormir.",
      avaliacaoPsicologica: "Em tratamento psicológico, relata ansiedade e estresse.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Demoro para dormir e acordo várias vezes à noite.",
        impacto: "Sinto cansaço extremo e dificuldade de concentração.",
        tentativas: "Tentei medicação, terapia e mudanças de hábito, com pouca melhora.",
        expectativa: "Gostaria de ter um sono contínuo e reparador."
      }
    }
  },
  {
    nome: "Lucas Fernandes",
    idade: 29,
    altura: 1.80,
    peso: 80,
    ultimaEntrada: "2025-07-26",
    dificuldadeSono: "Pesadelos frequentes",
    foto: "https://randomuser.me/api/portraits/men/15.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-15",
        queixa: "Relata ter pesadelos frequentes e acordar assustado.",
        orientacao: "Orientado a evitar alimentos pesados à noite e praticar relaxamento.",
        dataProximaVisita: "2025-07-15"
      },
      {
        dataVisita: "2025-07-15",
        queixa: "Melhora nos pesadelos, mas ainda acorda algumas vezes à noite.",
        orientacao: "Sugerido manter rotina de sono e evitar estresse antes de dormir.",
        dataProximaVisita: "2025-08-15"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata pesadelos frequentes e sensação de queda ao dormir.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Pratica atividade física regularmente, evita cafeína à noite.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Tenho pesadelos frequentes e acordo assustado.",
        impacto: "Sinto cansaço e medo de dormir.",
        tentativas: "Tentei evitar alimentos pesados e praticar relaxamento, com alguma melhora.",
        expectativa: "Gostaria de ter um sono tranquilo e sem pesadelos."
      }
    }
  },
  {
    nome: "Patrícia Gomes",
    idade: 34,
    altura: 1.62,
    peso: 60,
    ultimaEntrada: "2025-07-24",
    dificuldadeSono: "Dorme pouco",
    foto: "https://randomuser.me/api/portraits/women/16.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-10",
        queixa: "Relata dormir menos de 6 horas por noite e sentir cansaço durante o dia.",
        orientacao: "Orientada a estabelecer uma rotina de sono e evitar estimulantes à noite.",
        dataProximaVisita: "2025-06-10"
      },
      {
        dataVisita: "2025-06-10",
        queixa: "Conseguiu aumentar para 6 horas, mas ainda sente sono durante o dia.",
        orientacao: "Sugerido incluir atividade física na rotina e avaliar possíveis distúrbios do sono.",
        dataProximaVisita: "2025-07-10"
      },
      {
        dataVisita: "2025-07-10",
        queixa: "Relata melhora com a atividade física, mas ainda acorda algumas vezes à noite.",
        orientacao: "Manter rotina de exercícios e evitar refeições pesadas antes de dormir.",
        dataProximaVisita: "2025-08-10"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dormir pouco e sentir cansaço durante o dia.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, pratica atividade física esporadicamente.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Durmo menos de 6 horas por noite e acordo cansada.",
        impacto: "Sinto dificuldade de concentração e cansaço durante o dia.",
        tentativas: "Tentei estabelecer uma rotina e evitar estimulantes, com pouca melhora.",
        expectativa: "Gostaria de dormir pelo menos 7 horas e acordar descansada."
      }
    }
  },
  {
    nome: "Ricardo Alves",
    idade: 50,
    altura: 1.75,
    peso: 90,
    ultimaEntrada: "2025-07-23",
    dificuldadeSono: "Acorda cedo demais",
    foto: "https://randomuser.me/api/portraits/men/17.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-25",
        queixa: "Relata acordar às 4h da manhã e não conseguir voltar a dormir.",
        orientacao: "Orientado a evitar luzes fortes durante a noite e manter o quarto escuro e silencioso.",
        dataProximaVisita: "2025-06-25"
      },
      {
        dataVisita: "2025-06-25",
        queixa: "Melhora ao evitar luzes, mas ainda acorda cedo.",
        orientacao: "Sugerido manter as orientações e avaliar uso de máscara para apneia do sono.",
        dataProximaVisita: "2025-07-25"
      },
      {
        dataVisita: "2025-07-25",
        queixa: "Relata melhora significativa, consegue dormir até mais tarde.",
        orientacao: "Continuar com as orientações e retornar em caso de recaída.",
        dataProximaVisita: "2025-08-25"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata acordar muito cedo e dificuldade para voltar a dormir.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Aposentado, pratica caminhada pela manhã, dorme cedo.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo às 4h da manhã e não consigo voltar a dormir.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei dormir mais tarde e evitar luzes, com alguma melhora.",
        expectativa: "Gostaria de dormir até mais tarde e acordar descansado."
      }
    }
  },
  {
    nome: "Fernanda Dias",
    idade: 27,
    altura: 1.58,
    peso: 54,
    ultimaEntrada: "2025-07-22",
    dificuldadeSono: "Dificuldade para pegar no sono",
    foto: "https://randomuser.me/api/portraits/women/18.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-20",
        queixa: "Relata dificuldade para iniciar o sono e acorda várias vezes à noite.",
        orientacao: "Orientada a criar um ritual relaxante antes de dormir e evitar estimulantes.",
        dataProximaVisita: "2025-07-20"
      },
      {
        dataVisita: "2025-07-20",
        queixa: "Melhora ao evitar estimulantes, mas ainda acorda durante a noite.",
        orientacao: "Sugerido manter o ritual de sono e avaliar necessidade de terapia cognitivo-comportamental.",
        dataProximaVisita: "2025-08-20"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dificuldade para pegar no sono e sono fragmentado.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Estudante, usa computador até tarde, não pratica atividade física.",
      avaliacaoPsicologica: "Refere ansiedade leve, sem acompanhamento psicológico.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Demoro para pegar no sono e acordo várias vezes à noite.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei criar um ritual de sono e evitar estimulantes, com alguma melhora.",
        expectativa: "Gostaria de ter um sono mais profundo e reparador."
      }
    }
  },
  {
    nome: "Gabriel Martins",
    idade: 38,
    altura: 1.70,
    peso: 76,
    ultimaEntrada: "2025-07-21",
    dificuldadeSono: "Sono agitado",
    foto: "https://randomuser.me/api/portraits/men/19.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-15",
        queixa: "Relata sono agitado e dificuldade para relaxar à noite.",
        orientacao: "Orientado a praticar exercícios de respiração e evitar telas antes de dormir.",
        dataProximaVisita: "2025-07-15"
      },
      {
        dataVisita: "2025-07-15",
        queixa: "Melhora na qualidade do sono, mas ainda acorda cansado.",
        orientacao: "Sugerido manter as práticas de relaxamento e avaliar necessidade de ajuste na medicação, se houver.",
        dataProximaVisita: "2025-08-15"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata sono agitado, com dificuldades para relaxar e dormir.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, pratica atividade física irregularmente.",
      avaliacaoPsicologica: "Refere estresse moderado, em acompanhamento psicológico.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Tenho sono agitado e dificuldade para relaxar à noite.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei exercícios de respiração e evitar telas, com alguma melhora.",
        expectativa: "Gostaria de ter um sono mais tranquilo e reparador."
      }
    }
  },
  {
    nome: "Juliana Rocha",
    idade: 31,
    altura: 1.66,
    peso: 63,
    ultimaEntrada: "2025-07-20",
    dificuldadeSono: "Acorda com dor de cabeça",
    foto: "https://randomuser.me/api/portraits/women/20.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-05",
        queixa: "Diz que acorda com dor de cabeça e sensação de cansaço.",
        orientacao: "Orientada a manter um diário do sono e evitar uso de álcool e cafeína à noite.",
        dataProximaVisita: "2025-07-05"
      },
      {
        dataVisita: "2025-07-05",
        queixa: "Referiu melhora, mas ainda tem dias com dor de cabeça ao acordar.",
        orientacao: "Sugerido continuar o diário do sono e reavaliar em 1 mês.",
        dataProximaVisita: "2025-08-05"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dor de cabeça ao acordar, com sensação de cansaço.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, usa computador e celular frequentemente.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo com dor de cabeça e sinto cansaço ao acordar.",
        impacto: "Sinto dificuldade de concentração e cansaço durante o dia.",
        tentativas: "Tentei evitar álcool e cafeína, com alguma melhora.",
        expectativa: "Gostaria de acordar sem dor de cabeça e descansada."
      }
    }
  },
  {
    nome: "Thiago Ribeiro",
    idade: 42,
    altura: 1.82,
    peso: 88,
    ultimaEntrada: "2025-07-19",
    dificuldadeSono: "Ronca muito",
    foto: "https://randomuser.me/api/portraits/men/21.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-10",
        queixa: "Relata roncos altos e sensação de sufocamento durante o sono.",
        orientacao: "Orientado a evitar dormir de costas e perder peso, se necessário.",
        dataProximaVisita: "2025-07-10"
      },
      {
        dataVisita: "2025-07-10",
        queixa: "Melhora ao evitar dormir de costas, mas ainda ronca às vezes.",
        orientacao: "Sugerido continuar com as orientações e avaliar necessidade de exame de polissonografia.",
        dataProximaVisita: "2025-08-10"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata roncos altos e sensação de sufocamento durante o sono.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Sobrepeso, consome álcool à noite, dorme de costas.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Ronco alto e sensação de sufocamento durante o sono.",
        impacto: "Sinto cansaço e sonolência durante o dia.",
        tentativas: "Tentei dormir de lado e evitar álcool, com alguma melhora.",
        expectativa: "Gostaria de parar de roncar e ter um sono tranquilo."
      }
    }
  },
  {
    nome: "Camila Pires",
    idade: 35,
    altura: 1.64,
    peso: 67,
    ultimaEntrada: "2025-07-18",
    dificuldadeSono: "Acorda várias vezes à noite",
    foto: "https://randomuser.me/api/portraits/women/22.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-01",
        queixa: "Relata acordar várias vezes à noite e dificuldade para voltar a dormir.",
        orientacao: "Orientada a evitar líquidos antes de dormir e criar um ambiente propício para o sono.",
        dataProximaVisita: "2025-07-01"
      },
      {
        dataVisita: "2025-07-01",
        queixa: "Conseguiu melhorar um pouco, mas ainda acorda 1-2 vezes à noite.",
        orientacao: "Sugerido manter as orientações e avaliar necessidade de terapia cognitivo-comportamental.",
        dataProximaVisita: "2025-08-01"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata acordar várias vezes à noite, com dificuldade para voltar a dormir.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em turnos, consome líquidos antes de dormir.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo várias vezes à noite e tenho dificuldade para voltar a dormir.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei evitar líquidos e criar um ambiente propício para dormir, com alguma melhora.",
        expectativa: "Gostaria de dormir a noite toda e acordar descansada."
      }
    }
  },
  {
    nome: "Eduardo Melo",
    idade: 39,
    altura: 1.77,
    peso: 83,
    ultimaEntrada: "2025-07-17",
    dificuldadeSono: "Sono não reparador",
    foto: "https://randomuser.me/api/portraits/men/23.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-20",
        queixa: "Relata sono não reparador e cansaço durante o dia.",
        orientacao: "Orientado a manter uma rotina de sono regular e evitar estimulantes à noite.",
        dataProximaVisita: "2025-07-20"
      },
      {
        dataVisita: "2025-07-20",
        queixa: "Melhora na qualidade do sono, mas ainda sente cansaço ao acordar.",
        orientacao: "Sugerido continuar com a rotina e avaliar necessidade de ajuste na medicação, se houver.",
        dataProximaVisita: "2025-08-20"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata sono não reparador, com cansaço e sonolência diurna.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, pratica atividade física irregularmente.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Meu sono não é reparador e sinto cansaço durante o dia.",
        impacto: "Tenho dificuldade de concentração e sonolência diurna.",
        tentativas: "Tentei manter uma rotina de sono e evitar estimulantes, com alguma melhora.",
        expectativa: "Gostaria de ter um sono reparador e acordar disposto."
      }
    }
  },
  {
    nome: "Larissa Teixeira",
    idade: 26,
    altura: 1.59,
    peso: 56,
    ultimaEntrada: "2025-07-16",
    dificuldadeSono: "Dorme tarde",
    foto: "https://randomuser.me/api/portraits/women/24.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-15",
        queixa: "Relata dormir muito tarde devido ao trabalho e dificuldade para acordar cedo.",
        orientacao: "Orientada a tentar adiantar o horário de dormir e acordar sempre no mesmo horário.",
        dataProximaVisita: "2025-07-15"
      },
      {
        dataVisita: "2025-07-15",
        queixa: "Conseguiu adiantar um pouco o sono, mas ainda dorme tarde.",
        orientacao: "Sugerido manter a rotina e evitar atividades estimulantes à noite.",
        dataProximaVisita: "2025-08-15"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dormir tarde e dificuldade para acordar cedo.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em turnos noturnos, tem dificuldade em manter uma rotina regular.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Durmo tarde e tenho dificuldade para acordar cedo.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei adiantar o horário de dormir e acordar, com pouca melhora.",
        expectativa: "Gostaria de ter uma rotina de sono mais regular e reparadora."
      }
    }
  },
  {
    nome: "Felipe Barros",
    idade: 33,
    altura: 1.73,
    peso: 75,
    ultimaEntrada: "2025-07-15",
    dificuldadeSono: "Acorda assustado",
    foto: "https://randomuser.me/api/portraits/men/25.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-01",
        queixa: "Relata acordar assustado com sensação de queda.",
        orientacao: "Orientado a evitar refeições pesadas antes de dormir e manter o quarto arejado.",
        dataProximaVisita: "2025-07-01"
      },
      {
        dataVisita: "2025-07-01",
        queixa: "Melhora ao evitar refeições pesadas, mas ainda acorda assustado às vezes.",
        orientacao: "Sugerido manter as orientações e avaliar necessidade de terapia cognitivo-comportamental.",
        dataProximaVisita: "2025-08-01"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata acordar assustado, como se estivesse caindo.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, pratica atividade física regularmente.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo assustado com sensação de queda durante o sono.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei evitar refeições pesadas e manter o quarto arejado, com alguma melhora.",
        expectativa: "Gostaria de dormir sem interrupções e acordar descansado."
      }
    }
  },
  {
    nome: "Renata Faria",
    idade: 37,
    altura: 1.68,
    peso: 69,
    ultimaEntrada: "2025-07-14",
    dificuldadeSono: "Dorme mal por ansiedade",
    foto: "https://randomuser.me/api/portraits/women/26.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-30",
        queixa: "Relata dormir mal devido à ansiedade e preocupações.",
        orientacao: "Orientada a praticar técnicas de relaxamento e manter um diário de preocupações.",
        dataProximaVisita: "2025-06-30"
      },
      {
        dataVisita: "2025-06-30",
        queixa: "Melhora na qualidade do sono, mas ainda tem noites ruins.",
        orientacao: "Sugerido continuar as técnicas de relaxamento e avaliar necessidade de terapia, se houver.",
        dataProximaVisita: "2025-07-30"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dormir mal, com muitas preocupações e ansiedade.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em ambiente estressante, pratica atividade física irregularmente.",
      avaliacaoPsicologica: "Em tratamento psicológico, relata ansiedade e estresse.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Não consigo dormir bem por causa da ansiedade.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei técnicas de relaxamento e terapia, com alguma melhora.",
        expectativa: "Gostaria de dormir bem e acordar descansada."
      }
    }
  },
  {
    nome: "Marcelo Pinto",
    idade: 41,
    altura: 1.81,
    peso: 92,
    ultimaEntrada: "2025-07-13",
    dificuldadeSono: "Acorda para ir ao banheiro",
    foto: "https://randomuser.me/api/portraits/men/27.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-15",
        queixa: "Relata acordar várias vezes à noite para urinar.",
        orientacao: "Orientado a reduzir a ingestão de líquidos à noite e avaliar uso de medicação, se necessário.",
        dataProximaVisita: "2025-06-15"
      },
      {
        dataVisita: "2025-06-15",
        queixa: "Melhora ao reduzir líquidos, mas ainda acorda 1-2 vezes à noite.",
        orientacao: "Sugerido manter as orientações e avaliar necessidade de exame urológico.",
        dataProximaVisita: "2025-07-15"
      },
      {
        dataVisita: "2025-07-15",
        queixa: "Relata poucas melhorias, ainda acorda várias vezes à noite.",
        orientacao: "Reavaliar hábitos alimentares e de consumo de líquidos, e considerar avaliação urológica.",
        dataProximaVisita: "2025-08-15"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata acordar várias vezes à noite para urinar.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Dieta rica em líquidos, especialmente à noite.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Acordo várias vezes à noite para ir ao banheiro.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei reduzir a ingestão de líquidos à noite, com pouca melhora.",
        expectativa: "Gostaria de dormir a noite toda sem interrupções."
      }
    }
  },
  {
    nome: "Tatiane Lopes",
    idade: 30,
    altura: 1.63,
    peso: 61,
    ultimaEntrada: "2025-07-12",
    dificuldadeSono: "Dorme pouco",
    foto: "https://randomuser.me/api/portraits/women/28.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-06-01",
        queixa: "Relata dormir menos de 5 horas por noite devido ao trabalho.",
        orientacao: "Orientada a tentar ajustar horários e priorizar o sono.",
        dataProximaVisita: "2025-07-01"
      },
      {
        dataVisita: "2025-07-01",
        queixa: "Conseguiu aumentar o tempo de sono para 6 horas.",
        orientacao: "Sugerido manter rotina e buscar relaxamento antes de dormir.",
        dataProximaVisita: "2025-08-01"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata dormir pouco, cerca de 5 horas por noite.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em turnos, tem dificuldade em manter uma rotina regular de sono.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Durmo pouco e sinto cansaço durante o dia.",
        impacto: "Tenho dificuldade de concentração e sonolência diurna.",
        tentativas: "Tentei ajustar horários e priorizar o sono, com pouca melhora.",
        expectativa: "Gostaria de dormir pelo menos 7 horas por noite e acordar descansada."
      }
    }
  },
  {
    nome: "Bruno Cardoso",
    idade: 44,
    altura: 1.79,
    peso: 86,
    ultimaEntrada: "2025-07-11",
    dificuldadeSono: "Sono interrompido",
    foto: "https://randomuser.me/api/portraits/men/29.jpg",
    historicoSono: gerarHistoricoSono(),
    orientacoesMedicas: [
      {
        dataVisita: "2025-05-28",
        queixa: "Acorda várias vezes durante a noite sem motivo aparente.",
        orientacao: "Orientado a evitar líquidos à noite e manter ambiente silencioso.",
        dataProximaVisita: "2025-06-28"
      },
      {
        dataVisita: "2025-06-28",
        queixa: "Referiu melhora parcial, mas ainda acorda 1 vez por noite.",
        orientacao: "Sugerido manter as orientações e avaliar uso de máscara para apneia se persistir.",
        dataProximaVisita: "2025-07-28"
      }
    ],
    anamneseDetail: {
      resumo: "Paciente relata sono interrompido, com múltiplos despertares noturnos.",
      antecedentes: "Sem doenças crônicas conhecidas. Não faz uso de medicações contínuas.",
      habitos: "Trabalha em escritório, usa telas até tarde.",
      avaliacaoPsicologica: "Sem queixas de ansiedade ou depressão.",
      exameFisico: "Sem alterações relevantes.",
      formulario: {
        problemaSono: "Meu sono é interrompido e não consigo dormir a noite toda.",
        impacto: "Sinto cansaço e dificuldade de concentração durante o dia.",
        tentativas: "Tentei evitar líquidos e manter o ambiente silencioso, com alguma melhora.",
        expectativa: "Gostaria de dormir a noite toda sem interrupções e acordar descansado."
      }
    }
  }
];

export default pacientes;