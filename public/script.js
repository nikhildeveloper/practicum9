// script.js
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.getElementById('result');

function calculateSum() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    console.log(num1,num2)
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    fetch(`https://arithmetic-service-jayasandeepketha.onrender.com/get?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        resultSpan.textContent = `Result: ${data.result}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error processing your request.");
    });
}
