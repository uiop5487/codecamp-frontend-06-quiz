import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrier = styled.div`
  padding-left: 50px;
`;

const PageNum = styled.span`
  padding-left: 15px;
  cursor: pointer;
`;

const PageBtn = styled.button``;

const PainationPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: datacount } = useQuery(FETCH_BOARD_COUNT);
  const [start, setStart] = useState(1);
  const [id, setId] = useState("");
  // const [aa, setAa] = useState(true);
  const last = Math.ceil(datacount?.fetchBoardsCount / 10);
  // const [isActive, setIsActive] = useState(false);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event?.target.id) });
    setId(event.target.id);
  };

  const onClickNext = (event: any) => {
    if (start + 10 > last) return;
    setStart((prev) => prev + 10);
    refetch({ page: Number(event?.target.id) });
  };

  const onClickPrev = (event: any) => {
    if (start === 1) return;
    setStart((prev) => prev - 10);
    refetch({ page: Number(event?.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <WriterWrapper key={el._id}>
          <div>{el.title}</div>
          <Wrier>{el.writer}</Wrier>
        </WriterWrapper>
      ))}
      <PageBtn onClick={onClickPrev} disabled={start === 1}>
        이전
      </PageBtn>
      {new Array(10).fill(1).map((_, index) =>
        index + start <= last ? (
          <PageNum
            key={index + start}
            onClick={onClickPage}
            id={String(index + start)}
            style={{ color: id === String(index + start) ? "orange" : "black" }}
          >
            {index + start}
          </PageNum>
        ) : (
          <span></span>
        )
      )}
      <PageBtn
        onClick={onClickNext}
        disabled={start + 10 > last ? true : false}
      >
        다음
      </PageBtn>
    </div>
  );
};

export default PainationPage;
