import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Query5Graph from "./Query5Graph";
import TopNav from "./TopNav";

const Query5 = (props) => {
  const [clubList, setClubList] = useState([]);
  const [gen1Data, setGen1Data] = useState([]);
  const [gen2Data, setGen2Data] = useState([]);
  const [optionflag, setOptionFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [club1Id, setClub1Id] = useState("");
  const [club2Id, setClub2Id] = useState("");
  var arrLabels = [];
  var arr1 = [];
  var arr2 = [];

  useEffect(() => {
    axios("http://localhost:5000/club")
      .then((response) => {
        if (response.status === 200) {
          setClubList(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  gen1Data.forEach(function (gen1Data) {
    arrLabels.push(gen1Data.YR);
    arr1.push(gen1Data.WINPERCENTAGE);
  });

  gen2Data.forEach(function (gen2Data) {
    arr2.push(gen2Data.WINPERCENTAGE);
  });
  return (
    <>
      <TopNav />
      <br />
      <Container>
        <h5>
          Comparison Graph of win percentages between two different clubs{" "}
        </h5>{" "}
        <Row>
          <Col xs={3}>
            <Form.Select
              value={club1Id}
              onChange={(e) => {
                setClub1Id(e.target.value);
                setOptionFlag(true);
              }}
            >
              <option>Select Club 1</option>
              {clubList.length > 0 &&
                clubList.map((item, i) => (
                  <option value={item.CLUB_ID}>{item.CLUB_NAME}</option>
                ))}
            </Form.Select>
          </Col>
          {optionflag && (
            <Col xs={3}>
              <Form.Select
                value={club2Id}
                onChange={(e) => {
                  setClub2Id(e.target.value);
                  setButtonFlag(true);
                }}
              >
                <option>Select Club 2</option>
                {clubList.length > 0 &&
                  clubList.map((item, i) => (
                    <option value={item.CLUB_ID}>{item.CLUB_NAME}</option>
                  ))}
              </Form.Select>
            </Col>
          )}
          {buttonFlag && (
            <Col>
              <Button
                onClick={() => {
                  axios(`http://localhost:5000/query5/?id=${club1Id}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGen1Data(response.data.rows);
                      }
                    })
                    .then(() => {})
                    .catch((err) => {});

                  axios(`http://localhost:5000/query5/?id=${club2Id}`)
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
          <Query5Graph labels={arrLabels} graph1Data={arr1} graph2Data={arr2} />
        )}
      </Container>
    </>
  );
};

export default Query5;
