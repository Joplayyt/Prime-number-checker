// Calculator functionality
const calcDisplay = document.getElementById('calc-display');
const calcButtons = document.querySelectorAll('#calc-buttons button');

// Prime number checker functionality
function checkPrime() {
    const num = document.getElementById('prime-input').value;
    const result = document.getElementById('prime-result');
    if (isPrime(num)) {
        result.textContent = `${num} is a prime number.`;
    } else {
        result.textContent = `${num} is not a prime number.`;
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
