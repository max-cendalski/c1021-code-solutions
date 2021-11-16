/* exported omit */

var source = { foo: 1, bar: 2, baz: 3 };

var keys = ['foo', 'baz'];

function omit(source, keys) {
  var newObject = {};
  // debugger;
  for (var property in source) {
    debugger;
    for (var i = 0; i < keys.length; i++) {
      // console.log(property);
      console.log(keys[i]);

      if (property === keys[i]) {
        break;
      } if (property !== keys[i]) {
        newObject[property] = source[property];
      }
    }
  }

  return newObject;
}

console.log(omit(source, keys));
