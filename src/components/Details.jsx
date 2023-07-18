import React, { useState } from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
import Button from "../components/common/Button";
const Details = ({
  info,
  handleDelete,
  updatedEventName,
  updatedStart,
  updatedEnd,
  updatedCircleColor,
  onInputChange,
  onClickUpdateHandler,
  navigate,
}) => {
  const { eventName, start, end, circleColor } = info;
  // console.log(eventName);

  return (
    <div>
      <h1>Detail Page</h1>
      <div>
        <p>Event Name: {eventName}</p>
        <input
          type="text"
          name="updatedEventName"
          value={updatedEventName}
          onChange={onInputChange}
        />
        <p>Start Time: {start}시</p>
        <input
          type="number"
          name="updatedStart"
          value={updatedStart}
          onChange={onInputChange}
          min="0"
          max="24"
        />
        <p>End Time: {end}시</p>
        <input
          type="number"
          name="updatedEnd"
          value={updatedEnd}
          onChange={onInputChange}
          min="0"
          max="24"
        />
        <p>Circle Color: {circleColor}</p>
        <select
          name="updatedCircleColor"
          value={updatedCircleColor}
          onChange={onInputChange}
        >
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="violet">violet</option>
        </select>
      </div>
      <button onClick={onClickUpdateHandler}>수정</button>
      &nbsp;
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default Details;

const DetailWarpper = styled.div`
  max-width: 60%;
  min-width: 900px;
  height: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ $img }) => $img});
  padding-top: 122px;
  filter: blur(0.5px);
  > h1 {
    font-size: 44px;
  }
  > * {
    padding-bottom: 44px;
  }
  > * input {
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    width: 320px;
    outline: none;
    font-size: 22px;
    height: 44px;
    padding-left: 20px;
  }
  > * span {
    display: flex;
    outline: none;
    font-size: 32px;
    height: 44px;
    justify-content: center;
    display: flex;
    align-items: end;
  }
  > p {
    padding-bottom: 0;
    display: flex;
    margin-right: 440px;
  }
  .updatedcolor {
    padding-left: 25%;
    font-size: 32px;
  }
  .close {
    left: 650px;
    top: 120px;
    width: 20px;
    height: 20px;
    font-size: 30px;
    cursor: pointer;
    :hover {
    }
  }
  .header {
    display: flex;
    gap: 410px;
  }
  .updatedcolor {
    outline: none;
  }
`;

const DetailName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 44px;
  align-items: center;
  gap: 20px;
  margin-left: 70px;
  > p {
    font-size: 28px;
  }
  > span {
    height: 44px;
    width: 320px;
  }
`;

const DetailTime = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 44px;
  align-items: center;
  gap: 50px;
  margin-left: 40px;
  > p {
    font-size: 28px;
  }
  > span {
    height: 44px;
    width: 80px;
    text-align: center;
    display: flex;
    align-items: end;
  }
  > input {
    width: 80px;
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const DetailColor = styled.div`
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 30px;
  > p {
    width: 100px;
    font-size: 28px;
  }
  > select {
    font-size: 25px;
    height: 44px;
    width: 250px;
    background-color: transparent;
    border: 0px;
  }
  > span {
    font-size: 25px;
    height: 44px;
    width: 250px;
    display: flex;
    align-items: end;
  }
`;

const ButtonBox = styled.div`
  gap: 10%;
  display: flex;
`;
