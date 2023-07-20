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
    await updateTodo(id, updatedTodo);
    navigate("/");
  };

  const [updatedEventname, setUpdatedEventname] = useState("");
  const [updatedStart, setUpdatedStart] = useState("");
  const [updatedEnd, setUpdatedEnd] = useState("");
  const [updatedColor, setUpdatedColor] = useState("");

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "updatedEventname":
        setUpdatedEventname(value);
        break;
      case "updatedStart":
        setUpdatedStart(value);
        break;
      case "updatedEnd":
        setUpdatedEnd(value);
        break;
      case "updatedColor":
        setUpdatedColor(value);
        break;
      default:
        break;
    }
  };

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

      setInfo(response);
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
      onInputChange={onInputChange}
      onClickUpdateHandler={onClickUpdateHandler}
      detailForm={detailForm}
      navigate={navigate}
    ></Details>
  );
}
