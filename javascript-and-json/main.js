var books = [
  {
    isbn: '2342',
    title: 'Name of The Rose',
    author: 'Umberto Eco'
  }, {
    isbn: '4532',
    title: 'Snowcrash',
    author: 'Neal Stephenson'
  }, {
    isbn: '234322',
    title: 'Invisible Man',
    author: 'Ralph Ellison'
  }
];
console.log('array books: ', books, typeof books);

var booksToString = JSON.stringify(books);
console.log('JSON String of array books:', booksToString, typeof booksToString);

var jsonString = '{"name":"2346"}';

console.log('json string: ', jsonString, typeof jsonString);

var jsonParse = JSON.parse(jsonString);
console.log('jsonString parsed: ', jsonParse, typeof jsonParse);
