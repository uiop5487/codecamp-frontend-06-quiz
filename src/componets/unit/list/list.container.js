import MapProductdpresenter from "./list.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_PRODUCTS, DELETE_PRODUCT } from "./list.quries";

const MapProductdContainer = () => {
    const { data } = useQuery(FETCH_PRODUCTS);
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    const onClickDelete = (event) => {
        deleteProduct({
            variables: { productId: event.target.id },
            refetchQueries: [{ query: FETCH_PRODUCTS }],
        });
    };

    return <MapProductdpresenter onClickDelete={onClickDelete} data={data} />;
};

export default MapProductdContainer;
