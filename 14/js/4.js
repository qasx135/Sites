const slider = document.getElementById("slider");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener("touchstart", touchStart);
slider.addEventListener("touchmove", touchMove);
slider.addEventListener("touchend", touchEnd);

function touchStart(e) {
    startPosition = e.touches[0].clientX;
    isDragging = true;
}

function touchMove(e) {
    if (!isDragging) return;

    const currentPosition = e.touches[0].clientX;
    const distance = currentPosition - startPosition;

    currentTranslate = prevTranslate + distance;

    slider.style.transform = "translateX(" + currentTranslate + "px)";
}

function touchEnd() {
    isDragging = false;
    prevTranslate = currentTranslate;
}

const rangeInput = document.querySelector(".range");

rangeInput.addEventListener("input", function () {
    slider.style.transform = "translateX(" + -rangeInput.value * 2 + "%)";
});
