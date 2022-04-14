import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Myrow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfinitePage = () => {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const Scroll = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ height: "800px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={Scroll}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el: any) => (
          <Myrow key={el._id}>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </Myrow>
        )) || <div></div>}
      </InfiniteScroll>
    </div>
  );
};
export default InfinitePage;
