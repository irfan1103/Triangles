const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector('#submit-ans');
const resetButton = document.querySelector('#btn-reset');
const outputElement = document.querySelector('#output');

const correctAnswer = ["90","Isosceles","Right","Equilateral","An equilateral triangle is also isosceles","one right angle","90","True","120","Both"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()) {
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index + 1;
    }
    // console.log(score);
    outputElement.innerHTML = "Your Score is " + score;
}

function resetScore(){
    // console.log(score);
    outputElement.innerHTML = "Your quiz has been reset ";
}

submitAnsBtn.addEventListener('click',calculateScore);
resetButton.addEventListener('click',resetScore);