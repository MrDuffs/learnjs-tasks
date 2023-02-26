let n = 10;
let result = [];

for (let i = 2; i <= n; i++) {
    if (
        (i != 2 && i != 3)
        && (i % 2 === 0 || i % 3 === 0)
    ) {
        continue;
    }

    result.push(i);
}

console.log('Простые числа =>', result.join(','));