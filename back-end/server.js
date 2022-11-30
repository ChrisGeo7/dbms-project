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

app.get("/competitions", (req, res) => {
  async function fetchCompetitions() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT * FROM "CHRISTY.GEORGE".COMPETITION`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchCompetitions()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/competition", (req, res) => {
  async function fetchCompetition() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT * FROM "CHRISTY.GEORGE".${req.query.name} WHERE HOME_CLUB_ID =2441`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchCompetition()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/clubs", (req, res) => {
  async function fetchClubs() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(`SELECT * FROM "CHRISTY.GEORGE".CLUB`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchClubs()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query", (req, res) => {
  async function fetchQuery() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT PLAYER_NAME, SUM(GOALS + ASSISTS) AS GOALS FROM "CHRISTY.GEORGE".APPEARANCE WHERE PLAYER_CLUB_ID = ${req.query.id} GROUP BY PLAYER_NAME `
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchQuery()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query1", (req, res) => {
  async function fetchQuery1() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT EXTRACT(YEAR FROM APPEARANCE_DATE) AS YEAR,  SUM(RED_CARDS) AS RED_CARDS , SUM(YELLOW_CARDS) AS YELLOW_CARDS FROM "CHRISTY.GEORGE".APPEARANCE WHERE APPEARANCE_DATE IS NOT NULL GROUP BY EXTRACT(YEAR FROM APPEARANCE_DATE)  ORDER BY 1`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  fetchQuery1()
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
