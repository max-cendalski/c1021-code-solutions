/* exported chunk */
// create empty newArray 1
// create empty array 2
// create empty result
// create for loop, iteration number = array.length
// create another for loop to move items(size) to an array
// add new array to results
// empty newArray1
//

var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

function chunk(array, size) {
  var newArray1 = [];
  var newArray2 = [];
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    for (var j = 0; j < size; j++) {
      newArray1.push(array[j]);
    }
    result.push(newArray1);
    console.log('first log of result:', result);
    console.log('newArray1 after first inner loop: ', newArray1);
    newArray1 = [];
  }

  return result;
}

console.log(chunk(array, 2));
