import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Query2Graph from "./Query2Graph";
import TopNav from "./TopNav";
import "./style.css";

const Query2 = (props) => {
  const [competitionList, setCompetitionList] = useState([]);
  const [clubList, setClubList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  const [genData, setGenData] = useState([]);
  const [competitionId, setCompetitionId] = useState("");
  const [clubId, setClubId] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [clubFlag, setClubFlag] = useState(false);
  const [playerFlag, setPlayerFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [flag, setFlag] = useState(false);
  var arrLabels = [];
  var arrGA = [];
  var arrEMV = [];

  useEffect(() => {
    axios("http://localhost:5000/getcompetitions")
      .then((response) => {
        if (response.status === 200) {
          setCompetitionList(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios(`http://localhost:5000/clubs/?id=${competitionId}`)
      .then((response) => {
        if (response.status === 200) {
          setClubList(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, [competitionId]);

  useEffect(() => {
    axios(`http://localhost:5000/players/?id=${clubId}`)
      .then((response) => {
        if (response.status === 200) {
          setPlayerList(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, [clubId]);

  genData.forEach(function (genData) {
    arrLabels.push(genData.YEAR);
    arrGA.push(genData.GA);
    arrEMV.push(genData.EMV);
  });

  console.log(clubList);

  return (
    <>
      {console.log(playerId)}
      <TopNav />
      <br />
      <Container>
        <h5>
          Trend in the market valuation of players with respect to the number of
          goals or assists made by the player
        </h5>{" "}
        <Row>
          <Col xs={3}>
            <Form.Select
              value={competitionId}
              aria-label="Default select example"
              onChange={(e) => {
                setCompetitionId(e.target.value);
                setClubFlag(true);
              }}
            >
              <option>Select competition</option>
              {competitionList.length > 0 &&
                competitionList.map((item, i) => (
                  <option value={item.COMPETITION_ID}>
                    {item.COMPETITION_NAME}
                  </option>
                ))}
            </Form.Select>
          </Col>
          {clubFlag && (
            <Col xs={3}>
              <Form.Select
                onChange={(e) => {
                  setClubId(e.target.value);
                  setPlayerFlag(true);
                }}
              >
                <option>Select Club</option>
                {clubList.length > 0 &&
                  clubList.map((item, i) => (
                    <option value={item.CLUB_ID}>{item.CLUB_NAME}</option>
                  ))}
              </Form.Select>
            </Col>
          )}
          {playerFlag && (
            <Col xs={3}>
              <Form.Select
                onChange={(e) => {
                  setPlayerId(e.target.value);
                  setButtonFlag(true);
                }}
              >
                <option>Select Player</option>
                {playerList.length > 0 &&
                  playerList.map((item, i) => (
                    <option value={item.PLAYER_ID}>
                      {item.PLAYER_NAME}{" "}
                      <span style={{ marginLeft: "auto", marginRight: "0" }}>
                        {item.AGE}
                      </span>
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
                  axios(`http://localhost:5000/query2/?id=${playerId}`)
                    .then((response) => {
                      if (response.status === 200) {
                        setGenData(response.data.rows);
                      }
                    })
                    .then(() => {
                      setFlag(true);
                    })
                    .catch((err) => {});
                  console.log(playerId);
                }}
              >
                Generate
              </Button>
            </Col>
          )}
        </Row>
        {flag && (
          <Query2Graph labels={arrLabels} graphGA={arrGA} graphEMV={arrEMV} />
        )}
      </Container>
      {console.log(arrLabels, arrGA, arrEMV)}
    </>
  );
};

export default Query2;
