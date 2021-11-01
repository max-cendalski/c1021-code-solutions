/* exported take */

// create variable for new array
// create loop and check if there are elements in the array
// return new array

function take(array, input) {
  var newArray = [];
  for (var i = 0; i < input; i++) {
    if (array[i] === undefined) {
      newArray = array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
