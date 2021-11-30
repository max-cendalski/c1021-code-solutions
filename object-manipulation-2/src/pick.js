/* exported pick */

// create empy object
// create for in loop to iterate over object properties
// create for loop to iterate over array and compare property values
// if maches assing key:value pairs to empty object

function pick(source, keys) {
  var newObject = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i] && source[property] !== undefined) {
        newObject[property] = source[property];
      }
    }
  }
  return newObject;
}
