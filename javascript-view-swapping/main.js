
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function handleTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if ($viewList[j].getAttribute('data-view') === $dataView) {
        $viewList[j].className = 'view';
      } else {
        $viewList[j].className = 'view hidden';
      }
    }
  }
}

document.querySelector('.tab-container').addEventListener('click', handleTab);
