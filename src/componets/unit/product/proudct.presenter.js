// 여기는 프리젠터 컴포넌트

import { SubmitButton, WriterInput } from "./product.styles";

export default function ProductUI(props) {
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            판매자: <WriterInput type="text" onChange={props.onChangeSeller} />
            <br />
            상품이름: <input type="text" onChange={props.onChangeName} />
            <br />
            상품내용: <input type="text" onChange={props.onChangeDetail} />
            <br />
            가격: <input type="text" onChange={props.onChangePrice} />
            <br />
            <SubmitButton
                onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}
                isActive={props.isActive}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    );
}
