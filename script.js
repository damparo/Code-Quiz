var timeEl = document.querySelector(".time");
var startQuiz = document.querySelector("#startbutton");
var secondsLeft = 76;

startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
})

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






