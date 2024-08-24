const getTheTitles = function(booksArray) {
  let titlesArray = [];

  for (book in booksArray) {
    titlesArray.push(booksArray[book].title);
  }
  return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
