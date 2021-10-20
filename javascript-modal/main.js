
var $openModalWindow = document.querySelector('.open-modal-window');
var $surveyWindow = document.querySelector('.survey-window-invisible');
var $darkenedBackground = document.querySelector('.container');

$openModalWindow.addEventListener('click', handlingOpenModal);
function handlingOpenModal(event) {

  $darkenedBackground.className = 'container-darkened';
  $surveyWindow.className = 'survey-window-visible';
  $openModalWindow.className = 'open-modal-window-darkened';
  event.preventDefault();
}
