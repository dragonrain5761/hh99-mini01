import React, { useState } from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
const Details = ({
  info,
  handleDelete,
  updatedEventname,
  updatedStart,
  updatedEnd,
  updatedColor,
  onInputChange,
  onClickUpdateHandler,
  navigate,
}) => {
  const { eventname, start, end, color } = info;

  return (
    <DetailWarpper img={Detail}>
      <h1>Detail Page</h1>
      <div>
        <p>Event Name: {eventname}</p>
        <input
          type="text"
          name="updatedEventname"
          value={updatedEventname}
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
        <p>Circle Color: {color}</p>
        <select
          name="updatedColor"
          value={updatedColor}
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
  max-width: 800px;
  height: 800px;
  display: flex;
  margin: auto;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  top: 50%;
  left: 50%;
`;
