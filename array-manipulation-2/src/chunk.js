/* exported chunk */

var array = ['one', 'two', 'three', 'four', 'five'];

function chunk(array, size) {
  var arrayItems = [];
  var arrayItems1 = [];
  var firstArray = [];
  var secondArray = [];
  var result = [];
  for (var i = 0; i < size; i++) {
    arrayItems.push(array[i]);
    firstArray.push(arrayItems);
  }
  /*   for (var j = size; j < array.length; j++) {
    arrayItems1.push(array[j]);
    secondArray.push(arrayItems1);
    arrayItems1 = [];
  } */
  console.log(firstArray);

  return result;
}

console.log(chunk(array, 2));
