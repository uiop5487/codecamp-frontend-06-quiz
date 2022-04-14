import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Button = styled.button``;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

const Input01 = (props: IProps) => {
  return <input type={props.type} {...props.register} />;
};

export default Input01;
