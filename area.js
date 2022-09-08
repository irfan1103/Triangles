const inputs = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-button');
const outputElement = document.querySelector('#output');


function calculateArea(a,b) {
    const area =  0.5 * a * b;
    return area;
}

function printArea(e) {
    e.preventDefault();
    const areaOfTriangle = calculateArea(Number(inputs[0].value),Number(inputs[1].value));
    if(Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0){
        outputElement.innerText = "Please input properly";
    } else{
        outputElement.innerText = "Area of triangle is : " + areaOfTriangle;
    }
}

areaBtn.addEventListener("click",printArea);