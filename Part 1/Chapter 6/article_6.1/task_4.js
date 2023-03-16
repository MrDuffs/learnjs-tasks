let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// Способ с циклом
function printList(list) {
    let obj = list;
    let result = [];

    while (obj) {
        result.push(obj.value);
        obj = obj.next;
    }

    return result.join(' -> ');
}

// Способ с рекурсией
function recursionPrintList(list) {
    return (list) ? `${list.value} -> ${recursionPrintList(list.next)}` : null;
}

console.log(printList(list));
console.log(recursionPrintList(list));