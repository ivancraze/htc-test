// добавление нулей 
function zeroFirstFormat(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
}

// получение текущей даты и времени
function dateTime() {
    let currentDatetime = new Date();
    let day = zeroFirstFormat(currentDatetime.getDate());
    let month = zeroFirstFormat(currentDatetime.getMonth()+1);
    let year = currentDatetime.getFullYear();
    let hours = zeroFirstFormat(currentDatetime.getHours());
    let minutes = zeroFirstFormat(currentDatetime.getMinutes());
    let seconds = zeroFirstFormat(currentDatetime.getSeconds());

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

// вывод даты
setInterval(function () {
  document.querySelector('.clock__item').innerHTML = dateTime();
}, 1000);