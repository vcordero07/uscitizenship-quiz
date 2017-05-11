console.clear();
//05-10-17
//need to add remaining questions
//need to add uncle sam logo
//need to add 30 second timer for each question
//need to add a share button at the end of the results

const classes = {
  correctMSG: ["Aye Captain", "Indubitably", "OK", "Sure", "Oh Yeah", "Yay"],
  incorrectMSG: ["Uh-uh", "Nope", "Stop", "No Siree", "Strike", "Negative"]
};

//get random key message work
Array.prototype.randomMSG = function() {
  return this[Math.floor(Math.random() * this.length)];
};

let quizAppQuestions = [

  //question1:
  {
    question: "What is the supreme law of the land?",
    answers: [
      "the Constitution",
      "the American Flag",
      "the Supreme Court",
      "the Bill of Rights"
    ],
    correctAnswerString: "the Constitution",
    correctAnswer: 0,
    userAnswer: null
  },
  //question5:
  {
    question: "What do we call the first ten amendments to the Constitution?",
    answers: [
      "the Bill of Rights",
      "the Bill of Laws",
      "the Bill of Life",
      "the Bill of Congress"
    ],
    correctAnswerString: "the Bill of Rights",
    correctAnswer: 0,
    userAnswer: null
  },
  //question6:
  {
    question: "How many amendments does the Constitution have?",
    answers: [
      "26",
      "27",
      "28",
      "29"
    ],
    correctAnswerString: "27",
    correctAnswer: 1,
    userAnswer: null
  },
  //question15:
  {
    question: "Who is in charge of the executive branch?",
    answers: [
      "the Secretary of the Treasury",
      "the President",
      "the Supreme Court",
      "the Secretary of State"
    ],
    correctAnswerString: "the President",
    correctAnswer: 1,
    userAnswer: null
  },
  //question19:
  {
    question: "We elect a U.S. Senator for how many years?",
    answers: [
      "ten (10)",
      "two (2)",
      "six (6)",
      "eight (8)"
    ],
    correctAnswerString: "six (6)",
    correctAnswer: 2,
    userAnswer: null
  },
  //question56:
  {
    question: "When is the last day you can send in federal income tax forms?",
    answers: [
      "May 15",
      "July 15",
      "March 15",
      "April 15"
    ],
    correctAnswerString: "April 15",
    correctAnswer: 3,
    userAnswer: null
  },
  //question62:
  {
    question: "Who wrote the Declaration of Independence?",
    answers: [
      "Franklin Roosevelt",
      "George Washington",
      "Benjamin Franklin",
      "Thomas Jefferson"
    ],
    correctAnswerString: "Thomas Jefferson",
    correctAnswer: 3,
    userAnswer: null
  },
  //question66:
  {
    question: "When was the Constitution written?",
    answers: [
      "1877",
      "1787",
      "1767",
      "1897"
    ],
    correctAnswerString: "1787",
    correctAnswer: 1,
    userAnswer: null
  },
  //question70:
  {
    question: "Who was the first President?",
    answers: [
      "Abraham Lincoln",
      "George Washington",
      "John Adams",
      "Thomas Jefferson"
    ],
    correctAnswerString: "George Washington",
    correctAnswer: 1,
    userAnswer: null
  },
  //question79:
  {
    question: "Who was President during World War I?",
    answers: [
      "Franklin Roosevelt",
      "George Washington",
      "James Madison",
      "Woodrow Wilson"
    ],
    correctAnswerString: "Woodrow Wilson",
    correctAnswer: 3,
    userAnswer: null
  },
  //question81:
  {
    question: "Who did the United States fight in World War II?",
    answers: [
      "Japan, Germany, and Italy",
      "Germany, Russia, and France",
      "Japan, Russia, and Germany",
      "Japan, Spain, and Germany"
    ],
    correctAnswerString: "Japan, Germany, and Italy",
    correctAnswer: 0,
    userAnswer: null
  },
  //question87:
  {
    question: "Name one American Indian tribe in the United States.",
    answers: [
      "Indians",
      "RedSkins",
      "Blackhawks",
      "Cherokee"
    ],
    correctAnswerString: "Cherokee",
    correctAnswer: 3,
    userAnswer: null
  },
  //question92:
  {
    question: "Name one state that borders Canada.",
    answers: [
      "Iowa",
      "South Dakota",
      "Montana",
      "Massachusetts"
    ],
    correctAnswerString: "Montana",
    correctAnswer: 2,
    userAnswer: null
  },
  //question93:
  {
    question: "Name one state that borders Mexico.",
    answers: [
      "Florida",
      "Arizona",
      "Louisiana",
      "Nevada"
    ],
    correctAnswerString: "Arizona",
    correctAnswer: 1,
    userAnswer: null
  },
  //question94:
  {
    question: "What is the capital of the United States?",
    answers: [
      "Washington, D.C.",
      "New York, NY",
      "Los Angeles, CA",
      "Boston, MA"
    ],
    correctAnswerString: "Washington, D.C.",
    correctAnswer: 0,
    userAnswer: null
  },
  //question95:
  {
    question: "Where is the Statue of Liberty?",
    answers: [
      "Liberty Island",
      "Manhattan",
      "Long Island",
      "Brooklyn"
    ],
    correctAnswerString: "Liberty Island",
    correctAnswer: 0,
    userAnswer: null
  },
  //question96:
  {
    question: "Why does the flag have 13 stripes?",
    answers: [
      "because there were 13 original colonies",
      "because there were 13 original cities",
      "because there were 13 original counties",
      "because there were 13 original roads"
    ],
    correctAnswerString: "because there were 13 original colonies",
    correctAnswer: 0,
    userAnswer: null
  },
  //question97:
  {
    question: "Why does the flag have 50 stars?",
    answers: [
      "because there is one star for each state",
      "because there is one star for each colonies",
      "because there is one star for each street",
      "because there is one star for each senator"
    ],
    correctAnswerString: "because there is one star for each state",
    correctAnswer: 0,
    userAnswer: null
  },
  //question98:
  {
    question: "What is the name of the national anthem?",
    answers: [
      "The Star-Spangled Banner",
      "The Stair-Spangled Banner",
      "The Star-Span Banner",
      "The Start-Spangled Banner"
    ],
    correctAnswerString: "The Star-Spangled Banner",
    correctAnswer: 0,
    userAnswer: null
  },
  //question99:
  {
    question: "When do we celebrate Independence Day?",
    answers: [
      "May 4",
      "June 4",
      "July 4",
      "September 4"
    ],
    correctAnswerString: "July 4",
    correctAnswer: 1,
    userAnswer: null
  },
  //question100:
  {
    question: "Name two national U.S. holidays.",
    answers: [
      "Memorial Day & Independence Day",
      "Labor Day & Black Friday",
      "Columbus Day & Easter",
      "Thanksgiving & Halloween"
    ],
    correctAnswerString: "Memorial Day & Independence Day",
    correctAnswer: 0,
    userAnswer: null
  },

];


