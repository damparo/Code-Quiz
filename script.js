//added timer
var countDown = document.querySelector("#time");
var startQuiz = document.querySelector("#startbutton");
var secondsLeft = 30;
var startPrompt = document.querySelector("#start-prompt");
var answerDiv = document.querySelector("#answers")
var questionDiv = document.querySelector("#question")
var questionIndex = 0;
var count = document.querySelector("#count");
var score = 0;
var correctMessage = document.querySelector("#display");
var youRight = document.querySelector("#display");
var itsOver = document.querySelector("#results");
//prevent browser from refreshing
//connect start button with hiding first block
startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
    document.getElementById("container").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    
    renderQuestion();  
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
});

function renderQuestion(){

    //empty the question and answer divs before we append new stuff
    questionDiv.innerHTML = "";
    answerDiv.innerHTML = "";
    if(questionIndex <= questions.length) {
    questionDiv.textContent = questions[questionIndex].question;

    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        console.log("for loop running")
        const answer = questions[questionIndex].answers[i].text;
        const isCorrect = questions[questionIndex].answers[i].isCorrect
        console.log("answer", answer);
        console.log("isCorrect", isCorrect);

         var btn = document.createElement("button");
         btn.textContent = answer
         btn.setAttribute("class", "btn btn-seconday");
        btn.setAttribute("value", isCorrect)
        answerDiv.append(btn);
    }

    questionIndex++;
}


else {

    endgame();
    
}
};



//event listener for when an answer is clicked that calls a checkAnswer function
answerDiv.addEventListener("click", function(event) {
    if(!event.target.matches("button")) return;
    //need to pull value off of button that is clicked
    var userAnswer = event.target.value;
    checkAnswer(userAnswer);
});

//function to checkAnswer
function checkAnswer (userAnswer) {
    //see if answer is correct
    if(userAnswer === "true") {
         //if answer is correct add to their score
        score++;
        count.textContent =score;
        youRight.textContent = "Correct!!";
        //add a window set timeout for the correct display for it to disappear for the next question
        renderQuestion();
    }
   else {
       //alert user or optionally you could change text in browser
    //rerun render Question function;
    renderQuestion();
   } 
   //else 
}
  
function endgame(){
    document.getElementById("results").style.display = "block";
}
// go over the code above

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", isCorrect: false },
            { text: "booleans", isCorrect: false },
            { text: "alerts", isCorrect: true },
            { text: "numbers", isCorrect: false },
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within___.",
        answers: [
            { text: "quotes", isCorrect: false },
            { text: "curly brackets", isCorrect: false },
            { text: "parentheses", isCorrect: true },
            { text: "square brackets", isCorrect: false },
        ]
    },
    { 
        question: "Arrays in JavaScript can be used to store___.",
        answers: [
            { text: "numbers and strings", isCorrect: false },
            { text: "other arrays", isCorrect: false },
            { text: "booleans", isCorrect: false },
            { text: "all of the above", isCorrect: true },
        ]
    },
    {
        question: "String values must be enclosed within__ when being assigned to variables.",
        answers: [
            { text: "commas", isCorrect: false },
            { text: "curly brackets", isCorrect: false },
            { text: "quotes", isCorrect: true },
            { text: "parentheses", isCorrect: false },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "javascript", isCorrect: false },
            { text: "terminal bash", isCorrect: false },
            { text: "for loops", isCorrect: false },
            { text: "console.log", isCorrect: true },
        ]
    }
];


    