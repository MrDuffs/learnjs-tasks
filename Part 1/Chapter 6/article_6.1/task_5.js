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
function reverseList(list) {
    let obj = list;
    let result = [];

    while (obj) {
        result.push(obj.value);
        obj = obj.next;
    }

    return result.reverse().join(' -> ');
}

// Способ рекурсивный
function recursivelyReverseList(list) {
    return (list) ? `${recursivelyReverseList(list.next)} -> ${list.value}`.slice(1) : '';
}

console.log(reverseList(list));
console.log(recursivelyReverseList(list));