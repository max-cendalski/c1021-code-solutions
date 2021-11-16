
var $openModalWindow = document.querySelector('.open-modal-window');
var $surveyWindow = document.querySelector('.survey-window-invisible');
var $darkenedBackground = document.querySelector('.container');
var $surveyWindowVisible = document.querySelector('.survey-window');

function handlingOpenModal(event) {
  event.preventDefault();
  $darkenedBackground.className = 'container-darkened';
  $surveyWindow.className = 'survey-window-visible';
  $openModalWindow.className = 'open-modal-window-darkened';
}

function handleClosingWindow(event) {
  event.preventDefault();
  $darkenedBackground.className = 'container';
  $surveyWindow.className = 'survey-window-invisible';
  $openModalWindow.className = 'open-modal-window';
}

$openModalWindow.addEventListener('click', handlingOpenModal);
$surveyWindowVisible.addEventListener('click', handleClosingWindow);
