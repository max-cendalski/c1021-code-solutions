/* exported truncate */

// declare 2 variables. One empty string ,second string with value = ...
// use slice method to cut the string
// concat two strings

function truncate(length, string) {
  var newString = '';
  var dots = '...';
  newString = string.slice(0, length);
  return newString.concat('', dots);
}
