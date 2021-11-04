/* exported swapChars */

// assing firstIndex and secondIndex to variables
// convert string to array
// replaced letters
// convert array to string

function swapChars(firstIndex, secondIndex, string) {
  var result = '';

  var firstLetter = string.charAt(firstIndex);
  var secondLetter = string.charAt(secondIndex);

  var newArray = string.split('');
  newArray[firstIndex] = secondLetter;
  newArray[secondIndex] = firstLetter;
  result = newArray.join('');
  return result;
}
