// 1-ый способ
function camelize(str) {
    const arr = str.split('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

// 2-ой способ
function camelizeSecond(str) {
    return str
        .split('-')
        .map(
            (elem, i) => (i == 0 ? elem : elem.charAt(0).toUpperCase() + elem.slice(1))
        )
        .join('');
}

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition


console.log(camelizeSecond("background-color")); // backgroundColor
console.log(camelizeSecond("list-style-image")); // listStyleImage
console.log(camelizeSecond("-webkit-transition")); // WebkitTransition