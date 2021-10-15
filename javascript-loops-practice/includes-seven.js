/* exported includesSeven */

function includesSeven(array) {
  var booleanValue = false;
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === 7) {
      booleanValue = true;
    }
  }
  return booleanValue;
}
