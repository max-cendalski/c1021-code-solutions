/* exported invert */

// get value Object.values()
// create variable vor values
// create variable for counter to iterate over array
// create for in loop to iterate over object
// each iteration assing new key/value pair

function invert(source) {
  var newObject = {};
  for (var property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}
