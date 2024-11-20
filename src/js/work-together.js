document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const emailInput = document.querySelector('.contact-input');
  const submitButton = document.querySelector('.contact-btn');
  const message = document.querySelector('.message');

  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      message.classList.remove('valid');
      message.classList.add('invalid');
    } else {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      message.classList.remove('invalid');
      message.classList.add('valid');
    }
  });
});
