// const basket = document.querySelector(".basket");
// const products = document.querySelectorAll(".product");
const priceText = document.querySelector("#priceText");

// let price = 0;

// for (let i = 0; i < products.length; i++) {
//     products[i].addEventListener("click", () => {
//         const selectedProduct = products[i].cloneNode(true);
//         basket.appendChild(selectedProduct);
//         price = price + Number(products[i].dataset.price);
//         priceText.innerHTML = price;
//     });
// }
// Task 14

const products = document.querySelectorAll(".product");
for (let i = 0; i < products.length; i++) {
    products[i].onmousedown = function(event) {
        event.preventDefault();
        var newOb = products[i].cloneNode(true);
        const price = Number(newOb.textContent);

        newOb.style.position = 'absolute';
        newOb.style.zIndex = 1000;

        document.body.append(newOb);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            newOb.style.left = pageX - newOb.offsetWidth / 2 + 'px';
            newOb.style.top = pageY - newOb.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        newOb.onmouseup = function() {
            newOb.hidden = true;
            let elB = document.elementFromPoint(event.clientX, event.clientY);
            newOb.hidden = false;

            let trash = document.querySelector('.basket');
            if (!trash) {
                document.removeEventListener('mousemove', onMouseMove);
                newOb.onmouseup = null;
                newOb.remove();
                return false;
            }




            document.removeEventListener('mousemove', onMouseMove);
            newOb.onmouseup = null;
            priceText.innerHTML = Number(priceText.textContent) + price;
            newOb.onmouseup = null;
            newOb.remove();
        };
    };
}