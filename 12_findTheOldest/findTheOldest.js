const findTheOldest = function(peopleArray) {
  
  const thisYear = new Date().getFullYear();

  let age = peopleArray.map(person => {
    if(person.yearOfDeath) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return thisYear - person.yearOfBirth;
    }
    
    
  })


  let oldestAge = 0;

  for (const each of age) {
    if(each > oldestAge) {
      oldestAge = each;
    }
  }

  return peopleArray[age.indexOf(oldestAge)];

};

// Do not edit below this line
module.exports = findTheOldest;
