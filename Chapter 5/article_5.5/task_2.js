const array1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(elem => elem >= a && elem <= b);
}

console.log(filterRange(array1, 1, 4));
console.log(filterRange(array1, 1, 5));
console.log('Исходный массив', array1);