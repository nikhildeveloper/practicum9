async function encode() {
    const text = document.getElementById("inputText");            
    let n = text.value;            
    const response = await fetch("???" + n);
    const result = await response.json();
    document.getElementById("encodedText").innerText = result;
}

module.exports = {encode}