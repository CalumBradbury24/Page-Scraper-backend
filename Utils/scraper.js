const cheerio = require("cheerio"); //JQuery implementation for parsing HTML
const axios = require("axios");
const { Checks, Clean } = require("./utils");

//const table = "https://www.premierleague.com/tables";
//const fixtures = "https://talksport.com/football/premier-league/fixtures/";
//const championshipTable ='https://talksport.com/football/efl/championship/table/';
//const championship = []; //championship table
//const championshipFixtureHistory = [];

const getPremierLeagueTable = async (url, callback) => {
  const premierLeague = []; //Prem league table
  await axios //wait for get request to complete before continuing
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const premTable = $(".tableBodyContainer > tr"); //Table scraped

      //iterate over html
      premTable.each(function () {
        const position = $(this).find(".value").text();
        const teamName = $(this).find(".long").text();
        const teamBadge = $(this).find(".badge-image").attr("src"); //Select the src attribute
        const points = $(this).find(".points").text();
        const nextOpponent = $(this).find(".visuallyHidden").text();

        if (Checks(position, premierLeague)) {
          premierLeague.push({
            position,
            teamName,
            teamBadge,
            points,
            nextOpponent,
          });
        }
      });
    })
    .catch((error) => console.log(error));

  callback(null, premierLeague); //Callback function
};

const getPremierLeagueFixtures = async (url, callback) => {
  const PremfixtureHistory = []; //prem fixture results
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

        PremfixtureHistory.push({ date, upcomingFixtures });
      });

      //console.log(fixtureHistory[1].cleanedTeams[3]);
    })
    .catch((error) => console.log(error));
  callback(null, PremfixtureHistory); //Callback function
};

module.exports = {
  getPremierLeagueTable,
  getPremierLeagueFixtures,
};
