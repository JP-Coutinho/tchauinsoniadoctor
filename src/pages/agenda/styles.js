import styled from "styled-components";


export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto 0 auto; // Desce o container inteiro abaixo do menu fixo
  padding: 32px 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0a1446;
  margin-bottom: 24px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Card = styled.div`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 120px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 16px;
`;

export const CardPaciente = styled.div`
  background: #f5faff;
  border-radius: 8px;
  padding: 16px 18px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.04);
`;

export const CardInfo = styled.div`
  font-size: 1.05em;
  color: #222;
  margin-bottom: 4px;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #1976d2;
  margin-bottom: 12px;
`;

export const CardSubtitle = styled.div`
  color: #888;
  font-size: 1em;
  margin-bottom: 8px;
`;

export const CardActions = styled.div`
  margin-top: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;

export const PersonalNoteArea = styled.div`
  margin-top: 24px;
  background: #f5faff;
  border-radius: 10px;
  padding: 16px 14px;
`;

export const PersonalNoteTitle = styled.div`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 6px;
`;

export const PersonalNoteInput = styled.textarea`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 8px;
  resize: vertical;
`;

export const PersonalNoteList = styled.ul`
  margin: 0;
  padding: 0 0 0 18px;
`;

export const PersonalNoteItem = styled.li`
  color: #444;
  font-size: 1em;
  margin-bottom: 4px;
`;