"use strict"
function admin() {
    let tmp = prompt("Вы админ ?");
    if (tmp == null || tmp == "") {
        alert("Отменено");
    } else if(tmp == "Админ") {
        let password = prompt("Введите пароль");
        if (password == "Я главный") {
            alert("Здравствуйте");
        } else if (password == null || password == "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль !");
        }
    } else {
        alert("Я не могу вас понять");
    }
}