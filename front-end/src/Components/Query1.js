import React, { useEffect, useState } from "react";
import axios from "axios";
import LineGraph from "./LineGraph";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Query1Graph from "./Query1Graph";

const Query1 = (props) => {
  const [genData, setGenData] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  var arrLabels = [];
  var arrRed = [];
  var arrYellow = [];
  React.useEffect(() => {
    axios("http://localhost:5000/query1")
      .then((response) => {
        if (response.status === 200) {
          setGenData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  genData.forEach(function (genData) {
    arrLabels.push(genData.YEAR);
    arrRed.push(genData.RED_CARDS);
    arrYellow.push(genData.YELLOW_CARDS);
  });

  return (
    <>
      {console.log(genData)}
      {console.log(arrLabels)}
      {console.log(arrRed)}
      {console.log(arrYellow)}

      <h3>Trend in number of bookings before and after VAR was introduced</h3>
      <Button onClick={() => setFlag(true)}>Generate</Button>
      {flag && (
        <Query1Graph
          labels={arrLabels}
          graphRed={arrRed}
          graphYellow={arrYellow}
        />
      )}
      <Container></Container>
    </>
  );
};

export default Query1;
