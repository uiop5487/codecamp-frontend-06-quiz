import { useState } from "react";
import BoardWirteUI from "./boardWirter-presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./boardWirter-quries";
import { useRouter } from "next/router";

export default function BoardWirte() {
    const [isActive, setIsActive] = useState(true);
    const [writerBox, setWriterBox] = useState(false);
    const [titleBox, setTitleBox] = useState(false);
    const [contentsBox, setContentsBox] = useState(false);

    const router = useRouter();
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");

    const [data, setData] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")
        try {
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents },
            }); // graphql-api 방식
            console.log(result);
            console.log(result.data.createBoard.message);
            alert("게시글 등록에 성공하였습니다.");
            alert("상세페이지로 이동 할까요?");
            router.push(`/06-quiz/06-01-Container-Presenter/${result.data.createBoard.number}`);
        } catch (error) {
            alert(error.message);
        }
    };

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value);

        if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
            setIsActive(false);
        }
        if (event.target.value !== "") {
            setWriterBox(true);
        }
    };

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);

        if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
            setIsActive(false);
        }
        if (event.target.value !== "") {
            setTitleBox(true);
        }
    };

    const onChangeContents = (event) => {
        setMyContents(event.target.value);

        if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
            setIsActive(false);
        }
        if (event.target.value !== "") {
            setContentsBox(true);
        }
    };

    return (
        <BoardWirteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            isActive={isActive}
            writerBox={writerBox}
            titleBox={titleBox}
            contentsBox={contentsBox}
        />
    );
}
