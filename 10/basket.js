let tovar = document.querySelectorAll("#tovar");
let priceText = document.querySelectorAll("#price");
let card = document.querySelectorAll("#card");
let basket = document.querySelector(".basket");

function Accumulator(value) {
    this.value = value;

    this.read = function () {
        let price = prompt();
        this.value += Number(price);
        console.log(this.value);
        basket.innerHTML = this.value;
    };
}
let type = new Accumulator(0);

function add() {
    type.read();
}
