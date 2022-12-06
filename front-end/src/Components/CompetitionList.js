import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const CompetitionList = (props) => {
  const [data, setData] = React.useState([]);
  const [genData, setGenData] = useState([]);
  const [labels, setlabels] = useState([]);
  var arrLabels = [];
  var arrData = [];
  React.useEffect(() => {
    axios("http://localhost:5000/competitions")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.rows);
        }
      })
      .then(() => {})
      .catch((err) => {});
  }, []);

  data.forEach(function (data) {
    arrLabels.push(data.COMPETITION_NAME);
    arrData.push(data.COUNTRY_ID);
    // console.log(arrLabels);
  });

  // useEffect(() => {
  //   data.length > 0 &&
  //     data.map((item, i) => {
  //       // arrLabels = [...labels];
  //       // arrLabels.push(item.COMPETITION_NAME);
  //       // setlabels(arrLabels);
  //       setlabels((prevItems) => {
  //         return [...prevItems, item.COMPETITION_NAME];
  //       });
  //     });
  // });

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                // console.log(e.target.value);
                const c = data?.find(
                  (x) => x.COMPETITION_ID === e.target.value
                );
                console.log(c);
              }}
            >
              <option>Select League</option>
              {data.length > 0 &&
                data.map((item, i) => (
                  <option value={item.COMPETITION_ID}>
                    {item.COMPETITION_NAME}
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                axios(`http://localhost:5000/competition/?name=Game`)
                  .then((response) => {
                    if (response.status === 200) {
                      setGenData(response.data.rows);
                    }
                  })
                  .then(() => {})
                  .catch((err) => {});
              }}
            >
              Generate
            </Button>
          </Col>
        </Row>
      </Container>
      {console.log(genData)}
      {/* <LineGraph labels={arrLabels} graphData={arrData} />; */}
    </>
  );
};

export default CompetitionList;
