import styled from "@emotion/styled";
import { ReactNode } from "react";
import BannerPage from "./banner";
import CarouselPage from "./carousel";
import FooterPage from "./footer";
import HeaderPage from "./header";
import NavPage from "./nav";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  padding-left: 50px;
`;

const Sidebar = styled.div`
  background-color: lightblue;
  width: 500px;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <HeaderPage />
      <CarouselPage />
      <NavPage />
      <BodyWrapper>
        <Sidebar>사이드바 영역</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>

      <FooterPage />
    </>
  );
};

export default Layout;
