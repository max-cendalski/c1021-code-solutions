/* exported toObject */

// create empty object
// use bracket notation to create object properties(key: value)
// return newObj

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
