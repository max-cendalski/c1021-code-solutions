/* exported oddOrEven */
// create newArray for words odd and even
// create loop to iterate through an array of numbers
// check if number is odd using if statement and  modulo
// return newArray

function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }

  }
  return newArray;
}
