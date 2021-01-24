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
setInterval(() => {
  document.getElementById('js-clock').innerHTML = dateTime();
}, 1000);


//валидация формы
const pass = document.getElementById("formPass");

pass.addEventListener("input", function (e) {
  e.preventDefault();
  if (pass.validity.patternMismatch) {
    pass.setCustomValidity("Пароль должен содержать не менее 6 символов, включая заглавные буквы, цифры и спецсимволы");
  } else {
    pass.setCustomValidity("");
  }
});