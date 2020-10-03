//Utility functions for modifying html

const Clean = (string) => {
  let newString = string.replace(/Match page/g, ","); //Remove useless text
  newString = returnModStrings(newString, "prem"); //Replace strings
  let tempArray = newString.split(","); //Split into arrays
  let teamsArray = tempArray.filter(function (string) {
    //Remove indexes with ""
    return string !== "";
  });

  let resultArray = [],
  finalArray = [];
  for (let i = 0; i < teamsArray.length; ++i) {
    resultArray[i] = teamsArray[i].split(" "); //Split into smaller arrays
    finalArray[i] = resultArray[i].filter(function (string) {
      return string !== ""; //remove indexes with empty strings
    });
  }
  return finalArray;
};

const cleanTeams = (team) => {
  let newteam = returnModStrings(team, "lowerLeagues");
  return newteam;
};

const returnModStrings = (newString, league) => {
  newString = newString.replace(/(\r\n|\n|\r|\t)/g, "");

  if (league === "prem") {
    newString = newString.replace(/Arsenal/g, " Arsenal ");
    newString = newString.replace(/Brighton and Hove Albion/g, " Brighton ");
    newString = newString.replace(/Burnley/g, " Burnley ");
    newString = newString.replace(/Crystal Palace/g, " Crystal_Palace ");
    newString = newString.replace(/West Bromwich Albion/g, " West_Brom ");
    newString = newString.replace(/Chelsea/g, " Chelsea ");
    newString = newString.replace(/Southampton/g, " Southampton ");
    newString = newString.replace(/Sheffield United/g, " Sheffield_United ");
    newString = newString.replace(/Leeds United/g, " Leeds_United ");
    newString = newString.replace(/Tottenham Hotspur/g, " Tottenham ");
    newString = newString.replace(/Newcastle United/g, " Newcastle ");
    newString = newString.replace(/Manchester City/g, " Manchester_City ");
    newString = newString.replace(/Leicester City/g, " Leicester ");
    newString = newString.replace(/West Ham United/g, " West_Ham ");
    newString = newString.replace(/Wolverhampton Wanderers/g, " Wolves ");
    newString = newString.replace(/Fulham/g, " Fulham ");
    newString = newString.replace(/Aston Villa/g, " Aston_Villa ");
    newString = newString.replace(/Liverpool/g, " Liverpool ");
    newString = newString.replace(/Everton/g, " Everton ");
    newString = newString.replace(/Manchester United/g, " Manchester_United ");
  } else if (league == "lowerLeagues") {
    newString = newString.replace(/Sheff Wed/g, "Sheffield Wednesday");
    newString = newString.replace(/Nottm Forest/g, "Nottingham Forest");
    newString = newString.replace(/Burton A/g, "Burton Albion");
  }
  return newString;
};

module.exports = {
  Clean,
  cleanTeams,
};
