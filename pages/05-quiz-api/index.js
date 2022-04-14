import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

const CrateProductPage = () => {
    const router = useRouter();
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [seller, SetSeller] = useState("");
    const [name, SetName] = useState("");
    const [detail, SetDetail] = useState("");
    const [price, SetPrice] = useState();

    const saveSeller = (event) => {
        SetSeller(event.target.value);
    };

    const saveName = (event) => {
        SetName(event.target.value);
    };

    const saveDetail = (event) => {
        SetDetail(event.target.value);
    };

    const savePrice = (event) => {
        SetPrice(Number(event.target.value));
    };

    const onClickChange = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: price,
                    },
                },
            });
            console.log(result);
            alert("성공!");
            router.push(`/${result.data.createProduct._id}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <br />
            판매자: <input type="text" onChange={saveSeller} />
            <br />
            상품명: <input type="text" onChange={saveName} />
            <br />
            상품내용: <input type="text" onChange={saveDetail} />
            <br />
            상품가격: <input type="text" onChange={savePrice} />
            <br />
            <button onClick={onClickChange}>저장 및 이동</button>
        </div>
    );
};

export default CrateProductPage;
