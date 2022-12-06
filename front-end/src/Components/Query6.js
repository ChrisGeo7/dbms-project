import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Query6Graph from "./Query6Graph";
import TopNav from "./TopNav";
import "./style.css";

const Query6 = (props) => {
  const [clubList, setClubList] = useState([]);

  const [gen1Data, setGen1Data] = useState([]);
  const [gen2Data, setGen2Data] = useState([]);
  const [optionflag, setOptionFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [clubId, setClubId] = useState("");

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
    arrLabels.push(gen1Data.SEASON);
    arr1.push(gen1Data.WINPER);
  });

  gen2Data.forEach(function (gen2Data) {
    arr2.push(gen2Data.WINPER);
  });
  return (
    <>
      <TopNav />
      <br />
      <Container>
        <h5>Home/Away performance of a club over the years. </h5>{" "}
        <Row>
          <Col xs={3}>
            <Form.Select
              value={clubId}
              onChange={(e) => {
                setClubId(e.target.value);
                setButtonFlag(true);
              }}
            >
              <option>Select Club</option>
              {clubList.length > 0 &&
                clubList.map((item, i) => (
                  <option value={item.CLUB_NAME}>{item.CLUB_NAME}</option>
                ))}
            </Form.Select>
          </Col>
          {buttonFlag && (
            <Col>
              <Button
                className="gen-btn shadow"
                onClick={() => {
                  axios(`http://localhost:5000/query61/?id=${clubId}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGen1Data(response.data.rows);
                      }
                    })
                    .then(() => {})
                    .catch((err) => {});

                  axios(`http://localhost:5000/query62/?id=${clubId}`)
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
        {console.log(arr1, arr2)}
        {flag && (
          <Query6Graph labels={arrLabels} graph1Data={arr1} graph2Data={arr2} />
        )}
      </Container>
    </>
  );
};

export default Query6;
