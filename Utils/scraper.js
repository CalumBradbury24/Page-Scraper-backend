const cheerio = require("cheerio"); //JQuery implementation for parsing HTML
const axios = require("axios");
const { cleanTeams, cleanFixtures } = require("./utils");

const getTables = async (url, callback) => {
  const Table = [];
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const result = $("tbody > tr");
      let key = 0;
      result.each(function () {
        let position = $(this).find(".table-column--sub").text();
        let team = cleanTeams($(this).find("a").text());
        let teamBadge = $(this).find(".team-crest").attr("src"); //Select the src attribute
        let points = $(this).find("b").text();
        key++;
        Table.push({ key, position, team, teamBadge, points });
      });
    })
    .catch((error) => console.log(error));
  callback(null, Table); //Callback function
};

const getFixtures = async (url, callback) => {
  const Fixtures = []; //fixture results
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const result = $(".table-grouping > table"); //Table scraped
      let key = 0;
      result.map(function () {
        const date = $(this).find("th").text();
        const Teams = $(this).find("a").text();
        let upcomingFixtures = cleanFixtures(Teams);
        key++;
        Fixtures.push({ key, date, upcomingFixtures });
      });

      //  console.log(Fixtures, Fixtures[0].upcomingFixtures);
    })
    .catch((error) => console.log(error));
  callback(null, Fixtures); //Callback function
};

module.exports = {
  getTables,
  getFixtures,
};
