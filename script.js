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
var questionIndex = 0

var questions = [{
    question: "Which of the following is not a method in the “JSON” object according to the ECMAScript specification?",
    answer: "JSON.fromString",
    options: [
        "JSON.stringify",
        "JSON.fromString",
        "JSON.parse",
        "None of these",
    ]

}, {
    question: "In web design, what does CSS stand for?",
    answer: "cascading style sheet",
    options: [
        "counter strike: source",
        "corrective style sheet",
        "cascading style sheet",
        "computer style sheet"
    ]
}, {

    question: "Commonly used data types DO NOT include:",
    answer: "Bootstraps",
    option: [
        "Strings",
        "Bootstraps",
        "Alerts",
        "Numbers"],
}, {
    question: "The condition in an if/else statement is enclosed within ____.",
    answer: "Parentheses",
    option: [
        "Quotes",
        "Curly Brackets",
        "Parentheses",
        "Square Brackets"],
},


]


function start() {
    startEl.classList.add("hide")
    questionEl.classList.remove("hide")
    timer()
    nextQuestion()
}

function timer() {
    var interval = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--
        if (timeLeft === 0) {
            clearInterval(interval)
            timerEl.textContent = 0
        }
    }, 1000)
}
function nextQuestion() {
    questionText.innerText = questions[questionIndex].question
    answerBtn1.innerText = questions[questionIndex].options[0]
    answerBtn2.innerText = questions[questionIndex].options[1]
    answerBtn3.innerText = questions[questionIndex].options[2]
    answerBtn4.innerText = questions[questionIndex].options[3]
}
function handleAnswer(event) {
    event.preventDefault()
    console.log(event.target.innerText)
    if (event.target.innerText === questions[questionIndex].answer) {
        console.log("correct")
        //add 1 to score
    }
    else {
        console.log("incorrect")
        // subtract 10 sec
    }
    questionIndex++;
    nextQuestion()
}
startBtn.onclick = start;
answerBtn1.onclick = handleAnswer;
answerBtn2.onclick = handleAnswer;
answerBtn3.onclick = handleAnswer;
answerBtn4.onclick = handleAnswer;