/* exported capitalizeWord */

// create variable for lowe rcase letters, upperCase letter ,result
// use charAt() to capitalize 1 letter and store if variable
// slice 1 letter
// write conditional statemant

function capitalizeWord(word) {
  var lowerCaseString = '';
  var upperCaseLetter = '';
  var resultOfSlice = '';
  var result = '';
  lowerCaseString = word.toLowerCase();
  upperCaseLetter = lowerCaseString.charAt(0).toUpperCase();
  resultOfSlice = lowerCaseString.slice(1);
  result = upperCaseLetter.concat(resultOfSlice);

  if (lowerCaseString === 'javascript') {
    return 'JavaScript';
  } else {
    return result;
  }

}
