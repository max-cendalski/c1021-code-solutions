/* exported invert */

// get value Object.values()
// create variable vor values
// create variable for counter to iterate over array
// create for in loop to iterate over object
// each iteration assing new key/value pair

function invert(source) {
  var newArray = Object.values(source);
  var newObject = {};
  var counter = 0;
  for (var property in source) {
    newObject[newArray[counter]] = property;
    counter++;
  }
  return newObject;
}
