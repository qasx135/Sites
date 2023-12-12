// лаба1
document.getElementById("contents").addEventListener("click", function (event) {
    const LinkClick = event.target.closest("a");
    console.log(event.target.closest("a"));

    if (LinkClick) {
        const text = window.confirm("Перейти по Сылке?");

        if (!text) {
            event.preventDefault();
        }
    }
});
