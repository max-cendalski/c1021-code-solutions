/* exported isUpperCased */

// create variable with boolean true
// create for loop to check all letters in a string
// create conditional statement to check if letter is lowercased
// change variable to false
// return variable

function isUpperCased(string) {
  var letterCheck = true;
  for (var i = 0; i <= string.length - 1; i++) {
    if (string[i] === string[i].toLowerCase()) {
      letterCheck = false;
    }
  }
  return letterCheck;
}
