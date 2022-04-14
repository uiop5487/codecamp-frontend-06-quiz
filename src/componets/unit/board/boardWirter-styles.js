import styled from "@emotion/styled";

export const Sumbitbutton = styled.button`
    background-color: ${(props) => (props.disabled ? "none" : "yellow")};
`;

export const SaveInput = styled.input`
    background-color: ${(props) => (props.writerBox ? "yellow" : "none")};
`;

export const SaveInput2 = styled.input`
    background-color: ${(props) => (props.titleBox ? "yellow" : "none")};
`;

export const SaveInput3 = styled.input`
    background-color: ${(props) => (props.contentsBox ? "yellow" : "none")};
`;
