
var $name = document.forms[0].name;
var $email = document.forms[0].email;
var $message = document.forms[0].message;

function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('value of ', event.target.name, event.target.value);

}
$name.addEventListener('input', handleInput);
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
