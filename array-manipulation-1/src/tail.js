/* exported tail */

// create empty array[]
// create loop starting at index 1
// push all item to the new array
// return new array

function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
