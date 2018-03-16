"use strict"

let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let correct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let incorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(".timecount").hide();
$(".questions").hide();
$(".btndone").hide();

function endGame() {
    $(".timecount").empty();
    $(".questions").empty();
    $(".btndone").hide();
    $("#gameover").text(`All Done!`);
    correctAnswers = correct.reduce(function (a, b) { return a + b; }, 0);
    $("#numcorrect").text(`Correct Answers: ${correctAnswers}`);
    incorrectAnswers = incorrect.reduce(function (a, b) { return a + b; }, 0);
    $("#numincorrect").text(`Incorrect Answers ${incorrectAnswers}`);
    unanswered = 12 - clicked.reduce(function (a, b) { return a + b; }, 0);
    $("#numblank").text(`Unanswered: ${unanswered}`);
}

$(".btnstart").click(function () {

    //30 second countdown timer
    let timeLeft = 30;

    const timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            endGame();
        } else {
            $("#timer").text(`Time Remaining: ${timeLeft} seconds`);
            timeLeft--;
        }
    }

    $(".btnstart").hide();
    $(".timecount").show();
    $(".questions").show();
    $(".btndone").show();

});

$(".q1").click(function () {
    console.log($(this).val());
    if ($(this).val() === "1969") {
        correct[1] = 1; 
        incorrect[1] = 0;
    } else {
        incorrect[1] = 1;
        correct [1] = 0;
    }
    clicked[1] = 1;
});

$(".q2").click(function () {
    if ($(this).val() === "Jupiter") {
        correct[2] = 1;
        incorrect[2] = 0;
    } else {
        incorrect[2] = 1;
        correct[2] = 0;
    }
    clicked[2] = 1;
});

$(".btndone").click(function () {
    endGame();
    $(".timecount").hide();
});