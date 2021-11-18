/* exported dropRight */

// create variable for new array
// create loop ,numbers of loops = array.length-count
// push items to the new array
// return array

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
