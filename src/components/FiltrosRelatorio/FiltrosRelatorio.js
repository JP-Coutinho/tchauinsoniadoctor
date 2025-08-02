import React, { useState } from "react";
import {
  FiltroAccordion,
  FiltroAccordionHeader,
  FiltroAccordionContent,
  FilterArea,
  FilterLabel,
  FilterCheckbox,
  FilterOption,
  FilterDateInput,
  FilterRow,
  ExportButton,
} from "./styles";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FiltrosRelatorio = ({
  listaPacientes,
  filtroPacientes,
  setFiltroPacientes,
  filtroFaixaEtaria,
  setFiltroFaixaEtaria,
  filtroIMC,
  setFiltroIMC,
  filtroDataVisita,
  setFiltroDataVisita,
  filtroUltimoAcesso,
  setFiltroUltimoAcesso,
  faixasEtarias,
  faixasIMC,
}) => {
  // Estado de abertura dos acordeões
  const [open, setOpen] = useState({
    filtros: false,
    paciente: false,
    faixaEtaria: false,
    imc: false,
    dataVisita: false,
    ultimoAcesso: false,
  });

  const handleToggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFiltroPacientes = (id) => {
    setFiltroPacientes((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleFiltroTodosPacientes = () => {
    if (filtroPacientes.length === listaPacientes.length) setFiltroPacientes([]);
    else setFiltroPacientes(listaPacientes.map((p) => p.id));
  };

  const handleFiltroFaixaEtaria = (faixa) => {
    setFiltroFaixaEtaria((prev) =>
      prev.includes(faixa) ? prev.filter((f) => f !== faixa) : [...prev, faixa]
    );
  };

  const handleFiltroIMC = (faixa) => {
    setFiltroIMC((prev) =>
      prev.includes(faixa) ? prev.filter((f) => f !== faixa) : [...prev, faixa]
    );
  };

  // PDF Export - ajusta para folha A4 retrato
  const handleExportPDF = async () => {
    try {
      const report = document.getElementById("relatorio-pdf-area");
      if (!report) return;
      const canvas = await html2canvas(report, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      // A4: 595 x 842 px (padrão jsPDF, unidade: 'pt')
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calcula escala para caber na largura da página
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let y = 0;
      // Se a imagem for maior que a página, faz múltiplas páginas
      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      } else {
        let position = 0;
        let remainingHeight = imgHeight;
        while (remainingHeight > 0) {
          pdf.addImage(
            imgData,
            "PNG",
            0,
            position ? 0 : 0,
            imgWidth,
            imgHeight,
            undefined,
            "FAST"
          );
          remainingHeight -= pageHeight;
          position -= pageHeight;
          if (remainingHeight > 0) pdf.addPage();
        }
      }

      pdf.save("relatorio.pdf");
    } catch (e) {
      alert("Erro ao exportar PDF");
    }
  };

  return (
    <>
      <ExportButton onClick={handleExportPDF}>Exportar Relatório em PDF</ExportButton>
      <FiltroAccordion>
        <FiltroAccordionHeader onClick={() => handleToggle("filtros")}>
          <b>Filtros</b>
          <span style={{ marginLeft: 8 }}>{open.filtros ? "▲" : "▼"}</span>
        </FiltroAccordionHeader>
        {open.filtros && (
          <FiltroAccordionContent>
            <FilterArea>
              {/* Paciente */}
              <FiltroAccordion>
                <FiltroAccordionHeader onClick={() => handleToggle("paciente")}>
                  <b>Filtro por Paciente</b>
                  <span style={{ marginLeft: 8 }}>{open.paciente ? "▲" : "▼"}</span>
                </FiltroAccordionHeader>
                {open.paciente && (
                  <FiltroAccordionContent>
                    <FilterRow>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filtroPacientes.length === listaPacientes.length}
                        onChange={handleFiltroTodosPacientes}
                      />
                      <FilterOption onClick={handleFiltroTodosPacientes}>
                        {filtroPacientes.length === listaPacientes.length
                          ? "Todos selecionados"
                          : "Selecionar todos"}
                      </FilterOption>
                      {listaPacientes.map((p) => (
                        <span key={p.id} style={{ marginRight: 12 }}>
                          <FilterCheckbox
                            type="checkbox"
                            checked={filtroPacientes.includes(p.id)}
                            onChange={() => handleFiltroPacientes(p.id)}
                          />
                          <FilterOption onClick={() => handleFiltroPacientes(p.id)}>
                            {p.nome}
                          </FilterOption>
                        </span>
                      ))}
                    </FilterRow>
                  </FiltroAccordionContent>
                )}
              </FiltroAccordion>

              {/* Faixa Etária */}
              <FiltroAccordion>
                <FiltroAccordionHeader onClick={() => handleToggle("faixaEtaria")}>
                  <b>Filtro por Faixa Etária</b>
                  <span style={{ marginLeft: 8 }}>{open.faixaEtaria ? "▲" : "▼"}</span>
                </FiltroAccordionHeader>
                {open.faixaEtaria && (
                  <FiltroAccordionContent>
                    <FilterRow>
                      {faixasEtarias.map((faixa) => (
                        <span key={faixa} style={{ marginRight: 12 }}>
                          <FilterCheckbox
                            type="checkbox"
                            checked={filtroFaixaEtaria.includes(faixa)}
                            onChange={() => handleFiltroFaixaEtaria(faixa)}
                          />
                          <FilterOption onClick={() => handleFiltroFaixaEtaria(faixa)}>
                            {faixa}
                          </FilterOption>
                        </span>
                      ))}
                    </FilterRow>
                  </FiltroAccordionContent>
                )}
              </FiltroAccordion>

              {/* IMC */}
              <FiltroAccordion>
                <FiltroAccordionHeader onClick={() => handleToggle("imc")}>
                  <b>Filtro por IMC</b>
                  <span style={{ marginLeft: 8 }}>{open.imc ? "▲" : "▼"}</span>
                </FiltroAccordionHeader>
                {open.imc && (
                  <FiltroAccordionContent>
                    <FilterRow>
                      {faixasIMC.map((faixa) => (
                        <span key={faixa} style={{ marginRight: 12 }}>
                          <FilterCheckbox
                            type="checkbox"
                            checked={filtroIMC.includes(faixa)}
                            onChange={() => handleFiltroIMC(faixa)}
                          />
                          <FilterOption onClick={() => handleFiltroIMC(faixa)}>
                            {faixa}
                          </FilterOption>
                        </span>
                      ))}
                    </FilterRow>
                  </FiltroAccordionContent>
                )}
              </FiltroAccordion>

              {/* Data da Visita */}
              <FiltroAccordion>
                <FiltroAccordionHeader onClick={() => handleToggle("dataVisita")}>
                  <b>Filtro por Data da Visita</b>
                  <span style={{ marginLeft: 8 }}>{open.dataVisita ? "▲" : "▼"}</span>
                </FiltroAccordionHeader>
                {open.dataVisita && (
                  <FiltroAccordionContent>
                    <FilterRow>
                      <FilterLabel>De:</FilterLabel>
                      <FilterDateInput
                        type="date"
                        value={filtroDataVisita.de}
                        onChange={(e) =>
                          setFiltroDataVisita((prev) => ({
                            ...prev,
                            de: e.target.value,
                          }))
                        }
                      />
                      <FilterLabel>Até:</FilterLabel>
                      <FilterDateInput
                        type="date"
                        value={filtroDataVisita.ate}
                        onChange={(e) =>
                          setFiltroDataVisita((prev) => ({
                            ...prev,
                            ate: e.target.value,
                          }))
                        }
                      />
                    </FilterRow>
                  </FiltroAccordionContent>
                )}
              </FiltroAccordion>

              {/* Último acesso */}
              <FiltroAccordion>
                <FiltroAccordionHeader onClick={() => handleToggle("ultimoAcesso")}>
                  <b>Filtro por Último Acesso</b>
                  <span style={{ marginLeft: 8 }}>{open.ultimoAcesso ? "▲" : "▼"}</span>
                </FiltroAccordionHeader>
                {open.ultimoAcesso && (
                  <FiltroAccordionContent>
                    <FilterRow>
                      <FilterLabel>De:</FilterLabel>
                      <FilterDateInput
                        type="date"
                        value={filtroUltimoAcesso.de}
                        onChange={(e) =>
                          setFiltroUltimoAcesso((prev) => ({
                            ...prev,
                            de: e.target.value,
                          }))
                        }
                      />
                      <FilterLabel>Até:</FilterLabel>
                      <FilterDateInput
                        type="date"
                        value={filtroUltimoAcesso.ate}
                        onChange={(e) =>
                          setFiltroUltimoAcesso((prev) => ({
                            ...prev,
                            ate: e.target.value,
                          }))
                        }
                      />
                    </FilterRow>
                  </FiltroAccordionContent>
                )}
              </FiltroAccordion>
            </FilterArea>
          </FiltroAccordionContent>
        )}
      </FiltroAccordion>
    </>
  );
};

export default FiltrosRelatorio;