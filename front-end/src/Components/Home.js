import React from "react";
import TopNav from "./TopNav";
import Container from "react-bootstrap/Container";
const Home = (props) => {
  return (
    <>
      <TopNav />
      <Container>
        <h1 style={{ fontSize: "100px" }}>
          <b>Performance Trends</b>
          <br />
          in Football across Europe
        </h1>
      </Container>
    </>
  );
};

export default Home;
