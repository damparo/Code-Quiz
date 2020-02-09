//added timer
var timeEl = document.querySelector(".time");
var startQuiz = document.querySelector("#startbutton");
var secondsLeft = 76;
//prevent browser from refreshing
startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
})
//connected timer with start button
startQuiz.addEventListener("click", function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
})
setTime();

startQuiz.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("container").style.display = "none";
});

//connect start button with questions - make it so that the answered question hides, then brings up the next
//set up arrays
var quizQuestions = [
    {
        question1: "Commonly used data types DO NOT include:",
        answers1: [
            { strings: "no", isCorrect: false },
            { booleans: "no", isCorrect: false },
            { alerts: "yes", isCorrect: true },
            { numbers: "no", isCorrect: false },
        ],
        question2: "The condition in an if/else statement is enclosed within___.",
        answers2: [
            { quotes: "no", isCorrect: false },
            { curlybrackets: "no", isCorrect: false },
            { parentheses: "yes", isCorrect: true },
            { squarebrackets: "no", isCorrect: false },
        ],
        question3: "Arrays in JavaScript can be used to store___.",
        answers3: [
            { numbersandstrings: "no", isCorrect: false },
            { otherarrays: "no", isCorrect: false },
            { booleans: "no", isCorrect: false },
            { alloftheabove: "yes", isCorrect: true },
        ],
        question4: "String values must be enclosed within__ when being assigned to variables.",
        answers4: [
            { commas: "no", isCorrect: false },
            { curlybrackets: "no", isCorrect: false },
            { quotes: "yes", isCorrect: true },
            { parentheses: "no", isCorrect: false },
        ],
        question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers5: [
            { javascript: "no", isCorrect: false },
            { terminalbash: "no", isCorrect: false },
            { forloops: "no", isCorrect: false },
            { consolelog: "yes", isCorrect: true },
        ],

        
    }
]

