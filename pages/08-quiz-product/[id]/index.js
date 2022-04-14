// 여기는 상세보기 페이지

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
        }
    }
`;

const StaticRoutedPage = () => {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: String(router.query.id) },
    });

    const onClickMove = () => {
        router.push(`/08-quiz-product/${router.query.id}/edit`);
    };

    console.log(data);

    return (
        <div>
            <div>판매자:{data?.fetchProduct.seller}</div>
            <div>상품이름:{data?.fetchProduct.name}</div>
            <div>상품내용:{data?.fetchProduct.detail}</div>
            <div>가격:{data?.fetchProduct.price}</div>
            <button onClick={onClickMove}>수정하러 이동하기</button>
        </div>
    );
};

export default StaticRoutedPage;
