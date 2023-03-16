// С использованием цикла
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum;
}

// С использованием рекурсии
function recursionSumTo(n) {
    return (n > 1) ? n + recursionSumTo(n - 1) : n;
}

// С использованием формулы арифметической прогрессии (по формуле Гаусса)
function arithmeticProgressionSumTo(n) {
    return (n * (n + 1)) / 2;
}

console.log( sumTo(100) ); // 5050
console.log( recursionSumTo(100) ); // 5050
console.log( arithmeticProgressionSumTo(100) ); // 5050