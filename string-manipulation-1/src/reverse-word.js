/* exported reverseWord */

// create var for reversed word
// create loop counting from the end of a string
// adding letter to a string
// return string

function reverseWord(word) {
  var reverseWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
