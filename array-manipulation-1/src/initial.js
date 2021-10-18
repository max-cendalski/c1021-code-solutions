/* exported initial */

// create empty array
// create loop wich ends at two indexes before the end
// push all items into empty array
// return new array

function initial(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 2; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
