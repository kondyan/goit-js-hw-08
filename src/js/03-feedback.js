import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.childNodes[1].childNodes[1];
const textarea = feedbackForm.childNodes[3].childNodes[1];

const STORAGE_KEY_EMAIL = 'feedback-form-emailInput-state';
const STORAGE_KEY_TEXT = 'feedback-form-textarea-state';

textarea.addEventListener('input', throttle(onTextareaInput, 500));
emailInput.addEventListener('input', throttle(onEmailInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateTextarea();

// saving textarea and email in localstorage
function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(STORAGE_KEY_TEXT, message);
}

function onEmailInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(STORAGE_KEY_EMAIL, message);
}

// sending form simulation
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(evt);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY_TEXT, STORAGE_KEY_EMAIL);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY_TEXT);
  const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);

  if (savedMessage) {
    textarea.value = savedMessage;
  }

  if (savedEmail) {
    emailInput.value = savedEmail;
  }
}
