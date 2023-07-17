import React from "react";
import styled from "styled-components";

const ListItem = ({ time, eventName }) => {
  return (
    <ListItmeBox>
      <div>{time}</div>
      <div>{eventName}</div>
    </ListItmeBox>
  );
};

export default ListItem;

const ListItmeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  filter: blur(0.5px);
  transform: skewX(-5deg);
  transition: font-size 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    font-size: 23px;
    background-color: #dad8d8;
  }
`;
