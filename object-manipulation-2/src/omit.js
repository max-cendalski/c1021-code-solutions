/* exported omit */

// create variable for newObject
// create in loop to iterate over all items in the source object
// use i !include method to check if there is no match,
// add property to newObject

function omit(source, keys) {
  var newObject = {};
  for (var property in source) {
    if (!keys.includes(property)) {
      newObject[property] = source[property];
    }
  }
  return newObject;
}
