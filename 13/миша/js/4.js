let img = document.querySelectorAll(".lab4img");

window.addEventListener("scroll", () => {
    if (window.scrollY >= window.screen.availHeight / 2) {
        img[1].classList.add("active");
    } else {
        img[1].classList.remove("active");
    }

    if (window.scrollY >= (window.screen.availHeight / 2) * 3) {
        img[2].classList.add("active");
    } else {
        img[2].classList.remove("active");
    }

    if (window.scrollY >= (window.screen.availHeight / 2) * 5) {
        img[3].classList.add("active");
    } else {
        img[3].classList.remove("active");
    }

    console.log(window.scrollY);
});
