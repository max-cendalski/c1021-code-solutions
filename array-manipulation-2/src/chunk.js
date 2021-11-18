/* exported chunk */
// create empty array -newArray
// create empty array result
// create variable = 0(to count iteration)
// create for loop, running on entire array, starting from 0, counter + size
// create another for loop to move items(size) to an newArray1
// create if statement (loop runs no more times than array length)
// add items to newArray
// add newarray to results
// empty newArray1

function chunk(array, size) {
  var result = [];
  var newArray = [];
  var count = 0;
  for (var i = 0; i < array.length; i += size) {
    for (var j = i; j < size + i; j++) {
      count++;
      if (count <= array.length) {
        newArray.push(array[j]);
      } else {
        break;
      }
    }
    result.push(newArray);
    newArray = [];
  }
  return result;
}
