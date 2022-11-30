import React, { useEffect, useState } from "react";
import CompetitionList from "./CompetitionList";
import axios from "axios";
import TopNav from "./TopNav";
import Container from "react-bootstrap/Container";
const Manager = (props) => {
  const [data, setData] = React.useState([]);
  const [labels, setlabels] = useState([]);
  var arrLabels = [];
  var arrData = [];
  const [name, setName] = useState("Game");
  React.useEffect(() => {
    axios(`http://localhost:5000/competition/?name=${name}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  return (
    <>
      <TopNav />
      <Container>
        <h1>Manager</h1>
      </Container>
      {console.log(data)}

      {/* <CompetitionList /> */}
    </>
  );
};

export default Manager;
