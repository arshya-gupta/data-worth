const form = document.getElementById('data-worth-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

const worth = parseInt(document.getElementById('worth').value);
const accounts = parseInt(document.getElementById('accounts').value);
const marital = parseInt(document.getElementById('marital').value);
const age = parseInt(document.getElementById('age').value);
const credit = parseInt(document.getElementById('credit').value);
const personal = parseInt(document.getElementById('personal').value);
const shared = document.getElementById('shared').value;

const dataWorth = worth * accounts * marital * age * personal *(shared === 'yes' ? 2 : 1);

localStorage.setItem('dataWorth', dataWorth);

// Redirect to the result page
window.location.href = 'worry.html';

});
