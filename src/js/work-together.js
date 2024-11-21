document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const emailInput = document.querySelector('.contact-input');
  const messageInput = document.querySelector('.contact-textarea');
  const submitButton = document.querySelector('.contact-btn');
  const modal = document.querySelector('.confirmation-modal-overlay');
  const closeModalButton = document.querySelector('.close-confirmation-btn');
  const errorMessage = document.querySelector('.message');

  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  function openModal() {
    modal.classList.add('is-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
  }

  emailInput.addEventListener('blur', function () {
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      errorMessage.classList.remove('valid');
      errorMessage.classList.add('invalid');
    } else {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      errorMessage.classList.add('valid');
      errorMessage.classList.remove('invalid');
    }
  });

  form.addEventListener('submit', function (event) {
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
      console.error('Comment is empty!');
      return;
    }

    fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.title) {
          openModal();
          form.reset();
        } else {
          console.log('Response data did not contain title:', data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
