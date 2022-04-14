// 여기는 컨테이너 컴포넌트

import ProductUI from "./proudct.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./product.queries";
import { useRouter } from "next/router";

export default function ProductContainer(props) {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    const [mySeller, setMySeller] = useState("");
    const [myName, setMyName] = useState("");
    const [myDetail, setMyDetail] = useState("");
    const [myPrice, SetMyPrice] = useState();

    const [data, setData] = useState("");
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const onClickUpdate = async () => {
        await updateProduct({
            variables: {
                producId: String(router.query.id),
                updateProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: myPrice,
                },
            },
        });
        alert("수정성공");
        router.push(`/08-quiz-product/${router.query.id}`);
    };

    const callGraphqlApi = async () => {
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
        alert("등록성공");
        router.push(`/08-quiz-product/${result.data.createProduct._id}`);
    };

    const onChangeSeller = (event) => {
        setMySeller(event.target.value);

        if (event.target.value !== "" && myName !== "" && myDetail !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeName = (event) => {
        setMyName(event.target.value);

        if (mySeller !== "" && event.target.value !== "" && myDetail !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeDetail = (event) => {
        setMyDetail(event.target.value);

        if (mySeller !== "" && myName !== "" && event.target.value !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangePrice = (event) => {
        SetMyPrice(Number(event.target.value));

        if (mySeller !== "" && myName !== "" && myDetail !== "" && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    return (
        <ProductUI
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            callGraphqlApi={callGraphqlApi}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    );
}
