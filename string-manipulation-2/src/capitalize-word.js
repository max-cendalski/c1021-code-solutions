/* exported capitalizeWord */

// create variable for lowe rcase letters, upperCase letter ,result
// use charAt() to capitalize 1 letter and store if variable
// slice 1 letter
// write conditional statemant

function capitalizeWord(word) {

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var lowerCaseString = '';
    lowerCaseString = word.toLowerCase();
    var upperCaseLetter = '';
    var resultOfSlice = '';
    var result = '';

    upperCaseLetter = lowerCaseString.charAt(0).toUpperCase();
    resultOfSlice = lowerCaseString.slice(1);
    result = upperCaseLetter.concat(resultOfSlice);
    return result;
  }
}
