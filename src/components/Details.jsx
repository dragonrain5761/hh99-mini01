import React from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
const Details = ({
  info,
  handleDelete,
  updatedeventname,
  updatedStart,
  updatedEnd,
  updatedColor,
  onInputChange,
  onClickUpdateHandler,
}) => {
  const { eventname, start, end, color } = info;
  console.log(info);
  return (
    <DetailWarpper img={Detail}>
      <input type="text" />
      <textarea type="text" name="inputcontent" maxLength={600} />
      <h1>Detail Page</h1>
      <div>
        <p>Event Name: {eventname}</p>
        <input
          type="text"
          name="updatedeventname"
          value={updatedeventname}
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
        <p>Color: {color}</p>
        <select
          name="updatedcolor"
          value={updatedcolor}
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
    </DetailWarpper>
  );
};

export default Details;

const DetailWarpper = styled.div`
  max-width: 800px;
  height: 800px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  padding: 40px;

  > input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    outline: none;
    font-size: 32px;
    position: absolute;
    top: 6%;
    left: 30%;
  }
  textarea {
    width: 100%;
    height: 70%;
    padding: 15px 10px;
    resize: none;
    border: none;
    border-top: 1px solid grey;
    background: transparent;
    white-space: pre-wrap;
    word-break: break-all;
    box-sizing: border-box;
    /* margin-top: 18px; */

    &:focus {
      outline: none;
    }
  }
`;
