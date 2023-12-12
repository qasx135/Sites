const images = document.querySelectorAll(".smallImage");
const img = document.querySelector(".bigImage");

img.setAttribute("src", images[0].getAttribute("src"));

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        let srcSmall = images[i].getAttribute("src");
        img.setAttribute("src", srcSmall);
    });
}
