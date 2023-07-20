import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, deleteTodo, updateTodo } from "../apis/api";
import { useMutation, useQueryClient } from "react-query";
import Details from "../components/Details";
import useInput from "../hooks/useInput";

function Detailcontainor() {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      navigate("/");
    },
  });

  const handleDelete = async () => {
    await mutation.mutateAsync(id);
  };

  const handleUpdate = async (updatedTodo) => {
    await updateTodo(id, updatedTodo); // updateTodo 함수를 사용하여 업데이트 수행
    navigate("/"); // 업데이트 후 메인 페이지로 이동
  };

  const [updatedeventname, setUpdatedeventname] = useState("");

  const [updatedStart, setUpdatedStart] = useState("");
  const [updatedEnd, setUpdatedEnd] = useState("");
  const [updatedColor, setUpdatedColor] = useState("");

  const onInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "updatedStart") {
      value = Math.min(value, 24);
  const [detailForm, onInputChange] = useInput({
    updatedeventname: "",
    updatedStart: "",
    updatedEnd: "",
    updatedcolor: "red",
  });
  // console.log(detailForm);
  const onClickUpdateHandler = () => {
    if (
      detailForm.updatedeventname === "" ||
      detailForm.updatedStart === "" ||
      detailForm.updatedEnd === ""
    ) {
      return alert("모두 입력해주세요~");
    }

    if (name === "updatedEnd") {
      value = Math.min(value, 24);
    }

    const updatedInfo = {
      ...info,
      eventname: updatedeventname,
      start: updatedStart,
      end: updatedEnd,
      color: updatedcolor,
      eventname: detailForm.updatedeventname,
      start: detailForm.updatedStart,
      end: detailForm.updatedEnd,
      color: detailForm.updatedcolor,
    };
    handleUpdate(updatedInfo);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getTodo(id);
      setInfo(...response);
    };
    fetchInfo();
  }, [id]);

  if (!info) {
    return <div> 아직 로딩중입니다...</div>;
  }

  return (
    <Details
      info={info}
      handleDelete={handleDelete}
      updatedeventname={updatedeventname}
      updatedStart={updatedStart}
      updatedEnd={updatedEnd}
      updatedcolor={updatedcolor}
      onInputChange={onInputChange}
      onClickUpdateHandler={onClickUpdateHandler}
      detailForm={detailForm}
      navigate={navigate}
    ></Details>
  );
}

export default Detailcontainor;
