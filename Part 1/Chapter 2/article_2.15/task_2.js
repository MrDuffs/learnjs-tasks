// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// }

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

//1-ый вариант
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

//2-ой вариант
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}