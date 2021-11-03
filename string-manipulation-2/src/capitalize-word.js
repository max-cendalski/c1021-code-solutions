/* exported capitalizeWord */

// create variable for lowe rcase letters, upperCase letter ,result
// use charAt() to capitalize 1 letter and store if variable
// slice 1 letter
// write conditional statemant

function capitalizeWord(word) {

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var lowerCaseString = word.toLowerCase();
    var upperCaseLetter = lowerCaseString.charAt(0).toUpperCase();
    var resultOfSlice = lowerCaseString.slice(1);
    var result = upperCaseLetter.concat(resultOfSlice);

    return result;
  }
}
