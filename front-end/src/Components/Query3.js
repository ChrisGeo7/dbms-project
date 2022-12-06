import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Query3Graph from "./Query3Graph";
import TopNav from "./TopNav";
import "./style.css";

const ClubList = (props) => {
  const [competitionList, setCompetitionList] = useState([]);
  const [gen1Data, setGen1Data] = useState([]);
  const [gen2Data, setGen2Data] = useState([]);

  const [competition1Id, setCompetition1Id] = useState("");
  const [competition2Id, setCompetition2Id] = useState("");
  const [optionflag, setOptionFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);
  var arrLabels = [];
  var arr1Goals = [];
  var arr2Goals = [];
  var gCount1 = [];
  var gCount2 = [];

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

  gen1Data.forEach(function (gen1Data) {
    arrLabels.push(gen1Data.YEAR);
    arr1Goals.push(gen1Data.GOALS);
    gCount1.push(gen1Data.GAME_COUNT);
  });

  gen2Data.forEach(function (gen2Data) {
    arr2Goals.push(gen2Data.GOALS);
    gCount2.push(gen2Data.GAME_COUNT);
  });

  return (
    <>
      <TopNav />
      <br />
      <Container>
        <h5>
          Trend in the number of goals scored across various competitions{" "}
        </h5>{" "}
        <Row>
          <Col xs={3}>
            <Form.Select
              value={competition1Id}
              aria-label="Default select example"
              onChange={(e) => {
                setCompetition1Id(e.target.value);
                setOptionFlag(true);
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
          {optionflag && (
            <Col xs={3}>
              <Form.Select
                value={competition2Id}
                aria-label="Default select example"
                onChange={(e) => {
                  setCompetition2Id(e.target.value);
                  setButtonFlag(true);
                }}
              >
                <option>Select Competition 2</option>
                {competitionList.length > 0 &&
                  competitionList.map((item, i) => (
                    <option value={item.COMPETITION_ID}>
                      {item.COMPETITION_NAME}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          )}
          {buttonFlag && (
            <Col>
              <Button
                className="gen-btn shadow"
                onClick={() => {
                  axios(`http://localhost:5000/query3/?id=${competition1Id}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGen1Data(response.data.rows);
                      }
                    })
                    .then(() => {})
                    .catch((err) => {});

                  axios(`http://localhost:5000/query3/?id=${competition2Id}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGen2Data(response.data.rows);
                      }
                    })
                    .then(() => {
                      setFlag(true);
                    })
                    .catch((err) => {});
                }}
              >
                Generate
              </Button>
            </Col>
          )}
        </Row>
        {console.log(gen1Data, gen2Data)}
        {flag && (
          <Query3Graph
            labels={arrLabels}
            graph1Data={arr1Goals}
            graph2Data={arr2Goals}
            graph1Count={gCount1}
            graph2Count={gCount2}
            comp1={gen1Data[0].COMPETITION_NAME}
            comp2={gen2Data[0].COMPETITION_NAME}
          />
        )}
      </Container>
    </>
  );
};

export default ClubList;
