let notifications = document.querySelector(".notifications12");
let mainInterface = document.querySelector(".interUl");
let delNot = document.querySelector(".deleteNotif");
let count1 = 0;
let clicked = false;
let option = "Hello for 1.5 second";
let timer;

let interf = {
    input: [],
};

function interface() {
    let timer = setInterval(addItem, 1000);
    function addItem() {
        let item = prompt("XUI");
        if (item != "" && item != null && item != undefined) {
            let div = document.createElement("li");
            div.innerHTML = item;
            div.classList.add("addedInter");
            mainInterface.appendChild(div);
        } else {
            clearInterval(timer);
        }
    }
}

function showNotificztion(option) {
    let div = document.createElement("div");
    div.innerHTML = option;
    div.classList.add("notificationDelete");
    delNot.appendChild(div);
    setTimeout(function () {
        div.style.display = "none";
    }, 1500);
}

showNotificztion(option);
//---------------------------------------------------------------//

function addNewNot() {
    count1++;
    let div = document.createElement("div");
    let button = document.createElement("button");
    div.innerHTML = "Уведомление" + count1;
    div.classList.add("addedNot");
    notifications.appendChild(div);
    button.innerHTML = "Скрыть";
    button.classList.add("closeBtn");
    div.appendChild(button);

    let btns = document.querySelectorAll(".closeBtn");
    let divs = document.querySelectorAll(".addedNot");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            divs[i].style.display = "none";
        });
    }
    console.log(count1);
}

function stopDecorator(func) {
    return function () {
        if (clicked) {
            console.log("in decor");
            clearInterval(timer);
            timer = setInterval(func, 10000);
            console.log(clicked);
        } else {
            console.log("almost in dec");
            timer = setInterval(func, 3000);
        }
    };
}

addNewNot = stopDecorator(addNewNot);
addNewNot();

function clicker() {
    if (clicked) clicked = false;
    else clicked = true;
    console.log("clicked");
    addNewNot();
}
