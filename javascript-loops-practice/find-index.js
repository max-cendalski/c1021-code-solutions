/* exported findIndex */

function findIndex(array, value) {
  var counter = 0;
  for (var i = 0; i <= array.length; i++) {
    counter++;
    if (array[i] === value) {
      return counter - 1;
    }
  }
  return -1;
}
