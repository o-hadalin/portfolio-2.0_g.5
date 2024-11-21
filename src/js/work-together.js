document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const emailInput = document.querySelector('.contact-input');
  const messageInput = document.querySelector('.contact-textarea');
  const submitButton = document.querySelector('.contact-btn');
  const modal = document.querySelector('.confirmation-modal-overlay');
  const closeModalButton = document.querySelector('.close-confirmation-btn');
  const errorMessage = document.querySelector('.message');
  const iconValid = document.querySelector('.filled-icon');

  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  function openModal() {
    modal.classList.add('is-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
  }

  if (localStorage.getItem('email')) {
    emailInput.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('message')) {
    messageInput.value = localStorage.getItem('message');
  }

  emailInput.addEventListener('input', function () {
    localStorage.setItem('email', emailInput.value);
  });

  messageInput.addEventListener('input', function () {
    localStorage.setItem('message', messageInput.value);
  });

  emailInput.addEventListener('blur', function () {
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      errorMessage.classList.remove('valid');
      errorMessage.classList.add('invalid');
      iconValid.classList.add('invalid');
    } else {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      errorMessage.classList.add('valid');
      errorMessage.classList.remove('invalid');
      iconValid.classList.remove('invalid');
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return;
    }

    const formData = new FormData(form);
    const data = {
      email: formData.get('email'),
      comment: formData.get('message'),
    };

    if (!data.comment || data.comment.trim() === '') {
      return;
    }

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/reqests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.title) {
        openModal();
        form.reset();

        localStorage.removeItem('email');
        localStorage.removeItem('message');

        iconValid.classList.add('invalid');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  });

  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      closeModal();
    }
  });
});
