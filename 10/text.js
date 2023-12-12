let textJS = document.querySelector(".textJS");

truncate(textJS, 50);
function truncate(textJS, tmp) {
    console.log(textJS);
    textJS.innerHTML = textJS.innerHTML.substring(0, tmp) + "...";
}
