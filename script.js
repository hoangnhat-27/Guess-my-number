'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

//again button
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(20);
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});

//check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //score and highScore
    let score = Number(document.querySelector('.score').textContent);
    let highScore = Number(document.querySelector('.highscore').textContent);

    if (!guess) displayMessage("No number inputed !");
    else if (guess <= 0 || guess > 20) {
        displayMessage("Number out of range!");
    } else if (guess !== secretNumber) {
        //too high guess
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            displayScore(score);
        } else {
            displayMessage("Game over!");
            displayScore(0);
        }
    } else if (guess === secretNumber) {
        //correct guess
        displayMessage("Correct number!");
        displayScore(score);
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
}
);
