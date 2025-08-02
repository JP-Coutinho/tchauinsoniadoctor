import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 80px auto 0 auto;
  padding: 32px 16px;
  @media (max-width: 900px) {
    padding: 24px 8px;
  }
  @media (max-width: 600px) {
    padding: 12px 2vw;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const Card = styled.div`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  @media (max-width: 600px) {
    padding: 14px 8px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0a1446;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 6px;
`;

export const Info = styled.div`
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 8px;
  word-break: break-word;
  @media (max-width: 600px) {
    font-size: 0.97rem;
  }
`;

export const ChartArea = styled.div`
  margin: 32px 0 0 0;
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  @media (max-width: 600px) {
    padding: 14px 8px;
    margin: 18px 0 0 0;
  }
`;

export const ChartTitle = styled.h2`
  font-size: 1.1rem;
  color: #1976d2;
  margin-bottom: 12px;
`;

export const InputArea = styled.div`
  margin-bottom: 12px;
`;

export const Input = styled.textarea`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 8px 12px;
  width: 100%;
  min-height: 60px;
  resize: vertical;
`;

export const Button = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  background: #f5faff;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 10px;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.97rem;
    padding: 8px 6px;
  }
`;

export const PieLegend = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 12px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    gap: 8px;
    font-size: 0.97rem;
  }
`;

export const PieColor = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ color }) => color};
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 18px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 12px;
  }
`;