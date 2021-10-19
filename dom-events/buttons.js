function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $btn = document.querySelector('.click-button');
$btn.addEventListener('click', handleClick);

function handleMouse(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouse);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: '.event);
  console.log('event target : ', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
