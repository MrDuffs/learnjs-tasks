let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// 1-ый способ
// function sumSalaries(salaries) {
//     let sum = 0;

//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// 2-ой способ
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

console.log(sumSalaries(salaries)); //650