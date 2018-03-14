"use strict"


let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;




// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();



}

//30 second countdown timer
var timeLeft = 30;

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        $("#timer").text(`Time Remaining: ${timeLeft} seconds`);
        timeLeft--;
    }
}

function doSomething() {
    alert("Hi");
}


