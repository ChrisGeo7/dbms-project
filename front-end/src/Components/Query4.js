import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Query4Graph from "./Query4Graph";
import TopNav from "./TopNav";
import "./style.css";

const Query4 = (props) => {
  const [gbData, setGbData] = useState([]);
  const [esData, setEsData] = useState([]);
  const [lData, setLData] = useState([]);
  const [itData, setItData] = useState([]);
  const [frData, setFrData] = useState([]);
  const [flag, setFlag] = useState(false);
  var arrLabels = [];
  var arrGb = [];
  var arrEs = [];
  var arrL = [];
  var arrIt = [];
  var arrFr = [];

  React.useEffect(() => {
    axios("http://localhost:5000/query4/gb")
      .then((response) => {
        if (response.status === 200) {
          setGbData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});

    axios("http://localhost:5000/query4/es1")
      .then((response) => {
        if (response.status === 200) {
          setEsData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});

    axios("http://localhost:5000/query4/l1")
      .then((response) => {
        if (response.status === 200) {
          setLData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});

    axios("http://localhost:5000/query4/it1")
      .then((response) => {
        if (response.status === 200) {
          setItData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});

    axios("http://localhost:5000/query4/fr1")
      .then((response) => {
        if (response.status === 200) {
          setFrData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  gbData.forEach(function (gbData) {
    arrLabels.push(gbData.YEAR);
    arrGb.push(gbData.WINPERCENTAGE);
  });
  esData.forEach(function (esData) {
    arrEs.push(esData.WINPERCENTAGE);
  });
  lData.forEach(function (lData) {
    arrL.push(lData.WINPERCENTAGE);
  });
  itData.forEach(function (itData) {
    arrIt.push(itData.WINPERCENTAGE);
  });
  frData.forEach(function (frData) {
    arrFr.push(frData.WINPERCENTAGE);
  });

  return (
    <>
      <TopNav />
      <br />
      <Container>
        {" "}
        <h5>
          Graph of average performance of Top 5 Domestic Leagues in European
          Competitions.
        </h5>
        <Button className="gen-btn shadow" onClick={() => setFlag(true)}>
          Generate
        </Button>
        {flag && (
          <Query4Graph
            labels={arrLabels}
            graphgbData={arrGb}
            graphesData={arrEs}
            graphlData={arrL}
            graphitData={arrIt}
            graphfrData={arrFr}
          />
        )}
        {/* {console.log("GB:", gbData)}
        {console.log("ES:", esData)} */}
      </Container>
    </>
  );
};

export default Query4;
