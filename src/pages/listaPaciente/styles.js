import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #0a1446;
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: bold;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  width: 100%;
`;

export const PacienteCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
  padding: 36px 32px 28px 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 140px;
  transition: box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  }
`;

export const PacienteAvatar = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #e3f0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  font-size: 2.8rem;
  color: #1976d2;
`;

export const PacienteDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const PacienteNome = styled.h3`
  color: #1976d2;
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const PacienteLinha = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 4px;
`;

export const PacienteInfo = styled.div`
  color: #222;
  font-size: 1rem;
  margin-bottom: 0;
  width: auto;

  b {
    font-weight: bold;
    color: #0a1446;
  }
`;

export const PacienteLink = styled.a`
  margin-top: 16px;
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  padding: 6px 14px;
  background: #f5faff;
  transition: background 0.2s;

  &:hover {
    background: #e3f0ff;
    text-decoration: underline;
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const SearchInput = styled.input`
  flex: 7;
  min-width: 0;
  padding: 10px 16px;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  background: #f5faff;
  color: #222;

  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const AccordionButton = styled.button`
  width: 100%;
  background: #f5faff;
  color: #1976d2;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  text-align: left;
  cursor: pointer;
  margin-bottom: 0;
  transition: background 0.2s;

  &:hover {
    background: #e3f0ff;
  }
`;

export const AccordionContent = styled.div`
  width: 100%;
  background: #f9fbfc;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  padding: 18px 12px 12px 12px;
  margin-bottom: 16px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const FiltrosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 32px;
  width: 100%;
  margin-top: 8px;
`;

export const FiltroGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FiltroLabel = styled.label`
  font-size: 1rem;
  color: #0a1446;
  margin-right: 8px;
`;

export const FiltroSelect = styled.select`
  flex: 3;
  min-width: 120px;
  max-width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  background: #f5faff;
  color: #222;
  outline: none;
  margin-right: 0;

  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

export const FiltroInput = styled.input`
  width: 80px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  background: #f5faff;
  color: #222;
  outline: none;

  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

export const FiltroInputData = styled.input`
  width: 150px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  background: #f5faff;
  color: #222;
  outline: none;

  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

