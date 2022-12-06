import React from "react";
import axios from "axios";
import TopNav from "./TopNav";
import "./style.css";

import Container from "react-bootstrap/Container";
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
      {" "}
      <TopNav />
      <br />
      <Container>
        {" "}
        <h5>Trend in number of bookings before and after VAR was introduced</h5>
        <Button className="gen-btn shadow" onClick={() => setFlag(true)}>
          Generate
        </Button>
        {flag && (
          <Query1Graph
            labels={arrLabels}
            graphRed={arrRed}
            graphYellow={arrYellow}
          />
        )}
      </Container>
      {console.log(genData)}
      {console.log(arrLabels)}
      {console.log(arrRed)}
      {console.log(arrYellow)}
      <Container></Container>
    </>
  );
};

export default Query1;
