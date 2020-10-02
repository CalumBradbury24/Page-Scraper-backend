const cheerio = require("cheerio"); //JQuery implementation for parsing HTML
const axios = require("axios");
const { Checks, Clean, cleanTeams } = require("./utils");

const getPremierLeagueTable = async (url, callback) => {
  const premierLeague = []; //Prem league table
  await axios //wait for get request to complete before continuing
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const premTable = $(".tableBodyContainer > tr"); //trs in tableBodyContainer class

      //iterate over html
      premTable.each(function () {
        const position = $(this).find(".value").text();
        const teamName = $(this).find(".long").text();
        const teamBadge = $(this).find(".badge-image").attr("src"); //Select the src attribute
        const points = $(this).find(".points").text();

        if (Checks(position, premierLeague)) {
          premierLeague.push({
            position,
            teamName,
            teamBadge,
            points,
          });
        }
        
      });
    })
    .catch((error) => console.log(error));

  callback(null, premierLeague); //Callback function
};

const getChampionshipTable = async (url, callback) => {
  const champTable = [];
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

        champTable.push({ position, team, teamBadge, points });
      });
    })
    .catch((error) => console.log(error));
  callback(null, champTable); //Callback function
};

const getLeagueOneTable = async (url, callback) => {
  const leagueOneTable = [];
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
       
        leagueOneTable.push({ position, team, teamBadge, points });
        
      });
    
    })
  
    .catch((error) => console.log(error));
    callback(null, leagueOneTable); //Callback function
};

const getLeagueTwoTable = async (url, callback) => {
  const leagueTwoTable = [];
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
        
        leagueTwoTable.push({ position, team, teamBadge, points });
        
      });
    
    })
  
    .catch((error) => console.log(error));
    callback(null, leagueTwoTable); //Callback function
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
  const PremfixtureHistory = []; //prem fixture results
  axios
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
*/



module.exports = {
  getPremierLeagueTable,
  getPremierLeagueFixtures,
  getChampionshipTable,
  getLeagueOneTable,
  getLeagueTwoTable
};
