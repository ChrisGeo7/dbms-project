const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const PORT = 5000;
const app = express();
oracledb.initOracleClient({ libDir: "C:\\instantclient_21_7" });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/city", (req, res) => {
  async function fetchCity() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(`SELECT * FROM city`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchCity()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
