let plus = document.querySelectorAll("#plus")
let amount = document.querySelectorAll("h1")
let out = document.querySelector(".output-array")
let tot = document.querySelector("#total")
let filt = document.querySelector(".filter")
let count = 0
first_output = []
fil_array = []
arr = []
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        
        let am = Number(amount[i].innerHTML)
        count = count + am
        first_output.push(am)
        render()
    })
}

function remove() {
    count  = count - first_output[first_output.length - 1]
    first_output.pop()
    
    render()
}

function sortUp() {
    first_output.sort(function(a, b){return a - b})
    render()
}

function sortD() {
    first_output.sort(function(a, b){return b - a})
    render()
}

function removeAll() {
    first_output = []
    count = 0
    render()
}

function smallTotal() {
    count = count + first_output[event.target.value]
    render()
}









function render() {
    tot.innerHTML = count
    let list = document.querySelectorAll(".adding")
    let len = list.length
    for (let i = 0; i < len; i++) {
        list[i].remove()
    }
    for (let i = 0; i < first_output.length; i++) {
        let main_div = document.createElement("div")
        let div = document.createElement("div")
        let but = document.createElement("button")
        div.innerHTML = first_output[i]
        but.innerHTML = "+"
        but.onclick = smallTotal
        main_div.classList.add("adding")
        but.classList.add("but_class")
        but.setAttribute("value", i)
        out.appendChild(main_div)
        main_div.appendChild(div)
        main_div.appendChild(but)
        
    }
}

function filtered() {
    let a  = prompt("a")
    a = Number(a)
    let b = prompt("b")
    b = Number(b)
    fil_array = first_output.filter(curr => (curr >= a || curr <= b))
    console.log(fil_array)
    for (let i = 0; i < fil_array.length; i++) {
        let div = document.createElement("div")
        div.classList.add("adding")
        div.style.background = "red"
        div.innerHTML = fil_array[i]
        filt.appendChild(div)
    }
}