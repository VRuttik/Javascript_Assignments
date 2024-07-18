const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// Adding new user Vruttik
users["Vruttik"] = {
  email: "mynbi@example.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 22,
  isLoggedIn: true,
  points: 100
};

// Count logged in users
let count = 0;
for (let user in users) {
  if (users[user].isLoggedIn) {
    count++;
  }
}
document.getElementById("display1").innerHTML = "Logged In Users: " + count;

// Count users with points >= 50
let p = 0;
for (let user in users) {
  if (users[user].points >= 50) {
    p++;
  }
}
document.getElementById("display2").innerHTML = "Users equal to or more than 50 points: " + p;

// Count users with MERN stack skills
let mern = 0;
for (let user in users) {
  if (users[user].skills.includes("MongoDB") && users[user].skills.includes("Express") && users[user].skills.includes("React") && users[user].skills.includes("Node")) {
    mern++;
  }
}
document.getElementById("display3").innerHTML = "Users with MERN stack: " + mern;

document.getElementById("display4").innerHTML = "Updated User: " + JSON.stringify(users, null, 2);

// Display all user properties
let userProperties = "";
for (let user in users) {
  userProperties += `<br>${user} : ${users[user].email} + ${users[user].skills.join(', ')} + ${users[user].age} + ${users[user].isLoggedIn} + ${users[user].points}`;
}
document.getElementById("display5").innerHTML = userProperties;

// Get all values of the users object
let allValues = [];
for (let user in users) {
  allValues.push(Object.values(users[user]));
}
document.getElementById("display6").innerHTML = "All Values: " + JSON.stringify(allValues, null, 2);





const countries = {
  Albania: {
    capital: 'Tirana',
    population: 2877797,
    languages: ['Albanian']
  },
  Bolivia: {
    capital: 'Sucre',
    population: 11673029,
    languages: ['Spanish', 'Quechua', 'Aymara']
  },
  Canada: {
    capital: 'Ottawa',
    population: 38005238,
    languages: ['English', 'French']
  },
  Denmark: {
    capital: 'Copenhagen',
    population: 5831404,
    languages: ['Danish']
  },
  Ethiopia: {
    capital: 'Addis Ababa',
    population: 114963588,
    languages: ['Amharic']
  },
  Finland: {
    capital: 'Helsinki',
    population: 5540720,
    languages: ['Finnish', 'Swedish']
  },
  Germany: {
    capital: 'Berlin',
    population: 83149300,
    languages: ['German']
  },
  Hungary: {
    capital: 'Budapest',
    population: 9768785,
    languages: ['Hungarian']
  },
  Ireland: {
    capital: 'Dublin',
    population: 4994724,
    languages: ['Irish', 'English']
  },
  Japan: {
    capital: 'Tokyo',
    population: 126050796,
    languages: ['Japanese']
  },
  Kenya: {
    capital: 'Nairobi',
    population: 53771296,
    languages: ['Swahili', 'English']
  }
};

// Displaying each country's information on the web page
let countryInfoDiv = document.getElementById('country-info');
let countryInfoHtml = '';

for (let country in countries) {
  countryInfoHtml += `<h2>Country: ${country}</h2>`;
  countryInfoHtml += `<p>Capital: ${countries[country].capital}</p>`;
  countryInfoHtml += `<p>Population: ${countries[country].population}</p>`;
  countryInfoHtml += `<p>Languages: ${countries[country].languages.join(', ')}</p>`;
  countryInfoHtml += '<hr>';
}

countryInfoDiv.innerHTML = countryInfoHtml;