const getCorrectAnswerIndex = (answers, correctAnswer) => {
  if (!correctAnswer) {
    return null;
  }

  return answers.indexOf(correctAnswer);
};

const getQuizAppQuestions = questions => {
  return questions.map(question => {
    const shuffledAnswers = _.shuffle(question.answers);

    return {
      question: question.question,
      answers: shuffledAnswers,
      correctAnswerString: question.correctAnswerString,
      correctAnswer: getCorrectAnswerIndex(
        shuffledAnswers,
        question.correctAnswerString
      ) !== null ? getCorrectAnswerIndex(shuffledAnswers, question.correctAnswerString) : question.correctAnswer,
      userAnswer: null
    };
  });
};


function getNumberOfCorrectAnswers() {
  let numberOfCorrectAnswers = 0;

  quizAppData.forEach(function(ele) {
    if (ele.userAnswer === ele.correctAnswer) {
      numberOfCorrectAnswers++
    }
  });
  return numberOfCorrectAnswers;
}

let quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
let currentQuestion = 0;
let numOfQuestion = 10;

let deleteUserAnswers = () => {
  quizAppData.forEach(function(ele) {
    ele.userAnswer = null;
  })
};


let questionDisplay = () => {
  console.log(quizAppData);
  $("#question").text(quizAppData[currentQuestion].question);

  $("#answers").empty();

  let numberOfAnswers = quizAppData[currentQuestion].answers.length;

  for (let i = 0; i < numberOfAnswers; i++) {
    let answersHTML = `<label class='answers'><input type='radio' class='option' name='option' value='${i}'> ${quizAppData[currentQuestion].answers[i]} </label><br>`;
    $("#answers").append(answersHTML);
  }

  if (currentQuestion === 0) {
    $("#back-button").prop("disabled", true);
  } else {
    $("#back-button").prop("disabled", false);
  }

  const numOfCorrectAnswers = getNumberOfCorrectAnswers();

  $(".status").text("Question: " + (currentQuestion + 1) + "/" + numOfQuestion);
  $(".score").text("Score: " + numOfCorrectAnswers + "/" + numOfQuestion);
  console.log('numOfCorrectAnswers: ' + numOfCorrectAnswers);
};

