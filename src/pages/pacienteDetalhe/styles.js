import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 24px 24px 24px;
  max-width: 100$;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.2fr;
  gap: 24px;
  margin-bottom: 32px;
`;

export const Card = styled.div`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  color: #0a1446;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Label = styled.div`
  font-weight: bold;
  color: #0a1446;
  margin-bottom: 4px;
`;

export const Info = styled.div`
  color: #222;
  margin-bottom: 4px;
`;

export const ChartArea = styled.div`
  background: #fff;
  border-radius: 12px;
  margin-top: 24px;
  padding: 24px 24px 8px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const ChartTitle = styled.h3`
  color: #0a1446;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const InputArea = styled.div`
  margin-top: 32px;
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
`;

export const Input = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 10px;
  background: #f5faff;
  color: #222;
  resize: vertical;
`;

export const Button = styled.button`
  align-self: flex-end;
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

export const List = styled.ul`
  margin: 0;
  padding-left: 18px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #222;
  font-size: 1rem;
`;

export const PieLegend = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1rem;
`;

export const PieColor = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 8px;
  background: ${({ color }) => color};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CalendarInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 10px;
  background: #f5faff;
  color: #222;
  margin-bottom: 4px;
`;