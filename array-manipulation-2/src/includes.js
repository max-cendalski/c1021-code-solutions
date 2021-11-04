/* exported includes */

function includes(array, value) {
  if (array.indexOf(value) >= 0) {
    return true;
  } if (array.indexOf(value) === -1) {
    return false;
  }
}
