/* exported filterOutStrings */

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
