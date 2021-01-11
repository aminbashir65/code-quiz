var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-container");
var startBtn = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-container");
var questionText = document.querySelector("#question");
var answerBtn1 = document.querySelector("#a1");
var answerBtn2 = document.querySelector("#a2");
var answerBtn3 = document.querySelector("#a3");
var answerBtn4 = document.querySelector("#a4");
var endEl = document.querySelector("#end-container");
var finalScoreText = document.querySelector("#final-score");
var inputEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");
var timeLeft = 60;

function start() {
    startEl.classList.add("hide")
    questionEl.classList.remove("hide")
    timer()
}

function timer() {
    var interval = setInterval(function() {
        timerEl.textContent = timeLeft
        timeLeft--
    }, 1000)
}
startBtn.onclick = start;