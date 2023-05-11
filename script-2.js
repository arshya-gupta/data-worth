const resultDiv = document.getElementById('result');

// Retrieve the dataWorth value from local storage
const dataWorth = localStorage.getItem('dataWorth');

let html = `<p>You predicted the worth of your data to be $${dataWorth}.`
html += '<br>'
html += '<p> Your actual value is $0.72</p>'
resultDiv.innerHTML = html;
resultDiv.classList.remove('hidden');
