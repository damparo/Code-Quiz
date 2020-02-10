//added timer
var timeEl = document.querySelector(".time");
var startQuiz = document.querySelector("#startbutton");
var secondsLeft = 76;
//prevent browser from refreshing
//connect start button with hiding first block
startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
    document.getElementById("container").style.display = "none";
    document.getElementById("questionone").style.display = "block";
    var firstquestion = document.createElement("h2");
    firstquestion.innerHTML = "this is h2";
    document.getElementById("questionone").appendChild(firstquestion);
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

var quizQuestions = [
    {
        question1: "Commonly used data types DO NOT include:",
        answers1: [
            { text: "strings", isCorrect: false },
            { text: "booleans", isCorrect: false },
            { text: "alerts", isCorrect: true },
            { text: "numbers", isCorrect: false },
        ],
        question2: "The condition in an if/else statement is enclosed within___.",
        answers2: [
            { text: "quotes", isCorrect: false },
            { text: "curly brackets", isCorrect: false },
            { text: "parentheses", isCorrect: true },
            { text: "square brackets", isCorrect: false },
        ],
        question3: "Arrays in JavaScript can be used to store___.",
        answers3: [
            { text: "numbers and strings", isCorrect: false },
            { text: "other arrays", isCorrect: false },
            { text: "booleans", isCorrect: false },
            { text: "all of the above", isCorrect: true },
        ],
        question4: "String values must be enclosed within__ when being assigned to variables.",
        answers4: [
            { text: "commas", isCorrect: false },
            { text: "curly brackets", isCorrect: false },
            { text: "quotes", isCorrect: true },
            { text: "parentheses", isCorrect: false },
        ],
        question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers5: [
            { text: "javascript", isCorrect: false },
            { text: "terminal bash", isCorrect: false },
            { text: "for loops", isCorrect: false },
            { text: "console.log", isCorrect: true },
        ],

        
    }
]

quizQuestions.question1.answers1

