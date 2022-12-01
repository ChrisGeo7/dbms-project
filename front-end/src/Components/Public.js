import React from "react";
import TopNav from "./TopNav";
import Container from "react-bootstrap/Container";
import CompetitionList from "./CompetitionList";
import ClubList from "./ClubList";
import Query1 from "./Query1";
import Query2 from "./Query2";

const Public = (props) => {
  return (
    <>
      <TopNav />
      <Container>
        <h1>Public</h1>
        {/* <CompetitionList /> */}
        {/* <ClubList /> */}
        {/* <Query1 /> */}
        <Query2 />
      </Container>
    </>
  );
};

export default Public;
