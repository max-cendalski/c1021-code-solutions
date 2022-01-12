/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const topValue = stack.pop();
    stack.push(value);
    stack.push(topValue);
  }
}
