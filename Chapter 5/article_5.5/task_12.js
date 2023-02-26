let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

// 1-ый способ
// function unique(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.includes(arr[i])) {
//             continue;
//         }
//         result.push(arr[i]);
//     }

//     return result;
// }

// 2-ой способ
function unique(arr) {
    return arr.reduce((result, elem) => {
        if (!result.includes(elem)) {
            result.push(elem);
        }
        return result;
    }, []);
}

console.log(unique(strings)); // кришна, харе, :-O