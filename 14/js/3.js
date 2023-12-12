const li = document.querySelectorAll("#li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (event) => {
        if (event.ctrlKey === false && event.metaKey === false) {
            for (let j = 0; j < li.length; j++) {
                li[j].classList.remove("selected");
            }
        }

        li[i].classList.toggle("selected");
    });
}
