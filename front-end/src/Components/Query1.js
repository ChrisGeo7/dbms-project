import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Query1Graph from "./Query1Graph";

const Query1 = (props) => {
  const [competitionList, setCompetitionList] = useState([]);
  const [genData, setGenData] = React.useState([]);
  const [genData1, setGenData1] = React.useState([]);
  const [competition1Id, setCompetition1Id] = useState("");
  const [flag, setFlag] = React.useState(false);
  const [buttonFlag, setButtonFlag] = React.useState(false);
  var arrLabels = [];
  var arrRedC = [];
  var arrYellowC = [];
  var arrRed = [];
  var arrYellow = [];
  useEffect(() => {
    axios("http://localhost:5000/competitions")
      .then((response) => {
        if (response.status === 200) {
          setCompetitionList(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  genData1.forEach(function (genData1) {
    arrRed.push(genData1.RED_CARDS);
    arrYellow.push(genData1.YELLOW_CARDS);
  });

  genData.forEach(function (genData) {
    arrLabels.push(genData.YEAR);
    arrRedC.push(genData.RED_CARDS);
    arrYellowC.push(genData.YELLOW_CARDS);
  });

  return (
    <>
      {" "}
      <TopNav />
      <br />
      <Container>
        {" "}
        <h5>
          Trend in number of bookings before and after VAR was introduced in a
          specific league (VAR was formally introduced in 2018)
        </h5>
        <Row>
          <Col xs={3}>
            <Form.Select
              value={competition1Id}
              aria-label="Default select example"
              onChange={(e) => {
                setCompetition1Id(e.target.value);
                setButtonFlag(true);
              }}
            >
              <option>Select Competition 1</option>
              {competitionList.length > 0 &&
                competitionList.map((item, i) => (
                  <option value={item.COMPETITION_ID}>
                    {item.COMPETITION_NAME}
                  </option>
                ))}
            </Form.Select>
          </Col>
          {buttonFlag && (
            <Col>
              <Button
                className="gen-btn shadow"
                onClick={() => {
                  axios(`http://localhost:5000/query11/?id=${competition1Id}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGenData(response.data.rows);
                      }
                    })
                    .then(() => {
                      setFlag(true);
                    })
                    .catch((err) => {});

                  axios("http://localhost:5000/query1")
                    .then((response) => {
                      if (response.status === 200) {
                        setGenData1(response.data.rows);
                      }
                    })
                    .then(() => {})
                    .catch((err) => {});
                }}
              >
                Generate
              </Button>
            </Col>
          )}
        </Row>
        {flag && (
          <Query1Graph
            labels={arrLabels}
            graphRed={arrRedC}
            graphYellow={arrYellowC}
          />
        )}
        <br />
        <br />
        <br />
        <br />
        {flag && (
          <>
            <h5>
              Trend in number of bookings before and after VAR was introduced in
              all leagues combined
            </h5>
            <Query1Graph
              labels={arrLabels}
              graphRed={arrRed}
              graphYellow={arrYellow}
            />
          </>
        )}
      </Container>
      {console.log("genData", genData)}
      {/* {console.log(arrLabels)}
      {console.log(arrRedC)}
      {console.log(arrYellowC)} */}
      <Container></Container>
    </>
  );
};

export default Query1;
