// script.js
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.getElementById('result');
const prime1Input = document.getElementById('numberToTest')
const primeSubmit = document.getElementById('primeCheckResult')
const cipherSubmit = document.getElementById('encodedText')

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

function isPrime(){
    const numberEntered = parseFloat(prime1Input.value)

    if (isNaN(numberEntered)) {
        alert("Please enter valid number in the field.");
        return;
    }

    fetch(`https://primes-service-sandeep.onrender.com/primes/${numberEntered}`)
    .then(response => response.json())
    .then(data => {
        console.log(numberEntered)
        primeSubmit.textContent = `Result: ${data}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error processing your request.");
    });
    
   
}


function encode(){
    const textEntered = parseFloat(document.getElementById('inputText'))
    console.log(textEntered.valueOf)
    if (isNaN(textEntered)) {
        alert("Please enter valid text in the field.");
        return;
    }

    fetch(`https://primes-service-sandeep.onrender.com/primes/${numberEntered}`)
    .then(response => response.json())
    .then(data => {
        console.log(numberEntered)
        cipherSubmit.textContent = `Result: ${textEntered}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error processing your request.");
    });
    
    // primeSubmit.innerText = numberEntered
}