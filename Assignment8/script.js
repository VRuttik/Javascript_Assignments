const constants = [2.72, 3.14, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

document.getElementById("display1").innerHTML = `<h3>Constant Values</h3><br>
  e: ${e}<br>
  pi: ${pi}<br>
  gravity: ${gravity}<br>
  humanBodyTemp: ${humanBodyTemp}<br>
  waterBoilingTemp: ${waterBoilingTemp}<br>
`;

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const [fin, est, sw, den, nor] = countries;

document.getElementById("display2").innerHTML = `<h3>Countries</h3><br>
  fin: ${fin}<br>
  est: ${est}<br>
  sw: ${sw}<br>
  den: ${den}<br>
  nor: ${nor}<br><br>
`;

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

const { width, height, area, perimeter } = rectangle;

document.getElementById("display3").innerHTML = `<h3>Rectangle</h3><br>
  width: ${width}<br>
  height: ${height}<br>
  area: ${area}<br>
  perimeter: ${perimeter}<br>
`;

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];

// Displaying all users
users.forEach(user => {
  document.getElementById("display4").innerHTML += `
    <h3>User: ${user.name}</h3>
    Scores: ${user.scores}<br>
    Skills: ${user.skills.join(', ')}<br>
    Age: ${user.age}<br><br>`;
});

// Less than two skills
users.forEach(user => {
  if (user.skills.length < 2) {
    document.getElementById("display5").innerHTML += `
      <h3>Name: ${user.name}</h3>
      Scores: ${user.scores}<br>
      Skills: ${user.skills.join(', ')}<br>
      Age: ${user.age}<br><br>`;
  }
});

// CHALLENGE OF THE DAY!!
const countries1 = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5536146,
    languages: ['Finnish', 'Swedish']
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    population: 1328976,
    languages: ['Estonian']
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    population: 10379295,
    languages: ['Swedish']
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    population: 5818553,
    languages: ['Danish']
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    population: 5379475,
    languages: ['Norwegian']
  }
];

function displayCountriesInfo(countries1) {
  countries1.forEach(({ name, capital, population, languages }) => {
    document.getElementById("display6").innerHTML += `
      <h3>Country: ${name}</h3>
      Capital: ${capital}<br>
      Population: ${population}<br>
      Languages: ${languages.join(', ')}<br><br>
    `;
  });
}

// Call the function
displayCountriesInfo(countries1);
