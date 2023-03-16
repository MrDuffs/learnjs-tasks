function factorial(n) {
    return (n > 1) ?  n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 27
console.log(factorial(6)); // 720
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1