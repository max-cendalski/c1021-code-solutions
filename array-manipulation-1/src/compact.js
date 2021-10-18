/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
