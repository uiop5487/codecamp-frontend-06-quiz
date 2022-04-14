import { SaveInput, SaveInput2, SaveInput3, Sumbitbutton } from "./boardWirter-styles";

export default function BoardWirteUI(props) {
    return (
        <div>
            작성자:{" "}
            <SaveInput type="text" onChange={props.onChangeWriter} writerBox={props.writerBox} />
            <br />
            제목:{" "}
            <SaveInput2 type="text" onChange={props.onChangeTitle} titleBox={props.titleBox} />
            <br />
            내용:{" "}
            <SaveInput3
                type="text"
                onChange={props.onChangeContents}
                contentsBox={props.contentsBox}
            />
            <br />
            <Sumbitbutton disabled={props.isActive} onClick={props.callGraphqlApi}>
                GRAPHQL-API 요청하기!!!
            </Sumbitbutton>
        </div>
    );
}
