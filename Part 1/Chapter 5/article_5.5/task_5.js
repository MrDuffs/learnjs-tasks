let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort((a,b) => a.localeCompare(b));
}

console.log(copySorted(arr)); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)