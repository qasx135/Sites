const basket = document.querySelector(".basket");
const products = document.querySelectorAll(".product");
const priceText = document.querySelector("#priceText");

let price = 0;

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", () => {
        const selectedProduct = products[i].cloneNode(true);
        basket.appendChild(selectedProduct);
        price = price + Number(products[i].dataset.price);
        priceText.innerHTML = price;
    });
}
