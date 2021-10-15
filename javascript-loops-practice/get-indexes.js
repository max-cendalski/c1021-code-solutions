/* exported getIndexes */
function getIndexes(array) {
  var indArr = [];
  var number = 0;
  for (var i = 0; i <= array.length - 1; i++) {
    indArr.push(number);
    number++;
  }
  return indArr;
}
