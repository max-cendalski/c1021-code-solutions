// create variable for number of clicks
// create variables for .hot-button and .click-count classes
// create event listener for click button
// create function for updating number of click, and changing .hot-button class"

var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);

function handleClick(event) {
  numberOfClicks++;
  $clickCount.textContent = numberOfClicks;
  if (numberOfClicks <= 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks > 4 && numberOfClicks <= 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks > 7 && numberOfClicks <= 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks > 10 && numberOfClicks <= 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks > 13 && numberOfClicks <= 16) {
    $hotButton.className = 'hot-button hot';
  } if (numberOfClicks > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
