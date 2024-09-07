const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.childNodes[1].childNodes[1];
const textarea = feedbackForm.childNodes[3].childNodes[1];

textarea.addEventListener('input', onTextareaInput);
emailInput.addEventListener('input', onEmailInput);
feedbackForm.addEventListener('submit', onFormSubmit);

populateTextarea();

// saving textarea and email in localstorage
function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem('feedback-form-textarea-state', message);
}

function onEmailInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem('feedback-form-emailInput-state', message);
}

// sending form simulation
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(evt);

  evt.currentTarget.reset();
  localStorage.removeItem(
    'feedback-form-textarea-state',
    'feedback-form-emailInput-state'
  );
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-textarea-state');
  const savedEmail = localStorage.getItem('feedback-form-emailInput-state');

  if (savedMessage) {
    textarea.value = savedMessage;
  }

  if (savedEmail) {
    emailInput.value = savedEmail;
  }
}
