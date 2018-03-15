"use strict"

let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 2;
let clicked = 0;

$(".timecount").hide();
$(".questions").hide();
$(".btndone").hide();

function endGame() {
    $(".timecount").empty();
    $(".questions").empty();
    $(".btndone").empty();
    $("#gameover").text(`All Done!`);
    $("#numcorrect").text(`Correct Answers: ${correctAnswers}`);
    $("#numincorrect").text(`Incorrect Answers ${incorrectAnswers}`);
    unanswered = unanswered - clicked;
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

    $(".btnstart").empty();
    $(".timecount").show();
    $(".questions").show();
    $(".btndone").show();

});

$(".q1").click(function () {
    console.log($(this).val());
    if ($(this).val() === "1969") {
        correctAnswers++;   
    } else {
        incorrectAnswers++;
    }
    clicked++;
});

$(".q2").click(function () {
    if ($(this).val() === "Jupiter") {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    clicked++;
});

$(".btndone").click(function () {
    endGame();
    $(".timecount").empty();
});