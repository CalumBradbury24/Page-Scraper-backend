var express = require("express");
var router = new express.Router();

const {
  getTables,
  getFixtures
} = require("../Utils/scraper");

router.get("/premierleague", (req, res) => {
  getTables("https://www.theguardian.com/football/premierleague/table", (err, arr) => {
    if (err) {
      res.status(404).send("error");
      return;
    }
    res.send(arr);
  });
});

router.get("/championship", (req, res) => {
  getTables(
    "https://www.theguardian.com/football/championship/table",
    (err, arr) => {
      if (err) {
        res.status(404).send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leagueOne", (req, res) => {
  getTables(
    "https://www.theguardian.com/football/leagueonefootball/table",
    (err, arr) => {
      if (err) {
        res.status(404).send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leagueTwo", (req, res) => {
  getTables(
    "https://www.theguardian.com/football/leaguetwofootball/table",
    (err, arr) => {
      if (err) {
        res.status(404).send("error");
        return;
      }
      res.send(arr);
    }
  );
})

router.get("/premierleaguefixtures", (req, res) => {
  getFixtures(
    "https://talksport.com/football/premier-league/fixtures/",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/championshipfixtures", (req, res) => {
  getFixtures(
    "https://talksport.com/football/efl/championship/fixtures/",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leagueonefixtures", (req, res) => {
  getFixtures(
    "https://talksport.com/football/efl/league-one/fixtures/",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leaguetwofixtures", (req, res) => {
  getFixtures(
    "https://talksport.com/football/efl/league-two/fixtures/",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});


module.exports = router;
