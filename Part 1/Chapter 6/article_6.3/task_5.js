function inBetween(a, b) {
    return function (item) {
        return (item >= a && item <= b);
   }
}

// Мой способ
function inArray(array) {
    return function(item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == item) {
                return true;
            }
        }
        return false;
    }
}

// Способ learnJS (записал для себя)
function inArrayLearnJS(array) {
    return function(item) {
        return array.includes(item);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
console.log(arr.filter(inArrayLearnJS([1, 2, 10]))); // 1,2