const removeFromArray = function(array, ...itemsToRemove) {

  for (item of itemsToRemove) {
    //let pos = array.indexOf(item);
    //array.splice(pos, 1);

    let i = 0;
    while (i < array.length) {
      if (item === array[i]) {
        array.splice(i, 1);
      } else {
        i++;
      }

    }
  }
 

  return array;

};

// Do not edit below this line
module.exports = removeFromArray;
