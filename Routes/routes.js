var express = require("express");
var router = new express.Router();

const {
  getPremierLeagueTable,
  getPremierLeagueFixtures,
  getChampionshipTable,
  getLeagueOneTable,
  getLeagueTwoTable
} = require("../Utils/scraper");

router.get("/premierleague", (req, res) => {
  getPremierLeagueTable("https://www.premierleague.com/tables", (err, arr) => {
    if (err) {
      res.send("error");
      return;
    }
    res.send(arr);
  });
});

router.get("/championship", (req, res) => {
  getChampionshipTable(
    "https://www.theguardian.com/football/championship/table",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leagueOne", (req, res) => {
  getLeagueOneTable(
    "https://www.theguardian.com/football/leagueonefootball/table",
    (err, arr) => {
      if (err) {
        res.send("error");
        return;
      }
      res.send(arr);
    }
  );
});

router.get("/leagueTwo", (req, res) => {
  getLeagueTwoTable(
    "https://www.theguardian.com/football/leaguetwofootball/table",
    (err, arr) => {
      if (err) {
        res.send("error");
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
