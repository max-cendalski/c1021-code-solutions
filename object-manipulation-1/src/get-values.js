/* exported getValues */

// create empty array
// create for in loop to iterate through array
// push value of key objects to new array
// return newArray

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }

  return newArray;
}
