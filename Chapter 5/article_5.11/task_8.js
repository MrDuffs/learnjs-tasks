
function formatDate(date) {
    let now = new Date();
    let diff = Math.floor((now - date) / 1000);

    if (diff <= 1) {
        return 'прямо сейчас';
    } else if (diff <= 30) {
        return `${diff} сек. назад`;
    } else if (diff <= 3600) {
        return `${Math.floor(diff / 60)} мин. назад`
    } else {
        return new Date(date).toLocaleString().slice(0,-3);;
    }

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );