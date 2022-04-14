import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button01 from "../../src/componets/commons/buttons/button01";
import Input01 from "../../src/componets/commons/inputs/input01";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: red;
`;

const schema = yup.object({
  writer: yup.string().max(5, "작성자는 5자이내").required("작성자는 필수입력"),
  password: yup
    .string()
    .required("비밀번호는 필수입력")
    .max(8, "비밀번호는 8자이내")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,}$/,
      "비밀번호 형식이 맞지 않습니다."
    ),
  title: yup.string().max(100, "제목은 100자이내").required("제목은 필수입력"),
  contents: yup
    .string()
    .max(1000, "내용은 1000자이내")
    .required("내용은 필수입력"),
});

const ReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onClickSubmit)}>
      작성자 <Input01 type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목 <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용 <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 title={"게시물 등록하기"} />
    </Wrapper>
  );
};

export default ReactHookForm;
