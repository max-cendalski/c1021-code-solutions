/* exported takeRight */

// create variable for new array
// create loop starting from the end of array
// add conditional statement for empy array

// create new array
// use slice method
// return new array

function takeRight(array, count) {
  var newArray = [];
  if (array === []) {
    newArray = array;
  } else {
    newArray = array.slice(array.length - count);
  }
  return newArray;
}
