import React from "react";
import axios from "axios";

const CityList = (props) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios("http://localhost:5000/city")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.rows);
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <h1>City List Component</h1>
      {/* {console.log(data)} */}
      {data.length > 0 && data.map((item, i) => <div key={i}>{item.NAME}</div>)}
    </div>
  );
};

export default CityList;
