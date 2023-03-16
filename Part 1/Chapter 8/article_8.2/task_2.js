//пример функции-конструктора для объекта obj
function Object(value) {
    this.value = value;
}

let obj = new Object('value1');

let obj2 = new obj.constructor('value2');

console.log(obj2.value);

//пример функции-конструктора, с которой такой код поведёт себя неправильно
function Object1(value) {
    this.value = value;
    Object1.prototype = {};
}

let obj3 = new Object();

let obj4 = new obj.constructor();

console.log(obj4.value);