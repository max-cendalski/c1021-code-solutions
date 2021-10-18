/* exported reverse */

// create empty array
// create loop to iterate through array from the last element to the first one
// push elements to empty array
// return newArray

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
