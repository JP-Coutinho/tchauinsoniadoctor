import styled from "styled-components";

export const FiltroAccordion = styled.div`
  margin-bottom: 12px;
  background: #f5faff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const FiltroAccordionHeader = styled.div`
  padding: 12px 14px;
  cursor: pointer;
  font-size: 1.05rem;
  color: #1976d2;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  user-select: none;
`;

export const FiltroAccordionContent = styled.div`
  padding: 12px 14px 8px 14px;
`;

export const FilterArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
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

export const FilterSelect = styled.select`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 4px 8px;
  margin-right: 8px;
`;

export const FilterDateInput = styled.input`
  border-radius: 6px;
  border: 1px solid #cfd8dc;
  font-size: 1rem;
  padding: 4px 8px;
  margin-right: 8px;
`;

export const ExportButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;