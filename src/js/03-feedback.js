import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.childNodes[1].childNodes[1];
const textarea = feedbackForm.childNodes[3].childNodes[1];

const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onInput, 200));
feedbackForm.addEventListener('submit', onFormSubmit);

const formData = {};

populateInputs();

// saving inputs in localstorage
function onInput(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  const message = evt.target.value;

  formData[evt.target.name] = message;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// sending form simulation
function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// sending data back to the input areas
function populateInputs() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    emailInput.value = savedData.email;
    textarea.value = savedData.message;
  }
}
