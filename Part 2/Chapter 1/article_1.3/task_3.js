//Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их.

// Мой код для выделения ячеек по диагонали, написанный по невнимательности
let table = document.body.firstElementChild;
let rows = table.firstElementChild.children;
let rowsLength = table.firstElementChild.children.length;

for (let i = 0; i < rowsLength; i++) {
    rows[i].children[i].style.backgroundColor = 'red';
}

// Код со свойствами таблицы
// let table = document.body.firstElementChild;
// let rows = table.rows;

// for (let i = 0; i < table.rows.length; i++) {
//     rows[i].cells[i].style.backgroundColor = 'red';
// }