/* exported capitalize */

// creating storages for first letter,word after lowering cases, nad result word
// changing all leters to lowered case
// changing first letter to capital letter and assing it to new variable
// removing first letter from word
// adding first capital letter to the word
// returning word

function capitalize(word) {
  var lowerCaseWord = '';
  var firstChar = '';
  var finalWord = '';
  var superFinalWord = '';
  lowerCaseWord = word.toLowerCase();
  firstChar = lowerCaseWord[0].toUpperCase();
  finalWord = lowerCaseWord.slice(1);
  superFinalWord = firstChar.concat(finalWord);
  return superFinalWord;
}
