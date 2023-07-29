const scriptURL =
  'https://script.google.com/macros/s/AKfycbwtprK-NnI2FB0SARXa6V65Nw9SXYYNpK-EWPPPQF_FTfbf_DV6fWp-mg428gU79Mu3hg/exec';

const form = document.forms['contact-form'];
let isSubmitting = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // If the form is already being submitted, return to prevent further submissions
  if (isSubmitting) {
    return;
  }

  isSubmitting = true; // Set the flag to true to indicate that form submission is in progress
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) =>
      Swal.fire('감사합니다!', '기다려주시면 보내드리겠습니다.', 'success')
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error('Error!', error.message))
    .finally(() => {
      isSubmitting = false; // Reset the flag to false after form submission is completed
    });
});
