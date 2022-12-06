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
        `SELECT * FROM "CHRISTY.GEORGE".COMPETITION ORDER BY COMPETITION_NAME`
      );
      return data;
      oracledb.close();
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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

app.get("/getcompetitions", (req, res) => {
  async function fetchCompetitions() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT * FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE='domestic_league' ORDER BY COMPETITION_NAME`
      );
      return data;
      oracledb.close();
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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

app.get("/clubs", (req, res) => {
  async function fetchClubs() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT * FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = '${req.query.id}' ORDER BY CLUB_NAME`
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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

app.get("/club", (req, res) => {
  async function fetchClubs() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT CLUB_NAME, CLUB_ID FROM "CHRISTY.GEORGE".CLUB ORDER BY CLUB_NAME ASC`
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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

app.get("/players", (req, res) => {
  async function fetchPlayers() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT PLAYER_NAME, PLAYER_ID, 2022-EXTRACT(YEAR FROM DATE_OF_BIRTH) AS AGE FROM "CHRISTY.GEORGE".PLAYER WHERE CURRENT_CLUB_ID = '${req.query.id}' ORDER BY PLAYER_NAME`
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchPlayers()
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
        `SELECT PLAYER_NAME, SUM(GOALS + ASSISTS) AS GOALS FROM "CHRISTY.GEORGE".APPEARANCE WHERE PLAYER_CLUB_ID = ${req.query.id} GROUP BY PLAYER_NAME  `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
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

app.get("/query2", (req, res) => {
  async function fetchQuery2() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.PLAYER_ID, EXTRACT(YEAR FROM APPEARANCE_DATE) AS YEAR, SUM(GOALS+ASSISTS)AS GA, E.MV/1000000 AS EMV FROM "CHRISTY.GEORGE".APPEARANCE A, (SELECT PLAYER_ID, EXTRACT(YEAR FROM VALUATION_DATE) AS VD, AVG(MARKET_VALUE) MV FROM "CHRISTY.GEORGE".PLAYER_VALUATION GROUP BY PLAYER_ID,  EXTRACT(YEAR FROM VALUATION_DATE)) E WHERE A.PLAYER_ID IN (SELECT PLAYER_ID FROM "CHRISTY.GEORGE".PLAYER WHERE PLAYER_ID ='${req.query.id}') AND A.PLAYER_ID = E.PLAYER_ID AND EXTRACT(YEAR FROM A.APPEARANCE_DATE) =  E.VD GROUP BY A.PLAYER_ID, EXTRACT(YEAR FROM A.APPEARANCE_DATE),E.MV ORDER BY 2
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery2()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query3", (req, res) => {
  async function fetchQuery3() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT COMPETITION_NAME,EXTRACT(YEAR FROM GAME_DATE) YEAR, SUM(HOME_CLUB_GOALS + AWAY_CLUB_GOALS)AS GOALS , COUNT(GAME_ID) AS GAME_COUNT FROM "CHRISTY.GEORGE".GAME,"CHRISTY.GEORGE".COMPETITION WHERE
        COMPETITION_NAME = '${req.query.id}' GROUP BY EXTRACT(YEAR FROM GAME_DATE),COMPETITION_NAME ORDER BY 1`
        // `SELECT EXTRACT(YEAR FROM GAME_DATE) YEAR, SUM(HOME_CLUB_GOALS + AWAY_CLUB_GOALS)AS GOALS , COUNT(GAME_ID) AS GAME_COUNT FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID ='${req.query.id}'  GROUP BY EXTRACT(YEAR FROM GAME_DATE) ORDER BY 1
        // `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery3()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/gb", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'GB1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/gb1", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'GB1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/es1", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'ES1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/l1", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'L1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/it1", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'IT1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query4/fr1", (req, res) => {
  async function fetchQuery4() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT A.YEAR, ROUND(SUM(CG.IS_WIN)*100/COUNT(*),2) AS WINPERCENTAGE FROM "CHRISTY.GEORGE".CLUB_GAMES CG, (SELECT GAME_ID, EXTRACT(YEAR FROM GAME_DATE) AS YEAR FROM "CHRISTY.GEORGE".GAME WHERE COMPETITION_ID IN
        (SELECT COMPETITION_ID FROM "CHRISTY.GEORGE".COMPETITION WHERE COMPETITION_TYPE = 'international_cup'))A WHERE CG.GAME_ID = A.GAME_ID AND CLUB_ID IN (SELECT CLUB_ID FROM "CHRISTY.GEORGE".CLUB WHERE DOMESTIC_COMPETITION_ID = 'FR1') GROUP BY A.YEAR ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery4()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query5", (req, res) => {
  async function fetchQuery5() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT WIN.YR, ROUND(WIN.WON*100/TOT.TOTAL,2) AS WINPERCENTAGE FROM
        (SELECT CLUB_ID, EXTRACT(YEAR FROM GAME_DATE) AS YR, COUNT(*) AS WON FROM "CHRISTY.GEORGE".GAME, (SELECT CLUB_ID, CLUB_NAME FROM "CHRISTY.GEORGE".CLUB) CB WHERE ((HOME_CLUB_ID = CB.CLUB_ID AND HOME_CLUB_GOALS > AWAY_CLUB_GOALS) OR (AWAY_CLUB_ID = CB.CLUB_ID AND HOME_CLUB_GOALS < AWAY_CLUB_GOALS)) GROUP BY CLUB_ID, EXTRACT(YEAR FROM GAME_DATE)) WIN,
        (SELECT CLUB_ID, EXTRACT(YEAR FROM GAME_DATE) AS YR, COUNT(*) AS TOTAL  FROM "CHRISTY.GEORGE".GAME, (SELECT CLUB_ID, CLUB_NAME FROM "CHRISTY.GEORGE".CLUB) CB WHERE HOME_CLUB_ID = CB.CLUB_ID OR AWAY_CLUB_ID = CB.CLUB_ID GROUP BY CLUB_ID, EXTRACT(YEAR FROM GAME_DATE)) TOT
        WHERE WIN.CLUB_ID = TOT.CLUB_ID AND WIN.YR = TOT.YR AND WIN.CLUB_ID = ${req.query.id} ORDER BY 1
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery5()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/query6", (req, res) => {
  async function fetchQuery6() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `select EXTRACT(year from appearance_date) as year, "CHRISTY.GEORGE".player.player_name, sum(goals+assists) from (select EXTRACT(year from appearance_date) as year, player_id, sum(goals+assists) from "CHRISTY.GEORGE".player
        natural join "CHRISTY.GEORGE".appearance where EXTRACT(year from appearance_date) - EXTRACT(year from date_of_birth) >=22 and
        country_of_citizenship = 'England' and EXTRACT(year from appearance_date) - EXTRACT(year from date_of_birth) <=25 group by EXTRACT(year from appearance_date), player_id having EXTRACT(year from appearance_date)=2015  order by 1,3 desc fetch first 5 rows only) A, "CHRISTY.GEORGE".player, "CHRISTY.GEORGE".appearance
        where
        "CHRISTY.GEORGE".player.player_id = A.player_id and "CHRISTY.GEORGE".player.player_id = "CHRISTY.GEORGE".appearance.player_id
        group by EXTRACT(year from appearance_date),"CHRISTY.GEORGE".player.player_name having EXTRACT(year from appearance_date) >= 2015 order by 1
        
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchQuery6()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/count", (req, res) => {
  async function fetchCount() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "omkarparab",
        password: "8HiVpVxMCvT6eumbL3Esnzi3",
        connectionString: "oracle.cise.ufl.edu/orcl",
      });

      const data = await con.execute(
        `SELECT SUM(PCOUNT) AS TCOUNT FROM (SELECT COUNT(*) AS PCOUNT FROM "CHRISTY.GEORGE".PLAYER A
        UNION ALL
        SELECT COUNT(*)  FROM "CHRISTY.GEORGE".APPEARANCE B
        UNION ALL
        SELECT COUNT(*)  FROM "CHRISTY.GEORGE".PLAYER_VALUATION C
        UNION ALL
        SELECT COUNT(*)  FROM "CHRISTY.GEORGE".CLUB D
        UNION ALL
        SELECT COUNT(*)  FROM "CHRISTY.GEORGE".GAME F
        UNION ALL
        SELECT COUNT(*)  FROM "CHRISTY.GEORGE".CLUB_GAMES G)
        `
      );
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  fetchCount()
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
