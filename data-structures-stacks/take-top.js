/* exported takeTop */

function takeTop(stack) {
  if (!stack) {
    return undefined;
  } else {
    stack.peek();
  }
  return stack.pop();
}
