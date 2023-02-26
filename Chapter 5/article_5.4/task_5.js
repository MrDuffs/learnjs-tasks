// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let tempSum = 0;

//     for (let elem of arr) {
//         tempSum += elem;
//         maxSum = Math.max(maxSum, tempSum);

//         if (tempSum < 0) tempSum = 0; 
//     }

//     return maxSum;
// }

function getMaxSubSum(arr) {
    let maxSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let tempSum = 0;
        for (let j = i; j < arr.length; j++) {
            tempSum += arr[j]
            if (maxSum < tempSum) maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //100
console.log(getMaxSubSum([1, 2, 3])); //6