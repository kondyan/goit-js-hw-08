import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.childNodes[1].childNodes[1];
const textarea = feedbackForm.childNodes[3].childNodes[1];

const STORAGE_KEY_EMAIL = 'feedback-form-emailInput-state';
const STORAGE_KEY_TEXT = 'feedback-form-textarea-state';

textarea.addEventListener('input', throttle(onTextareaInput, 1000));
emailInput.addEventListener('input', throttle(onEmailInput, 1000));
feedbackForm.addEventListener('submit', onFormSubmit);

populateTextarea();

// saving textarea in localstorage
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY_TEXT, message);
}

// saving email in localstorage
function onEmailInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY_EMAIL, message);
}

// sending form simulation
function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY_TEXT);
  localStorage.removeItem(STORAGE_KEY_EMAIL);
}

// sending data back to the input areas
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
