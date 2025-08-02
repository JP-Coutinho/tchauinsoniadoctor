import React, { useState } from "react";
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarGrid,
  CalendarDay,
  CalendarCell,
  CalendarSelected,
  CalendarMark
} from "./styles";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export default function Calendar({ selectedDate, onSelectDate, markedDates = [], onDoubleClickDay }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate ? new Date(selectedDate).getMonth() : today.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    selectedDate ? new Date(selectedDate).getFullYear() : today.getFullYear()
  );

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const selected = selectedDate ? new Date(selectedDate) : null;

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };
  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const handleDayClick = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (onSelectDate) onSelectDate(dateStr);
  };

  const handleDayDoubleClick = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (onDoubleClickDay) onDoubleClickDay(dateStr);
  };

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <button onClick={handlePrev}>{"<"}</button>
        <span>
          {`${String(currentMonth + 1).padStart(2, "0")}/${currentYear}`}
        </span>
        <button onClick={handleNext}>{">"}</button>
      </CalendarHeader>
      <CalendarGrid>
        {weekDays.map((d, i) => (
          <CalendarDay key={i}>{d}</CalendarDay>
        ))}
        {Array(firstDay).fill(null).map((_, i) => (
          <CalendarCell key={`empty-${i}`} />
        ))}
        {Array(daysInMonth).fill(null).map((_, i) => {
          const day = i + 1;
          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isSelected =
            selected &&
            selected.getFullYear() === currentYear &&
            selected.getMonth() === currentMonth &&
            selected.getDate() === day;
          const isMarked = markedDates.includes(dateStr);
          return (
            <CalendarCell
              key={day}
              onClick={() => handleDayClick(day)}
              onDoubleClick={() => handleDayDoubleClick(day)}
            >
              {isSelected ? <CalendarSelected>{day}</CalendarSelected> : day}
              {isMarked && <CalendarMark />}
            </CalendarCell>
          );
        })}
      </CalendarGrid>
    </CalendarWrapper>
  );
}