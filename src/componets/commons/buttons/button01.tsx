import styled from "@emotion/styled";

const Button = styled.button``;

interface IProps {
  title: string;
}

const Button01 = (props: IProps) => {
  return <Button>{props.title}</Button>;
};

export default Button01;
