console.log('hello, world');

var $h1Element = document.querySelector('h1');
console.log('$h1Element', $h1Element);
console.dir($h1Element);

var $explanation = document.querySelector('#explanation');
console.log('$explanation', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('hint', $hint);
console.dir($hint);

var $nodeList = document.querySelectorAll('p');
console.log('$nodeList', $nodeList);
console.dir($nodeList);

var $exampleLink = document.querySelectorAll('.example-link');
console.log('$exampleLink', $exampleLink);
console.dir($exampleLink);
