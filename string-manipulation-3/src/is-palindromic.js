/* exported isPalindromic */

// create var for reversed string
// create var for input string without space
// create loop to create reversed string
// compare strings

function isPalindromic(string) {
  var stringWithoutSpace = string.replace(/\s/g, '');
  var resultString = '';
  for (var i = stringWithoutSpace.length - 1; i >= 0; i--) {
    resultString += stringWithoutSpace[i];
  }
  if (stringWithoutSpace === resultString) {
    return true;
  } else {
    return false;
  }
}
