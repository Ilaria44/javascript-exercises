const findTheOldest = function(peopleArray) {
  
  const thisYear = new Date().getFullYear();

  let ages = peopleArray.map((person) => person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : thisYear - person.yearOfBirth);

  let greatestAge = ages.reduce((greatestAge, currentAge) => (greatestAge > currentAge) ? greatestAge : currentAge, 0);

  return peopleArray[ages.indexOf(greatestAge)];




};

// Do not edit below this line
module.exports = findTheOldest;
