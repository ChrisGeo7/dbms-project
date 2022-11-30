import React, { useEffect, useState } from "react";
import axios from "axios";
import LineGraph from "./LineGraph";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const ClubList = (props) => {
  const [data, setData] = React.useState([]);
  const [genData, setGenData] = useState([]);
  const [clubId, setClubId] = useState();
  const [labels, setlabels] = useState([]);
  const [flag, setFlag] = useState(false);
  var arrLabels = [];
  var arrData = [];
  React.useEffect(() => {
    axios("http://localhost:5000/clubs")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  genData.forEach(function (genData) {
    arrLabels.push(genData.PLAYER_NAME);
    arrData.push(genData.GOALS);
  });

  //   function generateGraph() {
  //     return <LineGraph labels={arrLabels} graphData={arrData} />;
  //   }

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setClubId(e.target.value);
                // console.log("target", e.target.value);
                // console.log(clubId);
              }}
            >
              <option>Select Club</option>
              {data.length > 0 &&
                data.map((item, i) => (
                  <option value={item.CLUB_ID}>{item.CLUB_NAME}</option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                axios(`http://localhost:5000/query/?id=${clubId}`)
                  .then((response) => {
                    if (response.status === 200) {
                      setGenData(response.data.rows);
                    }
                  })
                  .then(() => {
                    setFlag(true);
                  })
                  .catch((err) => {});

                console.log(clubId);
              }}
            >
              Generate
            </Button>
          </Col>
        </Row>
      </Container>
      {console.log(genData)}
      {flag && <LineGraph labels={arrLabels} graphData={arrData} />}
    </>
  );
};

export default ClubList;
