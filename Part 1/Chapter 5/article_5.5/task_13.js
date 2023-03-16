let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'john', name: "John Smith", age: 30},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    return arr.reduce((result, elem) => {
        if (elem.id in result) return result;
        result[elem.id] = elem;
        return result;
    }, {});
}

let usersById = groupById(users);

console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/