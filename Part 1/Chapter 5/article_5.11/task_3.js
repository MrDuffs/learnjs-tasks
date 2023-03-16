let date = new Date(2012, 0, 3);

function getLocalDay(date) {
    return date.getDay() == 0 ? 7 : date.getDay();
}

console.log(getLocalDay(date));