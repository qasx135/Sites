let div = document.querySelector("#div");
let img = document.querySelector("#img");

img.style.width = 200 + "px";
img.style.height = 200 + "px";
img.style.position = "fixed";
img.style.transform = "translate(-50%, -50%)";
img.style.top = "50%";
img.style.left = "50%";

function divClick() {
    div.style.width = document.querySelector("#d1").value + "px";
    div.style.height = document.querySelector("#d2").value + "px";
}

function imgClick() {
    img.style.width = document.querySelector("#i1").value + "px";
    img.style.height = document.querySelector("#i2").value + "px";
}
