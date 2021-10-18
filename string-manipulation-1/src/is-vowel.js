/* exported isVowel */

// create variable for loweredcase letter
// assign value from argument to variable
// create conditional statement checking vowels letters
// return boolean

function isVowel(char) {
  var lowerCase = '';
  lowerCase = char.toLowerCase();
  var vowel = true;
  if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'o' || lowerCase === 'i' || lowerCase === 'u') {
    vowel = true;
  } else {
    vowel = false;
  }
  return vowel;
}
