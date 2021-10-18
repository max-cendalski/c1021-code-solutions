/* exported getWords */

// create empty array
// create condition in case string is an empty string
// used split method to convert string to an array

function getWords(string) {
  var newArr = [];
  if (string.length === 0) {
    newArr = [];
  } else {
    newArr = string.split(' ');
  }
  return newArr;
}
