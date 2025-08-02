import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #0a1446;
  margin-bottom: 24px;
`;

export const DashGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Card = styled.div`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ChartTitle = styled.h2`
  font-size: 1.1rem;
  color: #1976d2;
  margin-bottom: 12px;
`;

export const FilterArea = styled.div`
  margin-bottom: 24px;
  background: #f5faff;
  border-radius: 10px;
  padding: 16px 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const FilterLabel = styled.span`
  font-weight: bold;
  color: #1976d2;
  margin-right: 8px;
`;

export const FilterCheckbox = styled.input`
  margin-right: 4px;
  accent-color: #1976d2;
`;

export const FilterOption = styled.span`
  cursor: pointer;
  color: #1976d2;
  margin-right: 8px;
  &:hover {
    text-decoration: underline;
  }
`;