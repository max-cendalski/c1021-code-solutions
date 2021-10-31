/* exported numVowels */

// change string to lowercase
// create number variable = 0
// create variable newString
// create a loop to check all characters in newString
// compare them to vowel sounds
// increment number  variable
// return number variable

function numVowels(string) {
  var newString = string.toLowerCase();
  var number = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      number++;
    }
  }
  return number;
}
