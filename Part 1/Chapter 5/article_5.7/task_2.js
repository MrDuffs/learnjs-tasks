let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();

//     for (let elem of arr) {
//         let word = elem.toLowerCase().split('').sort().join(' ');
//         map.set(word, elem);
//     }

//     return Array.from(map.values());
// }

function aclean(arr) {
    const obj = arr.reduce((result, item) => {
        let sortedKey = item.toLowerCase().split('').sort().join('');
        if (sortedKey in result) {
            return result;
        }
        result[sortedKey] = item;
        return result;
    }, {})

    return Object.values(obj);
}

console.log(aclean(arr));