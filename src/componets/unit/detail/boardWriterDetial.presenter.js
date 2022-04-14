export default function BoardWirteDetailUI(props) {
    return (
        <div>
            <div>{props.data?.fetchBoard.number}번 게시글</div>
            <div>작성자:{props.data?.fetchBoard.writer}</div>
            <div>제목:{props.data?.fetchBoard.title}</div>
            <div>내용:{props.data?.fetchBoard.contents}번 게시글로 온것을 환영합니다.</div>
        </div>
    );
}
