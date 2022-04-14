import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegexPage = () => {
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [date, setDate] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePhonenum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhonenum(event.target.value);
  };

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onClickEmail = () => {
    if (/^\w+@\w+\.\w+$/.test(email)) {
      alert("등록되었습니다.");
    } else {
      alert("이메일 형식에 맞지 않습니다.");
    }
  };

  const onClickPhonenum = () => {
    if (/^\d{3}-\d{4}-\d{4}$/.test(phonenum)) {
      alert("등록되었습니다.");
    } else {
      alert("휴대폰 형식에 맞지 않습니다.");
    }
  };

  const onClickDate = () => {
    if (/^\d{4}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
      alert("등록되었습니다.");
    } else {
      alert("날짜 형식에 맞지 않습니다.");
    }
  };

  return (
    <Wrapper>
      <input type="text" onChange={onChangeEmail} />
      <button onClick={onClickEmail}>이메일 입력</button>
      <input type="text" onChange={onChangePhonenum} />
      <button onClick={onClickPhonenum}>휴대폰 번호 입력</button>
      <input type="text" onChange={onChangeDate} placeholder="0000.00.00" />
      <button onClick={onClickDate}>날짜 입력</button>
    </Wrapper>
  );
};

export default RegexPage;