let resultsDisplay = () => {
  $(".result-msg").empty();

  for (let i = 0; i < numOfQuestion; i++) {
    let userAnswer = quizAppData[i].userAnswer;
    let correctAnswer = quizAppData[i].correctAnswer;

    if (userAnswer !== correctAnswer) {
      let resultsHTML = `
<div class="ansIncorrect">
<h4>${quizAppData[i].question}</h4>
<div class="ansStute"></div>
<div>
<p class='answers'><strong>Your Answer: </strong>${quizAppData[i].answers[quizAppData[i].userAnswer]}</p>
<p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].correctAnswerString}</p>
</div>
</div>`;

      $(".result-msg").append(resultsHTML);
    } else {
      let resultsHTML = `
<div class="ansCorrect">
<h4>${quizAppData[i].question}</h4>
<div class="ansStute"></div>
<div>
<p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].answers[quizAppData[i].userAnswer]}</p>
</div>
</div>`;

      $(".result-msg").append(resultsHTML);
    }
  }

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
};

let getAnswers = () => {
  let userAnswer = Number($("input[class='option']:checked").val());
  let correctAnswer = quizAppData[currentQuestion].correctAnswer;

  return {
    userAnswer,
    correctAnswer
  };

};

let handleAnswersValidation = () => {
  const {
    correctAnswer,
    userAnswer
  } = getAnswers();

  if (isNaN(userAnswer)) {

  } else {
    $(".option").prop("disabled", !this.checked);

    if (userAnswer !== correctAnswer) {
      $("input[class='option']:checked")
        .parent()
        .css("border", "2px solid #BF0A30")
        .addClass("item-incorrect");

      $("input.option")
        .filter(function() {
          return Number($(this).val()) === correctAnswer;
        })
        .parent()
        .css("border", "2px solid #007fbe")
        .addClass("item-correct");
    } else {
      //numOfCorrectAnswers++
      $("input.option")
        .filter(function() {
          return Number($(this).val()) === correctAnswer;
        })
        .parent()
        .css("border", "2px solid #007fbe")
        .addClass("item-correct");
    }
    quizAppData[currentQuestion].userAnswer = userAnswer;
  }
};

let handleClickNext = () => {
  const {
    correctAnswer,
    userAnswer
  } = getAnswers();
  const numOfCorrectAnswers = getNumberOfCorrectAnswers();
  if (isNaN(userAnswer)) {

    $("#next-button").popover({
      html: true,
      title: "Error:",
      animation: true,
      //       'trigger': 'hover',
      placement: "right",
      content: "Please select an answer."
    });
  } else {
    $("next-button").popover("destroy");
    // console.log('numOfQuestion: ', numOfQuestion);
    // console.log(currentQuestion);
    if (currentQuestion + 1 === numOfQuestion) {
      if (numOfCorrectAnswers === 10) {
        $('.txt-results').text(`Excellent, you pass! You are a true Patriot!!!`).parent().addClass('passContainer'); //
      } else if (numOfCorrectAnswers >= 6 && numOfCorrectAnswers < 10) {
        $('.txt-results').text(`${classes.correctMSG.randomMSG()}, you pass!!!`).parent().addClass('passContainer'); //
      } else if (numOfCorrectAnswers >= 2 && numOfCorrectAnswers < 6) {
        $('.txt-results').text(`${classes.incorrectMSG.randomMSG()}, you failed! Please try again.`).parent().addClass('failContainer'); //
      } else {
        $('.txt-results').text(`FAILED! Where are you from again?`).parent().addClass('failContainer'); //
      }


      $(".final-score").text(
        "Your Final Score is: " + numOfCorrectAnswers + "/" + numOfQuestion
      );
      resultsDisplay();

      $(".quiz-section").hide();
      $(".start-section").hide();
      $(".result-section").show();
    } else {
      currentQuestion++;
    }

    questionDisplay();
  }
};

let handleClickBack = () => {
  if (currentQuestion !== 0) {
    currentQuestion--;
    questionDisplay();
  } else {
    handleClickTryAgain();
  }
};

let handleClickTryAgain = () => {
  $(".start-section").show();
  $(".quiz-section").hide();
  $(".result-section").hide();
  currentQuestion = 0;
  numOfCorrectAnswers = 0;

  deleteUserAnswers();
};

let handleClickStart = () => {
  $(".result-section").hide();
  $(".start-section").hide();
  $(".quiz-section").show();

  questionDisplay();
};

let createEventListeners = () => {
  $("#startBtn").on("click", () => {
    handleClickStart();
  });

  $(".nav-button").on("click", "#back-button", () => {
    handleClickBack();
  });

  $(".result-section").on("click", "#try-again", () => {
    handleClickTryAgain();
  });

  $(".radio").on("click", () => {
    handleAnswersValidation();
  });

  $(".nav-button").on("click", "#next-button", () => {
    handleClickNext();
  });
};

const renderQuiz = () => {
  $(".quiz-section").hide();
  $(".result-section").hide();

  createEventListeners();
};

$(renderQuiz);
