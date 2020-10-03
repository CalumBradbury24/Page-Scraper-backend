var express = require("express");
var router = new express.Router();

const {
  getTables,
  getPremierLeagueFixtures,
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
  getPremierLeagueFixtures(
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


module.exports = router;
