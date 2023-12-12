const circle = document.getElementById("circle");
const square = document.getElementById("square");
const colors = ["#ff5733", "#33ff57", "#5733ff"];
let indexColor = 0;

circle.style.background = colors[0];
function colorsFun() {
    indexColor++;
    if (indexColor === colors.length) indexColor = 0;

    circle.style.background = colors[indexColor];
}

setInterval(colorsFun, 3000);


function rotationSquare() {
    var rotDeg = 0;
    function rot() {
        rotDeg += 5;
        square.style.transform = 'rotate(' + rotDeg + 'deg)';
    }
    setInterval(rot, 10);
}

rotationSquare();