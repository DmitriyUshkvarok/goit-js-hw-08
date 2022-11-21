import throttle from 'lodash.throttle';

// const feetbackForm = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// feetbackForm.addEventListener('input', throttle(onFormImput, 500));
// feetbackForm.addEventListener('submit', onFormSubmit);

// function onFormImput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function dataLocalStorage() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// }
// dataLocalStorage();

// function onFormSubmit(event) {
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function dataLocalStorage() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// }
// dataLocalStorage();

const form = document.querySelector('.feedback-form');
const STOTAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STOTAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(STOTAGE_KEY)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STOTAGE_KEY);
}

function onDataLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STOTAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
onDataLocalStorage();
