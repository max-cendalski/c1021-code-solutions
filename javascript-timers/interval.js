var count = 4;
var $header = document.querySelector('h1');
var intervalId = setInterval(decrement, 1000);

function decrement() {
  count--;
  if (count > 0) {
    $header.textContent = count;
  } else {
    $header.textContent = '~Earth Beeelooowwww Us~';
    clearInterval(intervalId);
  }
}
