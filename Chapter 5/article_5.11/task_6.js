
function getSecondsToday() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let currentTime = Date.now();

    return Math.round((currentTime - currentDate) / 1000);
}

console.log(getSecondsToday());