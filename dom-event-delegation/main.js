
var $taskListButton = document.querySelector('.task-list');

function handleTaskListClick(event) {
  console.log('event.target: ', event.target);
  console.log('event target tagName: ', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var eventClosest = event.target.closest('.task-list-item ');
    console.log('event closest ancestor', eventClosest);
    eventClosest.remove();
  }

}
$taskListButton.addEventListener('click', handleTaskListClick);
