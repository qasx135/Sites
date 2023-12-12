let img = document.querySelector(".imgScrool");

window.addEventListener("scroll", () => {
    img.style.top = window.scrollY  + "px";
});
