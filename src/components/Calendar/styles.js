import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  background: #f5faff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  button {
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 2px 10px;
    font-size: 1.1em;
    cursor: pointer;
    &:hover {
      background: #1251a3;
    }
  }
  span {
    font-weight: bold;
    color: #0a1446;
    font-size: 1.1em;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const CalendarDay = styled.div`
  text-align: center;
  font-weight: bold;
  color: #1976d2;
  padding: 4px 0;
`;

export const CalendarCell = styled.div`
  text-align: center;
  padding: 7px 0;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
  &:hover {
    background: #e3f2fd;
  }
`;

export const CalendarSelected = styled.div`
  background: #1976d2;
  color: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: -4px 0;
`;

export const CalendarMark = styled.div`
  width: 7px;
  height: 7px;
  background: #43a047;
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
`;