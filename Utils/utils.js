//Utility functions for modifying html
const cleanTeams = (team) => {
  let newteam = returnModStrings(team);
  return newteam;
};

const cleanFixtures = (team) => {
  let string = returnModFixtureStrings(team); //Replace strings
  let fixturesArray = [];
  string = string.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g); //put commas at every second whitespace

  for (let i = 0; i < string.length; ++i) {
    fixturesArray[i] = string[i].split(" ");
    for (let j = 0; j < 2; ++j) {
      if (fixturesArray[i][j] === undefined) {
        fixturesArray[i][j] = "undefined team";
      }
    }
  }

  for (let i = 0; i < fixturesArray.length; ++i) {
    for (let j = 0; j < 2; ++j) {
      fixturesArray[i][j] = fixturesArray[i][j].replace(/_/g, " ");
      // console.log(fixturesArray[i][j])
    }
  }

  // console.log(fixturesArray[0][1]);
  return fixturesArray;
};

const returnModStrings = (newString) => {
  newString = newString.replace(/(\r\n|\n|\r|\t)/g, "");

  newString = newString.replace(/Arsenal/g, " Arsenal ");
  newString = newString.replace(/Brighton and Hove Albion/g, " Brighton ");
  newString = newString.replace(/Burnley/g, " Burnley ");
  newString = newString.replace(/C Palace/g, " Crystal Palace ");
  newString = newString.replace(/West Bromwich Albion/g, " West Brom ");
  newString = newString.replace(/Chelsea/g, " Chelsea ");
  newString = newString.replace(/Southampton/g, " Southampton ");
  newString = newString.replace(/Sheff Utd/g, " Sheffield United ");
  newString = newString.replace(/Leeds United/g, " Leeds United ");
  newString = newString.replace(/Tottenham Hotspur/g, " Tottenham ");
  newString = newString.replace(/Newcastle United/g, " Newcastle ");
  newString = newString.replace(/Man City/g, " Manchester City ");
  newString = newString.replace(/Leicester City/g, " Leicester ");
  newString = newString.replace(/West Ham United/g, " West Ham ");
  newString = newString.replace(/Wolverhampton Wanderers/g, " Wolves ");
  newString = newString.replace(/Fulham/g, " Fulham ");
  newString = newString.replace(/Aston Villa/g, " Aston Villa ");
  newString = newString.replace(/Liverpool/g, " Liverpool ");
  newString = newString.replace(/Everton/g, " Everton ");
  newString = newString.replace(/Man Utd/g, " Manchester United ");
  newString = newString.replace(/Norwich/g, " Norwich ");

  newString = newString.replace(/Derby/g, " Derby ");
  newString = newString.replace(/Cardiff/g, " Cardiff ");
  newString = newString.replace(/Luton/g, " Luton ");
  newString = newString.replace(/Wycombe/g, " Wycombe ");
  newString = newString.replace(/Middlesbrough/g, " Middlesbrough ");
  newString = newString.replace(/Barnsley/g, " Barnsley ");
  newString = newString.replace(/Bristol City/g, " Bristol City ");
  newString = newString.replace(/Reading/g, " Reading ");
  newString = newString.replace(/Watford/g, " Watford ");
  newString = newString.replace(/Rotherham/g, " Rotherham ");
  newString = newString.replace(/Huddersfield/g, " Huddersfield ");
  newString = newString.replace(/QPR/g, " QPR ");
  newString = newString.replace(/Swansea/g, " Swansea ");
  newString = newString.replace(/Millwall/g, " Millwall ");
  newString = newString.replace(/Brentford/g, " Brentford ");
  newString = newString.replace(/Preston North End/g, " Preston North End ");
  newString = newString.replace(/Stoke/g, " Stoke ");
  newString = newString.replace(/Birmingham/g, " Birmingham ");
  newString = newString.replace(/Derby/g, " Derby ");
  newString = newString.replace(/AFC Bournemouth/g, " Bournemouth ");
  newString = newString.replace(/Norwich/g, " Norwich ");
  newString = newString.replace(/Sheff Wed/g, " Sheffield Wednesday ");
  newString = newString.replace(/Nottm Forest/g, " Nottingham Forest ");
  newString = newString.replace(/Burton A/g, " Burton Albion ");
  return newString;
};

