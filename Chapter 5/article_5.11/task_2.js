let date = new Date(2012, 0, 3);  // 3 января 2012 года

// 2-ой способ
function getWeekDay(date) {
    const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    // return weekDays.find((item, i) => date.getDay() == i); можно проще
    return weekDays[date.getDay()];
}


console.log(getWeekDay(date));

// 1-ая моя попытка
// function getWeekDay(date) {
//     let weekDay = '';
//     switch (date.getDay()) {
//         case 0:
//             weekDay = 'ВС';
//             break;
//         case 1:
//             weekDay = 'ПН';
//             break;
//         case 2:
//             weekDay = 'ВТ';
//             break;
//         case 3:
//             weekDay = 'СР';
//             break;
//         case 4:
//             weekDay = 'ЧТ';
//             break;
//         case 5:
//             weekDay = 'ПТ';
//             break;
//         case 6:
//             weekDay = 'СБ';
//             break;
//     }

//     return weekDay;
// }