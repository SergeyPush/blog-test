import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Open Sans", sans-serif;
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #0a0e0e;
  opacity: 0.9;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
`;

const Layout = ({ children, title = "My Blog" }) => {
  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
