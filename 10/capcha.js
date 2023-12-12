let capcha = document.querySelector("#capcha");
let errors = document.querySelector(".errors");
let input = document.querySelector(".capchaInput");
let next = false;
let capchaBool = true;

capchaCenerateText();

function capchaCenerateText() {
    let capchaSimvol = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 5; i++) {
        capchaSimvol += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    capcha.innerHTML = capchaSimvol;
}

function capchaCenerateNumbers(min, max) {
    x = Math.floor(Math.random() * (max - min));
    y = Math.floor(Math.random() * (max - min));
    capcha.innerHTML = x + "+" + y;
    return (num = x + y);
}

function errorF(bool) {
    if (bool == true) {
        errors.classList.add("true");
        errors.innerHTML = "Верно)";
    } else {
        errors.innerHTML = "Отказанно!";
    }
}

function check() {
    if (input.value == capcha.innerHTML) {
        errorF(true);
    } else {
        input.value = "";
        capchaBool = false;
        capchaCenerateNumbers(1, 100);
    }
}

function show() {}

input.oninput = function () {
    if (input.value.length == capcha.innerHTML.length && capchaBool) check();

    if (!capchaBool) {
        if (num == Number(input.value)) {
            errorF(true);
        }
    }
};

function button() {
    if (input.value.length == 0) {
        return;
    }
    if (!capchaBool) {
        errorF(false);
    }
    check();
}
