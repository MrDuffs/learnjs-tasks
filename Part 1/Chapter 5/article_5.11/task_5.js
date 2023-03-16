

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(0);

    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); //29
console.log(getLastDayOfMonth(2012, 0)); //январь - 31
console.log(getLastDayOfMonth(2012, 3)); //апрель - 30
console.log(getLastDayOfMonth(2012, 4)); //май - 31
console.log(getLastDayOfMonth(2013, 1)); //28