var $contactForm = document.querySelector('#contact-form');

function handleForm(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = $contactForm.elements.name.value;
  newObj.email = $contactForm.elements.email.value;
  newObj.message = $contactForm.elements.message.value;
  console.log(newObj);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleForm);
