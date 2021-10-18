/* exported isLowerCased */

// create variable with boolean true
// create for loop to check all letters in a string
// create conditional statement to check if letter is lowercased and string
// check if letter is uppercase, stop the loop
// return variable

function isLowerCased(string) {
  var letterCheck = true;
  for (var i = 0; i <= string.length - 1; i++) {
    if (string[i] === string[i].toLowerCase() && typeof string === 'string') {
      letterCheck = true;
    } else {
      letterCheck = false;
      break;
    }
  }
  return letterCheck;
}
