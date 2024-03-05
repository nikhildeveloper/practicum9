async function isPrime() {
    const numberToTest = document.getElementById("numberToTest");            
    let n = numberToTest.value;            
    const response = await fetch("???" + n);
    const result = await response.json();
    document.getElementById("primeCheckResult").innerText = result;
}

module.exports = {isPrime}