function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        const arr = str.split(' ');
        let a = +arr[0], 
        operator = arr[1],
        b = +arr[2];

        if (!this.operations[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.operations[operator](a, b);
    }

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }

}

let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("7 - 3"));
console.log(calc.calculate("3 * 7"));
console.log(calc.calculate("2 ** 3"));

