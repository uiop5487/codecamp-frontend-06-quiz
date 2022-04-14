import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlPage() {
    const [myData, setMyData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD);

    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const onClickSumbit = async () => {
        const result = await callApi({
            variables: { writer: myWriter, title: myTitle, contents: myContents },
        });
        console.log(result);
        setMyData(result.data.createBoard.message);
    };

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value);
    };
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);
    };
    const onChangeContents = (event) => {
        setMyContents(event.target.value);
    };

    return (
        <div>
            <div>{myData}</div>
            작성자:
            <input type="text" onChange={onChangeWriter} />
            <br />
            <br />
            제목:
            <input type="text" onChange={onChangeTitle} />
            <br />
            <br />
            내용:
            <input type="text" onChange={onChangeContents} />
            <br />
            <br />
            <button onClick={onClickSumbit}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
