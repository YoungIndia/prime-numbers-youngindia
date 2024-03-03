
const { uuid } = require('uuid');

function generatePrimeNumbersList(length) {
    let primes = [];
    for (let num = 2; primes.length < length; num++) {
        if (isPrime(num)) primes.push(num);
    }
    return primes;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// Usage
const primeNumbersList = generatePrimeNumbersList(10);
console.log(primeNumbersList);


module.exports = { generatePrimeNumbersList };
