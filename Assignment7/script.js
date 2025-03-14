const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];


let countires_length = countries.length;

let count = 0;
for (let i = 0; i < countires_length; i++) {

  if (countries[i].length > 7) {
    document.getElementById("display1").innerHTML = "<h3>Countries with more than 7 characters: </h3>" + countries[i] + "<br>";
  }
}

let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesWithLand.push(countries[i]);

    document.getElementById("display2").innerHTML = "<h3>Countries with 'land' in their names:</h3>" + countriesWithLand.join("<br>");

  }
}


let pos;

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 6) {
    document.getElementById("display3").innerHTML = "First country with 6 characters: " + countries[i] + "<br>" + "Position of the country: " + i;

    pos = i;
    break; 
  }
}


let E_Array = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].startsWith("E")) {
    E_Array.push(countries[i]);
  }
}

document.getElementById("display4").innerHTML = "<h3>Countries that start with 'E': </h3>" + E_Array.join("<br>");


function categorizeCountries() {

  let pattern_land = [];
  let pattern_ia = [];
  let pattern_ialand = [];
  let pattern_stan = [];

  for (let i = 0; i < countries.length; i++) {

    if (countries[i].toLowerCase().includes("land")) {
      pattern_land.push(countries[i]);
    }

    if (countries[i].toLowerCase().includes("ia")) {
      pattern_ia.push(countries[i]);
    }

    if (countries[i].toLowerCase().includes("island")) {
      pattern_ialand.push(countries[i]);
    }

    if (countries[i].toLocaleLowerCase().includes("stan")) {
      pattern_stan.push(countries[i]);
    }

  }

  document.getElementById("display5").innerHTML = "<h3>Countries that include 'land' in their names:</h3>" + pattern_land.join("<br>");

  document.getElementById("display6").innerHTML = "<h3>Countries that include 'ia' in their names:</h3>" + pattern_ia.join("<br>");

  document.getElementById("display7").innerHTML = "<h3>Countries that include 'island' in their names:</h3" + pattern_ialand.join("<br>");

  document.getElementById("display8").innerHTML = "<h3>Countries that include 'stan' in their names:</h3>" + pattern_stan.join("<br>");
}

categorizeCountries();


function getFirstTenCountries() {

  let firstTenCountries = [];

  for (let i = 0; i < 10 && i < countries.length; i++) {
    firstTenCountries.push(countries[i]);
  }

  document.getElementById("display9").innerHTML = "<h3>First 10 Countries:</h3>" + firstTenCountries.join("<br>");
}

getFirstTenCountries();


function getLastTenCountries() {

  let lastTenCountries = [];

  for (let i = countries.length - 1; i > 0; i--) {
    lastTenCountries.push(countries[i]);
  }

  document.getElementById("display10").innerHTML = "<h3>Last 10 Countries: </h3>" + lastTenCountries.join("<br>");
}

getLastTenCountries();

/*
let sort_countries = countries.sort();
document.getElementById("display11").innerHTML = "<h3>Sorted Countries: </h3>" + sort_countries.join("<br>");
*/


const countries2 = [
  { name: 'Japan', capital: 'Tokyo', population: 125584838 },
  { name: 'Ethiopia', capital: 'Addis Ababa', population: 117876227 },
  { name: 'Germany', capital: 'Berlin', population: 83783942 },
  { name: 'Canada', capital: 'Ottawa', population: 37742154 },
  { name: 'Kenya', capital: 'Nairobi', population: 53771296 },
  { name: 'Hungary', capital: 'Budapest', population: 9660351 },
  { name: 'Ireland', capital: 'Dublin', population: 4977400 },
  { name: 'Finland', capital: 'Helsinki', population: 5540720 },
  { name: 'Denmark', capital: 'Copenhagen', population: 5822763 },
  { name: 'Albania', capital: 'Tirana', population: 2877797 },
  { name: 'Bolivia', capital: 'Sucre', population: 11673021 }
];

