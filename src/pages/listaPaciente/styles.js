import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 32px 16px;
  @media (max-width: 900px) {
    padding: 24px 8px;
  }
  @media (max-width: 600px) {
    padding: 12px 2vw;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 18px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 180px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const PacienteCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 20px 18px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(25, 118, 210, 0.13);
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 14px 8px;
    gap: 10px;
  }
`;

export const PacienteAvatar = styled.div`
  width: 56px;
  height: 56px;
  background: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  @media (max-width: 600px) {
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
`;

export const PacienteDados = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PacienteNome = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 4px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const PacienteLinha = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2px;
  }
`;

export const PacienteInfo = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 2px;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const PacienteLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: #1976d2;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #0d47a1;
  }
  @media (max-width: 600px) {
    margin-top: 4px;
    font-size: 0.98rem;
  }
`;

// Filtros e Accordion responsivos
export const AccordionContainer = styled.div`
  margin-bottom: 18px;
`;

export const AccordionButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 8px;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;

export const AccordionContent = styled.div`
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s;
`;

export const FiltrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  background: #f5faff;
  border-radius: 10px;
  padding: 18px 12px;
  margin-bottom: 8px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    padding: 12px 6px;
  }
`;

export const FiltroGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FiltroLabel = styled.label`
  font-weight: bold;
  color: #1976d2;
  margin-right: 4px;
  font-size: 1rem;
`;

export const FiltroSelect = styled.select`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 4px 8px;
`;

export const FiltroInput = styled.input`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 4px 8px;
  width: 70px;
`;

export const FiltroInputData = styled.input`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 4px 8px;
  width: 130px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

