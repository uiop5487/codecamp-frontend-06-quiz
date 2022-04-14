import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import withAuth from "../../../src/componets/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function WithAuthLoginSuccessPageQuiz() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const [accessToken] = useRecoilState(accessTokenState);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인을 해주세요");
  //     router.push("/22-01-login-quiz");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}

export default withAuth(WithAuthLoginSuccessPageQuiz);
