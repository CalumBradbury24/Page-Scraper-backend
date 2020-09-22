const reqProm = require("request-promise");
const cheerio = require("cheerio"); //JQuery implementation for parsing HTML
const axios = require("axios");
const results = "https://www.premierleague.com/tables";
const premierLeague = []; //Prem league table
const Checks = require('./utils');
//Store resulting array in mongodb atlas (posted from a server.js file), and then call it from front end 

//Get football data for table
axios(results)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const premTable = $(".tableBodyContainer > tr");//Table scraped

    //iterate over html
    premTable.each(function () {
      const position = $(this).find(".value").text();
      const teamName = $(this).find(".long").text();
      const teamBadge = $(this).find(".badge-image").attr("src");//Select the src attribute
      const points = $(this).find(".points").text();

      if (Checks(position, premierLeague)) {
        premierLeague.push({ position, teamName, teamBadge, points });
      }
    });
    console.log(premierLeague);
  })
  .catch(console.error);
/*
const checks = (element) => {
  if (checkEmptyStrings(element)) {
    if (checkElement(element)) {
      return true;
    }
  }
  return false;
};

const checkElement = (elementToCheck) => {
  for (var i = 0; i < premierLeague.length; i++) {
    if (premierLeague[i].position === elementToCheck) {
      return false;
    }
  }
  return true;
};

const checkEmptyStrings = (element) => {
  if (element === "") {
    return false;
  }
  return true;
};
*/