// Способ с долгим вычислением  
// function fib(n) {
//     if (n == 0) return 0;
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

function fib(n) {
    let number = n;
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        number = a + b;
        [a, b] = [b, number];
    }

    return number;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(12)); // 144
console.log(fib(77)); // 5527939700884757
console.log(fib(0));