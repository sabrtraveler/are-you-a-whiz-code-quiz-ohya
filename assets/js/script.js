//PseudoCode
// When pressing the 'Start Quiz' button:
// a. Timer goes down from 75 by a second to 0
// b. Changes page and first quiz question appears

//When user clicks right answer
// a. message on screen says Correct!
// b. goes to next quiz question

//When user clicks wrong answer
// a. message on screen says Wrong!
// b. 10 seconds is removed from timer
// c. goes to next quiz question

//universal variables
var bodyEl = document.querySelector("body");
var count = 75;
var correct = document.createTextNode("Correct!");
var wrong = document.createTextNode("Wrong!");

//quiz questions and answers
var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debbuging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//when you click on the 'start quiz' button do this
function startQuiz() {
  //timer going down from 75 seconds to 0
  timeCheck = setInterval(function () {
    document.getElementById("timer").innerHTML = count--;

    // If timer is 0 go to end of the quiz
    //change to FINAL SCORE page
    if (count === 0 || count < 0) {
      count = 0;
      clearInterval(timeCheck);

      //change innerhtml to FINAL SCORE page
      setTimeout(quizQuestion6, 1000);
      function quizQuestion6() {
        document.getElementById("quiz-section").innerHTML =
          "<h1>ALL DONE!</h1><br><p>Your final score is " +
          count +
          "<br><br>Enter Initials: <input id='initials'></input><br><br><button id='submit'>Submit</button>";

        // stop timer when quiz finished
        clearInterval(timeCheck);

        //remove previous correct or wrong message
        if (wrong.parentNode) {
          wrong.parentNode.removeChild(wrong);
        }
        if (correct.parentNode) {
          correct.parentNode.removeChild(correct);
        }

        //event listener if user clicks submit initials button go to Highscore page
        document
          .getElementById("submit")
          .addEventListener("click", quizQuestion7);

        //HIGHSCORE page
        function quizQuestion7() {
          //how to save and get high score from local storage
          var storeInitial = document.getElementById("initials").value;
          highScores = JSON.parse(localStorage.getItem("highscores"));
          var ScoreObj = { User: storeInitial, Score: count };
          localStorage.setItem("highscores", JSON.stringify(ScoreObj));
          console.log(highScores);
          //change innerhtml to HIGHSCORES page
          document.getElementById("quiz-section").innerHTML =
            "<h1>HIGHSCORES</h1>" +
            "Username: " +
            ScoreObj.User +
            " " +
            " Score: " +
            ScoreObj.Score +
            "<br><button id='reset'>Clear High Scores</button><button id='back'>Go Back</button>";
          //if user clicks reset button delete high scores in local storage
          document
            .getElementById("reset")
            .addEventListener("click", function clearHighScore() {
              localStorage.clear();
            });
          //if user clicks back go back to the beginning of the quiz
          document
            .getElementById("back")
            .addEventListener("click", function goback() {
              location.reload();
              count = 75;
            });

          // stop timer when quiz finished
          clearInterval(timeCheck);
          //remove previous correct or wrong message
          if (wrong.parentNode) {
            wrong.parentNode.removeChild(wrong);
          }
          if (correct.parentNode) {
            correct.parentNode.removeChild(correct);
          }
        }
      }
    }

    // Update the text on the HTML page
    timer.textContent = "Time: " + count;
  }, 1000);

  //change to first quiz question
  setTimeout(quizQuestion1, 1000);
  function quizQuestion1() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>Commonly used data types DO NOT include:</h1><br><button class='quiz-button1'>strings</button><button class='quiz-button1'>booleans</button><button class='quiz-button1'>alerts</button><button class='quiz-button1'>numbers</button>";
  }
}

//create click handler event
function clickHandler(event) {
  var clickedEl = event.target;
  if (clickedEl.matches("#start-quiz")) {
    startQuiz();
  } else if (clickedEl.matches(".quiz-button1")) {
    checkQuizz1(clickedEl);
  } else if (clickedEl.matches(".quiz-button2")) {
    checkQuizz2(clickedEl);
  } else if (clickedEl.matches(".quiz-button3")) {
    checkQuizz3(clickedEl);
  } else if (clickedEl.matches(".quiz-button4")) {
    checkQuizz4(clickedEl);
  } else if (clickedEl.matches(".quiz-button5")) {
    checkQuizz5(clickedEl);
  }
}

//check if user clicks the right answer on first quiz question
function checkQuizz1(clickedEl) {
  if (clickedEl.textContent === quizQuestions[0].answer) {
    document.body.append(correct);
  } else {
    document.body.append(wrong);
    count -= 10;
  }

  //change to second quiz question
  setTimeout(quizQuestion2, 1000);
  function quizQuestion2() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>The condition in an if/else statement is enclosed within _____.</h1><br><button class='quiz-button2'>quotes</button><button class='quiz-button2'>curly brackets</button><button class='quiz-button2'>parenthesis</button><button class='quiz-button2'>square brackets</button>";

    //remove previous correct or wrong message
    if (wrong.parentNode) {
      wrong.parentNode.removeChild(wrong);
    }
    if (correct.parentNode) {
      correct.parentNode.removeChild(correct);
    }
  }
}

