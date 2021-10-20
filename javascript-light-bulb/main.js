
var $lightbulb = document.querySelector('.lightbulb');
var $rowCentered = document.querySelector('.row-centered');
var lightSwitch = false;

$lightbulb.addEventListener('click', handleClick);

function handleClick(event) {

  if (lightSwitch === false) {
    $lightbulb.className = 'lightbulb-dark';
    $rowCentered.className = 'row-centered-black';
    lightSwitch = true;
  } else {
    $lightbulb.className = 'lightbulb';
    $rowCentered.className = 'row-centered';
    lightSwitch = false;
  }
}
