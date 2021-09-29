var viewHighscores = document.querySelector("#highscore");
var secondsDisplay = document.querySelector("#seconds");
var timeLabel = document.querySelector(".time");
var container = document.querySelector(".container");
var headerDisplay = document.querySelector("#title");
var quizInstructions = document.querySelector("#quiz-instructions");
var startButton = document.querySelector("#start");


var interval;
var seconds = 75;
var Question;
var optionA;
var optionB;
var optionC;
var optionD;
var line;
var correct;
var wrong;
var scoreMessage;
var label;
var input;
var submit;
var highScoresList;
var goBackbutton;
var clearHs;
var score = 100;
var user;
var scoreItem; 


function startTimer(){
    QuestionOne();
    interval = setInterval(function() {
        seconds--;
        secondsDisplay.textContent = seconds;
        if(seconds == 0){
            clearInterval(interval);
        }
    }, 1000);
}

function QuestionOne(){
    removeQuizIntro();
    createQuestionElements();
    Question.innerHTML = "Where in the HTML file should a JavaScript link be placed?";
    optionA.innerHTML = "A. Top";
    optionB.innerHTML = "B. Middle";
    optionC.innerHTML = "C. Bottom";
    optionD.innerHTML = "D. Right";
    optionA.onclick = function(){
        QuestionTwo();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionB.onclick = function(){
        QuestionTwo();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionC.onclick = function(){
        QuestionTwo();
        createLine();
        correctAns();
    }
    optionD.onclick = function(){
        QuestionTwo();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function QuestionTwo(){
    Question.innerHTML = "In JavaScript, what is a block of code used to perform a particular task called?";
    optionA.innerHTML = "A. Function";
    optionB.innerHTML = "B. Array";
    optionC.innerHTML = "C. Element";
    optionD.innerHTML = "D. Button";
    removeAns();
    optionA.onclick = function(){
        QuestionThree();
        createLine();
        correctAns();
    }
    optionB.onclick = function(){
        QuestionThree();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionC.onclick = function(){
        QuestionThree();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionD.onclick = function(){
        QuestionThree();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function QuestionThree(){
    Question.innerHTML = "In JavaScript, what is the correct method to share something with a user?";
    optionA.innerHTML = "A. Prompt";
    optionB.innerHTML = "B. Alert";
    optionC.innerHTML = "C. Confirm";
    optionD.innerHTML = "D. Siren";
    removeAns();
    optionA.onclick = function(){
        QuestionFour();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionB.onclick = function(){
        QuestionFour();
        createLine();
        correctAns();
    }
    optionC.onclick = function(){
        QuestionFour();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionD.onclick = function(){
        QuestionFour();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function QuestionFour(){
    Question.innerHTML = "How do you declare a variable in JavaScript?";
    optionA.innerHTML = "A. variable newVariable; ";
    optionB.innerHTML = "B. va Newvariable; ";
    optionC.innerHTML = "C. v newVariable; ";
    optionD.innerHTML = "D. var newVariable; ";
    removeAns();
    optionA.onclick = function(){
        QuestionFive();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionB.onclick = function(){
        QuestionFive();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionC.onclick = function(){
        QuestionFive();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionD.onclick = function(){
        QuestionFive();
        createLine();
        correctAns();
    }
}

function QuestionFive(){
    Question.innerHTML = "In Javascript, how do you capture an event triggered by the user?";
    optionA.innerHTML = "A. Alert";
    optionB.innerHTML = "B. For loop";
    optionC.innerHTML = "C. Event listener";
    optionD.innerHTML = "D. While loop";
    removeAns();
    optionA.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionB.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionC.onclick = function(){
        allDone();
        createLine();
        correctAns();
    }
    optionD.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function allDone(){
    clearInterval(interval);
    removeQuizBtns();
    removeAns();
    createAllDoneElements();
    Question.innerHTML = "Complete";
    scoreMessage.textContent = "Final Score = " + score;
    label.textContent = "Enter Initials: ";
    submit.innerHTML = "Submit";
    submit.onclick = function(){
        saveUser();
        highScores();
    }
}

function highScores(){
    hideNav();
    removeAllDone();
    createHighscoresElements(); 
    clearHs.onclick = function(){
        localStorage.removeItem("user");
        localStorage.removeItem("score");
        highScoresList.remove();
    }
    goBackbutton.onclick = function(){
        goBack();
    }
}

function goBack(){
    removeHighscores();
    addInitialPage();
}

function removeQuizIntro(){
    headerDisplay.style.display = "none";
    quizInstructions.style.display = "none";
    start.style.display = "none";
}

function createQuestionElements(){
    Question = document.createElement("h2");
    container.appendChild(Question);
    optionA = document.createElement("button");
    container.appendChild(optionA);
    optionB = document.createElement("button");
    container.appendChild(optionB);
    optionC = document.createElement("button");
    container.appendChild(optionC);
    optionD = document.createElement("button");
    container.appendChild(optionD);
}

function createLine(){
    line = document.createElement("hr");
    container.appendChild(line);
}

function removeAns(){ 
    setTimeout(() => {
        line.remove();
        correct.remove();
        wrong.remove();
    }, 500)
}

function correctAns(){
    correct = document.createElement("p");
    correct.textContent = "Correct!";
    container.appendChild(correct);
}

function wrongAns(){
    wrong = document.createElement("p");
    wrong.textContent = "Wrong!";
    container.appendChild(wrong);
}


function deductTime(){
    seconds = seconds - 10;
}


function deductScore(){
    score = score - 20;
}

function removeQuizBtns(){
    optionA.remove();
    optionB.remove();
    optionC.remove();
    optionD.remove();
}

function createAllDoneElements(){
    scoreMessage = document.createElement("p");
    container.appendChild(scoreMessage);
    label = document.createElement("label");
    container.appendChild(label);
    input = document.createElement("input");
    container.appendChild(input);
    submit = document.createElement("button");
    submit.style.display = "inline";
    submit.style.marginLeft = "5px";
    container.appendChild(submit);
}

function saveUser(){
    user = input.value;
    localStorage.setItem("user", user);
    localStorage.setItem("score", score);
}

function hideNav(){
    viewHighscores.style.visibility = "hidden";
    secondsDisplay.style.visibility = "hidden";
    timeLabel.style.visibility = "hidden";
}

function removeAllDone(){
    scoreMessage.remove();
    label.remove();
    input.remove();
    submit.remove();
}

function createHighscoresElements(){
    Question.innerHTML = "Highscores";
    highScoresList = document.createElement("ol");
    highScoresList.style.backgroundColor = "violet";
    container.appendChild(highScoresList);
    scoreItem = document.createElement("li");
    scoreItem.textContent = localStorage.getItem("user") + "-" + localStorage.getItem("score");
    highScoresList.appendChild(scoreItem);
    goBackbutton = document.createElement("button");
    goBackbutton.innerHTML = "Go Back";
    goBackbutton.style.display = "inline";
    goBackbutton.style.marginRight = "5px";
    container.appendChild(goBackbutton);
    clearHs = document.createElement("button");
    clearHs.innerHTML = "Clear Highscores";
    clearHs.style.display = "inline";
    container.appendChild(clearHs);
}

function removeHighscores(){
    Question.remove();
    highScoresList.remove();
    goBackbutton.remove();
    clearHs.remove();
}

function addInitialPage(){
    seconds = 75;
    score = 100;
    secondsDisplay.textContent = seconds;
    viewHighscores.style.visibility = "visible";
    secondsDisplay.style.visibility = "visible";
    timeLabel.style.visibility = "visible";
    headerDisplay.style.display = "block";
    quizInstructions.style.display = "block";
    start.style.display = "block";
}

function viewHighscoresFunct(){
    hideNav();
    removeQuizIntro();
    Question = document.createElement("h2");
    container.appendChild(Question);
    createHighscoresElements(); 
    clearHs.onclick = function(){
        localStorage.removeItem("user");
        localStorage.removeItem("score");
        highScoresList.remove();
    }
    goBackbutton.onclick = function(){
        goBack();
    }
}
start.addEventListener("click", startTimer);
viewHighscores.addEventListener("click", viewHighscoresFunct);