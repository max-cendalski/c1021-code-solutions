/* exported getKeys */

// create newArray to store keys
// create for in loop to iterate over object names
// push names into newArray
// return newArray

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
