let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let topSalaryWorker = null;

    for (let [key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            topSalaryWorker = key;
        }
    }

    return topSalaryWorker;
}

console.log(topSalary(salaries));