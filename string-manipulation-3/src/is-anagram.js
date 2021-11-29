/* exported isAnagram */

// use replace method to remove space
// compare length if different return false
// use split method to convert to array, sort and convert to string
// compare strings

function isAnagram(firstString, secondString) {
  var stringFirst = firstString.replaceAll(' ', '');
  var stringSecond = secondString.replaceAll(' ', '');
  if (stringFirst.length !== stringSecond.length) {
    return false;
  } else {
    var stringFirstSplit = stringFirst.split('').sort().join('');
    var stringSecondSplit = stringSecond.split('').sort().join('');
    if (stringFirstSplit === stringSecondSplit) {
      return true;
    } else {
      return false;
    }
  }

}
