/* exported isAnagram */

// compare if strings length are the same

var firstString = 'roses';
var secondString = 'horse';

function isAnagram(firstString, secondString) {

  var firstStringWithoutSpace = firstString.replace(/\s/g, '');
  var secondStringWithoutSpace = secondString.replace(/\s/g, '');
  debugger;

  if (firstStringWithoutSpace.length !== secondStringWithoutSpace.length) {
    return false;
  } else {
    var result = '';
    for (var i = 0; i < firstStringWithoutSpace.length; i++) {

      for (var j = 0; j < secondStringWithoutSpace.length; j++) {
        if (firstStringWithoutSpace[i] === secondStringWithoutSpace[j]) {
          result += firstStringWithoutSpace[i];
          break;
        }
      }
    }
    if (result === firstStringWithoutSpace) {
      return true;
    } else {
      return false;
    }

  }
}

/*  var firstArray = firstString.split().sort().join();
  var secondArray = secondString.split().sort().join();
  console.log(secondArray);
  if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
} */

console.log(isAnagram(firstString, secondString));
