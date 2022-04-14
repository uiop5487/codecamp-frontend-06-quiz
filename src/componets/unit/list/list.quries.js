import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
    query fetchPorducts {
        fetchProducts {
            _id
            seller
            name
            createdAt
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            _id
            number
            message
        }
    }
`;
