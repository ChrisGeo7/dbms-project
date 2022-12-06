import React from "react";
import TopNav from "./TopNav";
import Container from "react-bootstrap/Container";
const Home = (props) => {
  return (
    <>
      <TopNav />
      <Container>
        <br />
        <br />
        <h1>
          <b
            style={{
              fontSize: "60px",
              textShadow: "2px 2px #FF435D",
              color: "#2b7a78",
            }}
          >
            Performance Trends ⌁
          </b>
          <br />
          <span style={{ fontSize: "58px", color: "#2b7a78" }}>
            in football across europe
          </span>
        </h1>
        <br />
        <p>
          The sports industry has grown to become one of the most lucrative
          industries in the world. The global sports market is expected to grow
          to an estimated $700 billion by 2026 with football (soccer) at the
          forefront of this growth. Football has attracted immense popularity
          all over the world and has also had a rapidly growing fanbase spanning
          across continents. Football transfers are one of the most lucrative
          elements of the sport with transfer costs ranging from anywhere
          between a few hundred thousand euros to hundreds of millions of euros.
          The most expensive transfer to date was valued at a staggering 222
          million euros. It is imperative to the growth of a football club that
          it continues to be involved in player transfers either by looking to
          improve the quality of its squad by selecting potentially impactful
          players at a feasible cost or selling its own players and bringing
          capital into the club. Likewise it is also important for various
          stakeholders of the sport such as club managers and administrators to
          analyze the finer details so that they can stay ahead of the curve. In
          this project, we aim to identify and analyze players and teams from
          various leagues, playing in major tournaments to determine their
          impact on their respective clubs. We aim to analyze team and
          individual performance on the basis of a number of factors collected
          over time and hope to gain insights regarding players, clubs and
          competitions.
        </p>
      </Container>
    </>
  );
};

export default Home;
