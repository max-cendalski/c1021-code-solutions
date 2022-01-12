/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() !== undefined) {
    return false;
  }
  if (stack.peek() === undefined) {
    return true;
  }
}
