import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlProductPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [mySeller, setMySeller] = useState("");
    const [myName, setMyName] = useState("");
    const [myDetail, setMyDetail] = useState("");
    const [myPrice, setMyPrice] = useState();

    const [myData, setMyData] = useState("");

    const onChangeSeller = (event) => {
        setMySeller(event.target.value);
    };
    const onChangeName = (event) => {
        setMyName(event.target.value);
    };
    const onChangeDetail = (event) => {
        setMyDetail(event.target.value);
    };
    const onChangePrice = (event) => {
        setMyPrice(Number(event.target.value));
    };

    const onClickSumbit = async () => {
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: myPrice,
                },
            },
        });
        console.log(result);
        setMyData(result.data.createProduct.message);
    };

    return (
        <div>
            <div>{myData}</div>
            판매자:
            <input type="text" onChange={onChangeSeller} />
            <br />
            <br />
            상품명:
            <input type="text" onChange={onChangeName} />
            <br />
            <br />
            상품내용:
            <input type="text" onChange={onChangeDetail} />
            <br />
            <br />
            상품가격:
            <input type="text" onChange={onChangePrice} />
            <br />
            <br />
            <button onClick={onClickSumbit}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
