let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sum = (obj) => {
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    return result
};

console.log(sum(salaries));