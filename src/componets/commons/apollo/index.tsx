import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

interface IApolloSetting {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const myLocalstorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(myLocalstorageAccessToken || "");
  }, []);

  const uploadlink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