//check if user clicks the right answer on second quiz question
function checkQuizz2(clickedEl) {
  if (clickedEl.textContent === quizQuestions[1].answer) {
    document.body.append(correct);
  } else {
    document.body.append(wrong);
    count -= 10;
  }

  //change to third quiz question
  setTimeout(quizQuestion3, 1000);
  function quizQuestion3() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>Arrays in Javascript can be used to store _____.</h1><br><button class='quiz-button3'>numbers and strings</button><button class='quiz-button3'>other arrays</button><button class='quiz-button3'>booleans</button><button class='quiz-button3'>all of the above</button>";

    //remove previous correct or wrong message
    if (wrong.parentNode) {
      wrong.parentNode.removeChild(wrong);
    }
    if (correct.parentNode) {
      correct.parentNode.removeChild(correct);
    }
  }
}

//check if user clicks the right answer on third quiz question
function checkQuizz3(clickedEl) {
  if (clickedEl.textContent === quizQuestions[2].answer) {
    document.body.append(correct);
  } else {
    document.body.append(wrong);
    count -= 10;
  }

  //change to fourth quiz question
  setTimeout(quizQuestion4, 1000);
  function quizQuestion4() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>String values must be enclosed within _____ when being assigned to variables.</h1><br><button class='quiz-button4'>commas</button><button class='quiz-button4'>curly brackets</button><button class='quiz-button4'>quotes</button><button class='quiz-button4'>paranthesis</button>";

    //remove previous correct or wrong message
    if (wrong.parentNode) {
      wrong.parentNode.removeChild(wrong);
    }
    if (correct.parentNode) {
      correct.parentNode.removeChild(correct);
    }
  }
}

//check if user clicks the right answer on fourth quiz question
function checkQuizz4(clickedEl) {
  if (clickedEl.textContent === quizQuestions[3].answer) {
    document.body.append(correct);
  } else {
    document.body.append(wrong);
    count -= 10;
  }

  //change to fifth quiz question
  setTimeout(quizQuestion5, 1000);
  function quizQuestion5() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>A very useful tool used during development and debbuging for printing content to the debugger is:</h1><br><button class='quiz-button5'>Javascript</button><button class='quiz-button5'>terminal/bash</button><button class='quiz-button5'>for loops</button><button class='quiz-button5'>console.log</button>";

    //remove previous correct or wrong message
    if (wrong.parentNode) {
      wrong.parentNode.removeChild(wrong);
    }
    if (correct.parentNode) {
      correct.parentNode.removeChild(correct);
    }
  }
}

//check if user clicks the right answer on fifth quiz question
function checkQuizz5(clickedEl) {
  if (clickedEl.textContent === quizQuestions[4].answer) {
    document.body.append(correct);
  } else {
    document.body.append(wrong);
    count -= 10;
  }
  //change innerhtml to FINAL SCORE page
  setTimeout(quizQuestion6, 1000);
  function quizQuestion6() {
    document.getElementById("quiz-section").innerHTML =
      "<h1>ALL DONE!</h1><br><p>Your final score is " +
      count +
      "<br><br>Enter Initials: <input id='initials'></input><br><br><button id='submit'>Submit</button>";

    // stop timer when quiz finished
    clearInterval(timeCheck);
    //remove previous correct or wrong message
    if (wrong.parentNode) {
      wrong.parentNode.removeChild(wrong);
    }
    if (correct.parentNode) {
      correct.parentNode.removeChild(correct);
    }

    //add event listener when user clicks submit button after putting their initials
    document.getElementById("submit").addEventListener("click", quizQuestion7);

    //HIGHSCORE page
    function quizQuestion7() {
      //how to save and get high score from local storage
      var storeInitial = document.getElementById("initials").value;
      highScores = JSON.parse(localStorage.getItem("highscores"));
      var ScoreObj = { User: storeInitial, Score: count };
      localStorage.setItem("highscores", JSON.stringify(ScoreObj));
      console.log(highScores);
      //change innerhtml to HIGHSCORES page
      document.getElementById("quiz-section").innerHTML =
        "<h1>HIGHSCORES</h1>" +
        "Username: " +
        ScoreObj.User +
        " " +
        " Score: " +
        ScoreObj.Score +
        "<br><button id='reset'>Clear High Scores</button><button id='back'>Go Back</button>";
      //if user clicks reset button delete high scores in local storage
      document
        .getElementById("reset")
        .addEventListener("click", function clearHighScore() {
          localStorage.clear();
        });
      //if user clicks back go back to the beginning of the quiz
      document
        .getElementById("back")
        .addEventListener("click", function goback() {
          location.reload();
          count = 75;
        });

      // stop timer when quiz finished
      clearInterval(timeCheck);
      //remove previous correct or wrong message
      if (wrong.parentNode) {
        wrong.parentNode.removeChild(wrong);
      }
      if (correct.parentNode) {
        correct.parentNode.removeChild(correct);
      }
    }
  }
}

//event listener for the clickHandler
bodyEl.addEventListener("click", clickHandler);
