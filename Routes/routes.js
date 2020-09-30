var express = require("express");
var router = new express.Router();

const {
  getPremierLeagueTable,
  getPremierLeagueFixtures,
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
