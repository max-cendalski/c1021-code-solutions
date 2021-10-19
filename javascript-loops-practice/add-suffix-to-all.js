/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsWithSuffix = [];
  for (var i = 0; i <= words.length - 1; i++) {
    wordsWithSuffix.push(words[i] + suffix);
  }
  return wordsWithSuffix;
}
