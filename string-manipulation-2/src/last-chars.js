/* exported lastChars */

// create  new variable for split point
// create conditional statement
// return new variable

function lastChars(length, string) {
  var splitPointIndex = string.length - length;
  if (splitPointIndex > 0) {
    var newString = string.slice(splitPointIndex);
  } else {
    newString = string;
  }
  return newString;

}
