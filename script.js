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
      Swal.fire({
        title: '감사합니다!',
        text: '기다려주시면 보내드리겠습니다.',
        icon: 'success',
        onClose: () => {
          window.close();
        },
      })
    )
    .then(() => {
      window.close();
    })
    .catch((error) =>
      Swal.fire({
        title: '죄송합니다!',
        text: '다시 작성해주세요',
        icon: 'fail'
      })
    )
    .finally(() => {
      isSubmitting = false; // Reset the flag to false after form submission is completed
    });
});
