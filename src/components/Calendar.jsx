import React, { useState } from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import { format, addMonths, subMonths } from "date-fns";
import useCalendar from "../hooks/useCalendar";
import img from "../style/img/calender.png";
import Rarrow from "../style/img/arrowright.png";
import Larrow from "../style/img/arrowleft.png";
import List from "./List";
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const month = format(currentMonth, "M");
  useCalendar(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // onClick시 day 정보 redux로 전달 및 modal open/close

  return (
    <>
      <CalendarWrapper>
        <Header>
          <div>
            <CalendarHeader>
              {format(currentMonth, "yyyy")} {month}월
            </CalendarHeader>
          </div>
          <div>
            <HeaderArrow src={Larrow} onClick={prevMonth}></HeaderArrow>
            <HeaderArrow src={Rarrow} onClick={nextMonth}></HeaderArrow>
          </div>
        </Header>
        <Days>
          {/* {dates.map((date, idx) => (
          <div key={idx}>{date}</div>
        ))} */}
        </Days>
        <CalendarItem></CalendarItem>
        <CarendarImg src={img}></CarendarImg>
      </CalendarWrapper>
      <List month />
    </>
  );
};

export default Calendar;

const CarendarImg = styled.img`
  position: absolute;
  margin: 25px 30px 0 0;
  width: 664px;
  height: 380px;
  z-index: -100;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 664px;
  max-height: 400px;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  align-items: center;
`;

const CalendarHeader = styled.h2`
  filter: blur(0.3px);
  margin-left: 10px;
  font-size: 20px;
`;

const HeaderArrow = styled.img`
  display: inline-flex;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const Days = styled.div`
  display: flex;
  width: 90%;
  height: 15px;
  margin: 0 5%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
