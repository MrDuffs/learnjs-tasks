let arr = [1, 2, 3];

function shuffle(array) {
    array = array.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);