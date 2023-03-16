let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// Мой способ
function byField(prop) {
    return function (a, b) {
        return a[prop] > b[prop] ? 1 : -1;
    }
}

// Способ со стрелочной фун-ией learnJS 
// function byField(prop) {
//     return (a, b) => a[prop] > b[prop] ? 1 : -1;
// }

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));