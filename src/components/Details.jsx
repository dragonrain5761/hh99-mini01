import React, { useState } from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
import Button from "../components/common/Button";
const Details = ({
  info,
  handleDelete,
  detailForm,
  onInputChange,
  onClickUpdateHandler,
  navigate,
}) => {
  const { eventname, start, end, color, date } = info;
  const [detailToggle, setDetailToggle] = useState(false);
  const onToggleDetailHandler = () => {
    setDetailToggle((prev) => !prev);
  };

  return (
    <>
      {detailToggle ? (
        <DetailWarpper $img={Detail}>
          <div className="header">
            <p>{date}</p>
            <div className="close" onClick={() => navigate("/")}>
              x
            </div>
          </div>
          <h1>Detail Page</h1>
          <DetailName>
            <p>Event:</p>
            <input
              type="text"
              className="updatedeventname"
              value={detailForm.updatedeventname}
              onChange={(e) => onInputChange(e)}
              maxLength={20}
            />
          </DetailName>
          <DetailTime>
            <p>Time: </p>
            <input
              className="updatedStart"
              value={detailForm.updatedStart}
              onChange={(e) => onInputChange(e)}
              maxLength={2}
            />
            -
            <input
              type="number"
              className="updatedEnd"
              value={detailForm.updatedEnd}
              onChange={(e) => onInputChange(e)}
              maxLength={2}
            />
          </DetailTime>
          <DetailColor>
            <p>Color: </p>
            <select
              className="updatedcolor"
              name="updatedcolor"
              value={detailForm.updatedcolor}
              onChange={(e) => onInputChange(e)}
            >
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="blue">blue</option>
              <option value="violet">violet</option>
            </select>
          </DetailColor>
          <ButtonBox>
            &nbsp;
            <Button width={100} onClick={onClickUpdateHandler}>
              완료
            </Button>
            &nbsp;
            <Button width={100} onClick={onToggleDetailHandler}>
              취소
            </Button>
          </ButtonBox>
        </DetailWarpper>
      ) : (
        <DetailWarpper $img={Detail}>
          <div className="header">
            <p>{date}</p>
            <div className="close" onClick={() => navigate("/")}>
              x
            </div>
          </div>
          <h1>Detail Page</h1>

          <DetailName>
            <p>Event: </p>
            <span>{eventname}</span>
          </DetailName>
          <DetailTime>
            <p>Time: </p>
            <span>{start} 시</span>-<span>{end} 시</span>
          </DetailTime>
          <DetailColor>
            <p>Color: </p>
            <span>{color}</span>
          </DetailColor>
          <ButtonBox>
            &nbsp;
            <Button width={100} onClick={onToggleDetailHandler}>
              수정
            </Button>
            &nbsp;
            <Button width={100} onClick={handleDelete}>
              삭제
            </Button>
          </ButtonBox>
        </DetailWarpper>
      )}
    </>
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
