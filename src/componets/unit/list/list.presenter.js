import * as s from "./list.styles";

const MapProductdpresenter = (props) => {
    return (
        <div>
            {props.data?.fetchProducts.map((el) => (
                <s.Row key={el._id}>
                    <s.Column>
                        <input type="checkbox" />
                    </s.Column>
                    <s.Column>{el.seller}</s.Column>
                    <s.Column>{el.name}</s.Column>
                    <s.Column>{el.createdAt}</s.Column>
                    <s.Column>
                        <button id={el._id} onClick={props.onClickDelete}>
                            삭제
                        </button>
                    </s.Column>
                </s.Row>
            ))}
        </div>
    );
};

export default MapProductdpresenter;
