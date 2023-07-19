import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../apis/api";

const List = ({ filteredData }) => {
  const queryClient = useQueryClient();
  // delete함수 실행하고 성공하면 onSuccess하는 것
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  // id 받아서 삭제작업하는 것
  const handleDelete = useCallback(
    (id) => {
      mutation.mutate(id);
    },
    [mutation]
  );
  const navigate = useNavigate();
  const onClickNavHandler = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <ListWrapper>
      {filteredData?.map((item) => (
        <ListItem
          key={item.id}
          time={item.time}
          eventname={item.eventname}
          start={item.start}
          end={item.end}
          color={item.color}
          todoId={item.id}
          onDelete={handleDelete}
          onClick={() => onClickNavHandler(item.id)}
        ></ListItem>
      ))}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  @media (max-width: 900px) {
    // background-color: red;
    display: flex;
    width: 650px;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    margin: 40px auto;
  }
  @media (min-width: 901px) {
    display: grid;
    width: 20%;
    margin-top: 60px;
    margin-left: 40px;
    max-height: 310px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    gap: 15px;
  }
`;