function displayCountries() {
  // Sort countries by name (ascending)
  countries2.sort((a, b) => a.name.localeCompare(b.name));

  // Display countries sorted by name
  let outputByName = "<h3>Countries sorted by name (Ascending):</h3>";
  outputByName += countries2.map(country => `${country.name} - ${country.capital} - ${country.population}`).join("<br>");
  document.getElementById("display11").innerHTML = outputByName;

  // Sort countries by capital (ascending)
  countries2.sort((a, b) => a.capital.localeCompare(b.capital));

  // Display countries sorted by capital
  let outputByCapital = "<h3>Countries sorted by capital (Ascending):</h3>";
  outputByCapital += countries2.map(country => `${country.name} - ${country.capital} - ${country.population}`).join("<br>");
  document.getElementById("display12").innerHTML = outputByCapital;

  // Sort countries by population (descending)
  countries2.sort((a, b) => a.population - b.population);

  // Display countries sorted by population
  let outputByPopulation = "<h3>Countries sorted by population (Ascending):</h3>";
  outputByPopulation += countries2.map(country => `${country.name} - ${country.capital} - ${country.population}`).join("<br>");
  document.getElementById("display13").innerHTML = outputByPopulation;
}

// Call the function to display sorted countries
displayCountries();


// CHALLENEGE

const languages = [
  { language: 'Japan', count: 91 },
  { language: 'Ethiopia', count: 83 },
  { language: 'Germany', count: 89 },
  { language: 'Canada', count: 56 },
  { language: 'Kenya', count: 45 },
  { language: 'Hungary', count: 78 },
  { language: 'Ireland', count: 99 },
  { language: 'Finland', count: 98 },
  { language: 'Denmark', count: 94 },
  { language: 'Albania', count: 88 },
  { language: 'Bolivia', count: 67 },
  { language: 'Chinese', count: 92 },
  { language: 'Dutch', count: 8 },
  { language: 'Egypt', count: 67 },
  { language: 'French', count: 94 },
  { language: 'Greece', count: 88 },
  { language: 'Haiti', count: 67 },
  { language: 'India', count: 99 },
  { language: 'Jamaica', count: 67 },
  { language: 'Korea', count: 67 },
  { language: 'Lebanon', count: 67 },
  { language: 'Mexico', count: 67 },
  { language: 'Netherlands', count: 67 },
  { language: 'Oman', count: 67 },
  { language: 'Pakistan', count: 67 }
];

/*
function spokenLanguages(){
  let sortedLanguages = languages.sort((a, b) => b.count - a.count);
  let output = "<h3>Spoken Languages (Descending):</h3>";
  output += sortedLanguages.map(language => `${language.language} - ${language.count}`).join("<br>");
  document.getElementById("display14").innerHTML = output;
}

console.log(spokenLanguages(languages, 10));
*/

/*
function spokenLanguages() {
  let sortedLanguages = languages.sort((a, b) => b.count - a.count);
  let output = "<h3>Spoken Languages (Descending):</h3>";
  output += sortedLanguages.map(language => `${language.language} - ${language.count}`).join("<br>");
  document.getElementById("display14").innerHTML = output + "<br>";

  return sortedLanguages;
}

// Call the function
const sortedLanguages = spokenLanguages();

// Log sorted languages in JSON format

document.getElementById("display15").innerHTML = "<h3>In JSON Formate:</h3> <br>" + JSON.stringify(sortedLanguages);
*/

/*
function spokenLanguages() {
  let sortedLanguages = languages.sort((a, b) => b.count - a.count).slice(0, 10);
  let output = "<h3>Spoken Languages (Descending):</h3>";
  output += sortedLanguages.map(language => `${language.language} - ${language.count}`).join("<br>");
  document.getElementById("display14").innerHTML = output + "<br>";

  return sortedLanguages;
}

// Call the function
const sortedLanguages = spokenLanguages();

// Log sorted languages in JSON format
document.getElementById("display15").innerHTML = "<h3>In JSON Format:</h3><br>" + JSON.stringify(sortedLanguages);
*/

function mostSpokenLanguages(languages, n) {
  let sortedLanguages = languages.sort((a, b) => b.count - a.count).slice(0, n);
  return sortedLanguages;
}

// Output for top 10 spoken languages
document.getElementById("display15").innerHTML = "<br><h3>Top 10 spoken languages</h3><br>" + JSON.stringify(mostSpokenLanguages(languages, 10));

// Output for top 3 spoken languages
document.getElementById("display16").innerHTML = "<br><h3>Top 3 spoken languages</h3><br>" + JSON.stringify(mostSpokenLanguages(languages, 3));
