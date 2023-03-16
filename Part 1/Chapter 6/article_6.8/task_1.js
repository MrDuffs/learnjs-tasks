// setTimeout
function printNumbers(from, to) {
    let start = from;

    setTimeout(() => {
        console.log('number', start);
        if (start != to) {
            start++;
            setTimeout(printNumbers, 0, start, to);
        }
    }, 1000);
}

// setInterval
function printNumbersByInterval(from, to) {
    let start = from;

    let timerId = setInterval(() => {
        console.log('number', start);
        if (start != to) {
            start++;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

printNumbers(3, 9);
// printNumbersByInterval(3, 9);