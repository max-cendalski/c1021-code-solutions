/* exported maxValue */

function maxValue(stack) {
  const numberArray = [];
  let number = 0;
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      number = stack.pop();
      numberArray.push(number);
    }
    const maxNumber = Math.max(...numberArray);
    return maxNumber;
  }
}
