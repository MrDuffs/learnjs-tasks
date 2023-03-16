let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // map.keys() возвращает объект по ключам

console.log(keys);

keys.push("more");
console.log(keys);