const returnModFixtureStrings = (newString) => {
  newString = newString.replace(/(\r\n|\n|\r|\t)/g, "");
  newString = newString.replace(/Match page/g, "");

  //premiership
  newString = newString.replace(/Arsenal/g, "Arsenal ");
  newString = newString.replace(/Brighton and Hove Albion/g, "Brighton ");
  newString = newString.replace(/Burnley/g, "Burnley ");
  newString = newString.replace(/Crystal Palace/g, "Crystal_Palace ");
  newString = newString.replace(/West Bromwich Albion/g, "West_Brom ");
  newString = newString.replace(/Chelsea/g, "Chelsea ");
  newString = newString.replace(/Southampton/g, "Southampton ");
  newString = newString.replace(/Sheffield United/g, "Sheffield_United ");
  newString = newString.replace(/Leeds United/g, "Leeds_United ");
  newString = newString.replace(/Tottenham Hotspur/g, "Tottenham_Hotspur ");
  newString = newString.replace(/Newcastle United/g, "Newcastle_United ");
  newString = newString.replace(/Manchester City/g, "Manchester_City ");
  newString = newString.replace(/Leicester City/g, "Leicester_City ");
  newString = newString.replace(/West Ham United/g, "Westham_United ");
  newString = newString.replace(/Wolverhampton Wanderers/g, "Wolves ");
  newString = newString.replace(/Fulham/g, "Fulham ");
  newString = newString.replace(/Aston Villa/g, "Aston_Villa ");
  newString = newString.replace(/Liverpool/g, "Liverpool ");
  newString = newString.replace(/Everton/g, "Everton ");
  newString = newString.replace(/Manchester United/g, "Manchester_United ");
  //championship
  newString = newString.replace(/Derby County/g, "Derby_County ");
  newString = newString.replace(/Cardiff City/g, "Cardiff_City ");
  newString = newString.replace(/Luton Town/g, "Luton_Town ");
  newString = newString.replace(/Wycombe Wanderers/g, "Wycombe_Wanderers ");
  newString = newString.replace(/Middlesbrough/g, "Middlesbrough ");
  newString = newString.replace(/Barnsley/g, "Barnsley ");
  newString = newString.replace(/Bristol City/g, "Bristol_City ");
  newString = newString.replace(/Reading/g, "Reading ");
  newString = newString.replace(/Watford/g, "Watford ");
  newString = newString.replace(/Rotherham United/g, "Rotherham ");
  newString = newString.replace(/Huddersfield Town/g, "Huddersfield_Town ");
  newString = newString.replace(/Queens Park Rangers/g, "QPR ");
  newString = newString.replace(/Swansea City/g, "Swansea_City ");
  newString = newString.replace(/Millwall/g, "Millwall ");
  newString = newString.replace(/Brentford/g, "Brentford ");
  newString = newString.replace(/Preston North End/g, "Preston_North_End ");
  newString = newString.replace(/Stoke City/g, "Stoke_City ");
  newString = newString.replace(/Birmingham City/g, "Birmingham ");
  newString = newString.replace(/Bournemouth/g, "Bournemouth ");
  newString = newString.replace(/Norwich City/g, "Norwich_City ");
  newString = newString.replace(/Blackburn Rovers/g, "Blackburn_Rovers ");
  newString = newString.replace(/Sheffield Wednesday/g, "Sheffield_Wednesday ");
  newString = newString.replace(/Nottingham Forest/g, "Nottingham_Forest ");
  newString = newString.replace(/Coventry City/g, "Coventry_City ");

  //league one
  newString = newString.replace(/MK Dons/g, "MK_Dons ");
  newString = newString.replace(/Gillingham/g, "Gillingham ");
  newString = newString.replace(/AFC Wimbledon/g, "AFC_Wimbledon ");
  newString = newString.replace(/Shrewsbury Town/g, "Shrewsbury ");
  newString = newString.replace(/Bristol Rovers/g, "Bristol_Rovers ");
  newString = newString.replace(/Burton Albion/g, "Burton_Albion ");
  newString = newString.replace(/Charlton Athletic/g, "Charlton_Athletic ");
  newString = newString.replace(/Wigan Athletic/g, "Wigan_Athletic ");
  newString = newString.replace(/Crewe Alexandra/g, "Crewe_Alexandra ");
  newString = newString.replace(/Blackpool/g, "Blackpool ");
  newString = newString.replace(/Fleetwood Town/g, "Fleetwood_Town ");
  newString = newString.replace(/Lincoln City/g, "Lincoln_City ");
  newString = newString.replace(/Ipswich Town/g, "Ipswich_Town ");
  newString = newString.replace(/Accrington Stanley/g, "Accrington_Stanley ");
  newString = newString.replace(/Peterborough United/g, "Peterborough_United ");
  newString = newString.replace(/Oxford United/g, "Oxford_United ");
  newString = newString.replace(/Plymouth Argyle/g, "Plymouth_Argyle ");
  newString = newString.replace(/Northampton Town/g, "Northampton_Town ");
  newString = newString.replace(/Portsmouth/g, "Portsmouth ");
  newString = newString.replace(/Doncaster Rovers/g, "Doncaster_Rovers ");
  newString = newString.replace(/Rochdale/g, "Rochdale ");
  newString = newString.replace(/Hull City/g, "Hull_City ");
  newString = newString.replace(/Swindon Town/g, "Swindon_Town ");
  newString = newString.replace(/Sunderland/g, "Sunderland ");
  newString = newString.replace(/Coventry City/g, "Coventry_City ");
  newString = newString.replace(/Burton A/g, "Burton_Albion ");

  //league two
  newString = newString.replace(/Bolton Wanderers/g, "Bolton ");
  newString = newString.replace(/Oldham Athletic/g, "Oldham ");
  newString = newString.replace(/Carlisle United/g, "Carlisle ");
  newString = newString.replace(/Colchester United/g, "Colchester ");
  newString = newString.replace(/Crawley Town/g, "Crawley ");
  newString = newString.replace(/Morecambe/g, "Morecambe ");
  newString = newString.replace(/Forest Green Rovers/g, "FGR ");
  newString = newString.replace(/Stevenage/g, "Stevenage ");
  newString = newString.replace(/Barrow/g, "Barrow ");
  newString = newString.replace(/Mansfield Town/g, "Mansfield ");
  newString = newString.replace(/Bradford City/g, "Bradford_City ");
  newString = newString.replace(/Newport County/g, "Newport_County ");
  newString = newString.replace(/Tranmere Rovers/g, "Tranmere Rovers ");
  newString = newString.replace(/Port Vale/g, "Port_Vale ");
  newString = newString.replace(/Salford City/g, "Salford ");
  newString = newString.replace(/Scunthorpe United/g, "Scunthorpe ");
  newString = newString.replace(/Cambridge United/g, "Cambridge ");
  newString = newString.replace(/Southend United/g, "Southend ");
  newString = newString.replace(/Cheltenham Town/g, "Cheltenham ");
  newString = newString.replace(/Walsall/g, "Walsall ");
  newString = newString.replace(/Exeter City/g, "Exeter_City ");
  newString = newString.replace(/Leyton Orient/g, "Leyton_Orient ");
  newString = newString.replace(/Grimsby Town/g, "Grimsby ");
  newString = newString.replace(/Burton A/g, "Burton_Albion ");
  return newString;
};

module.exports = {
  cleanTeams,
  cleanFixtures,
};
