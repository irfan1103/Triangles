const inputs = document.querySelectorAll('.input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputElement = document.querySelector('#output');

function sumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sum = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sum == 0 || sum <0 || Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value<=0)){
        outputElement.innerText = "Please enter properly";
    } else if(sum === 180) {
        outputElement.innerText = "yes it is a triangle";
    } else {
        outputElement.innerText = "Opps Not a triangle";
    }
}

isTriangleBtn.addEventListener("click",isTriangle);