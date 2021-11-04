/* exported ransomCase */
// create variable for new string
// create loop for each character
// use modulo to check if character is even or odd
// change letter to lowerCase or upperCase

function ransomCase(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();

    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;

}
