function ExampleConstructor() {

}

console.log('ExampleConstructor.property: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('value of example: ', example);
var checkExample = example instanceof ExampleConstructor;
console.log('valueof checkExample: ', checkExample);
