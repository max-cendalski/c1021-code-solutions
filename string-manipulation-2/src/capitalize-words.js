/* exported capitalizeWords */

// change all chars to lower case
// convert string into array
// loop over all elements and change first letter of each word
// convert array into string

function capitalizeWords(string) {
  var newArray = string.toLowerCase().split(' ');
  var result = '';
  for (var i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }
  result = newArray.join(' ');
  return result;
}
