function sum(a) {
    let sum = a;

    function sumCount(b) {
        sum += b;
        return sumCount;
    }

    sumCount.valueOf = function() {
        return sum;
    }

    return sumCount;
}

console.log( +sum(1)(2) ); // 3
console.log( +sum(1)(2)(3) ); // 6
console.log( +sum(5)(-1)(2) ); // 6
console.log( +sum(6)(-1)(-2)(-3) ); // 0
console.log( +sum(0)(1)(2)(3)(4)(5) ); // 15