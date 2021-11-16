var $users = document.querySelector('#user-list');

var userXhr = new XMLHttpRequest();
userXhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
userXhr.responseType = 'json';
userXhr.addEventListener('load', function () {
  console.log(userXhr.status);
  console.log(userXhr.response);
  for (var i = 0; i < userXhr.response.length; i++) {
    var user = document.createElement('li');
    user.textContent = userXhr.response[i].name;
    $users.appendChild(user);
  }
});
userXhr.send();
