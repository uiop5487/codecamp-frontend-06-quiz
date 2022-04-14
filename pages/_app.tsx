import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/componets/commons/layout";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/componets/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  //모든 셋팅은 여기서

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
