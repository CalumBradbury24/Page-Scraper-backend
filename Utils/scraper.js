const cheerio = require("cheerio"); //JQuery implementation for parsing HTML
const axios = require("axios");
const { Clean, cleanTeams } = require("./utils");

//Championship, league 1, league 2 tables
const getTables = async (url, callback) => {
  const Table = [];
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const result = $("tbody > tr");

      result.each(function () {
        let position = $(this).find(".table-column--sub").text();
        let team = cleanTeams($(this).find("a").text());
        let teamBadge = $(this).find(".team-crest").attr("src"); //Select the src attribute
        let points = $(this).find("b").text();

        Table.push({ position, team, teamBadge, points });
      });
    })
    .catch((error) => console.log(error));
  callback(null, Table); //Callback function
};

const getPremierLeagueFixtures = async (url, callback) => {
  const Premfixtures = []; //prem fixture results
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const result = $(".table-grouping > table"); //Table scraped

      result.each(function () {
        const date = $(this).find("th").text();
        const Teams = $(this).find("a").text();
        let upcomingFixtures = Clean(Teams);

        Premfixtures.push({ date, upcomingFixtures });
      });

      //console.log(fixtureHistory[1].cleanedTeams[3]);
    })
    .catch((error) => console.log(error));
  callback(null, Premfixtures); //Callback function
};


/*
const getChampionshipFixtures = () => {
  const Fixtures = []; //prem fixture results
  axios
    .get('https://www.theguardian.com/football/championship/fixtures')
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const result = $("tbody > tr"); //Table scraped

      result.each(function () {
        let time = $(this).find("time").attr("datetime"); //Select the src attribute
        let Team1 = $(this).find(".team-name__long").text();
       // let upcomingFixtures = Clean(Teams);

        Fixtures.push({ time, Team1 });
      });

      console.log(Fixtures);
    })
    .catch((error) => console.log(error));
 // callback(null, PremfixtureHistory); //Callback function
};

getChampionshipFixtures();
*/

module.exports = {
  getTables,
  getPremierLeagueFixtures,
};
