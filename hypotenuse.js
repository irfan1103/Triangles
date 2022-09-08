const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-button');
const outputElement = document.querySelector('#output');

function calculateSumOfSquares(a,b) {
    const sum = Math.pow(a,2) + Math.pow(b,2);
    console.log(sum);
    return sum;
}

function calculateHypotenuse() {
    const sumOfSquares =  calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    if(Number(sides[0].value)>0&&Number(sides[1].value)>0){
        const length = Math.sqrt(sumOfSquares);
        outputElement.innerText = length;
    } else {
        outputElement.innerText = "enter values properly";
    }
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);