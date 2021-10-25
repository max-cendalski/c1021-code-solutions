/* exported compact */
// create empty array
// create loop to iterate throgh elements
// create if statement to check if element is truthy
// push element to empty array and return array

function compact(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
