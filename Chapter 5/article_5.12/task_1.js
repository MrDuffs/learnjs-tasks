let user = {
    name: "Василий Иванович",
    age: 35
};

let userCopy = JSON.parse(JSON.stringify(user));

console.log(userCopy);