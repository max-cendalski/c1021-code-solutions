/* exported drop */

// create variable for new array
// create loop which starts after count parameter
// set conditional to eliminate empty array case

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array[i] === undefined) {
      newArray = array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
