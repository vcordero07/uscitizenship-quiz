console.clear();
const classes = {
  correctMSG: ['Aye Captain', 'Indubitably', 'OK', 'Sure', 'Oh Yeah', 'Yay'],
  incorrectMSG: ['Uh-uh', 'Nope', 'No way, Jose', 'No Siree', 'Strike', 'Negative']
}


//get random key message work
Array.prototype.randomMSG = function() {
  return this[Math.floor(Math.random() * this.length)];
};

// let findCorrectAnswer = (asnwer) => {
//    //    correctMSG: `${classes.correctMSG.randomMSG()}, that is the correct Answer!`,
//   //  incorrectMSG: `${classes.incorrectMSG.randomMSG()}, the correct Answer is ${quizAppData[0].answers[1]}.`
// };



let quizAppData = [
  //question1:
  {
    question: 'Name one state that borders Mexico.',
    answers: ['Florida', 'Arizona', 'Louisiana', 'Nevada'],
    correctAnswer: 1,
    userAnswer: null
  },

  //question2:
  {
    question: 'Name one state that borders Canada.',
    answers: ['Iowa', 'South Dakota', 'Montana', 'Massachusetts'],
    correctAnswer: 2,
    userAnswer: null
  },

  //question3:
  {
    question: 'Name one American Indian tribe in the United States.',
    answers: ['Indians', 'RedSkins', 'Blackhawks', 'Cherokee'],
    correctAnswer: 3,
    userAnswer: null
  },

  //question4:
  {
    question: 'Who did the United States fight in World War II?',
    answers: ['Japan, Germany, and Italy', 'Germany, Russia, and France', 'Japan, Russia, and Germany', 'Japan, Spain, and Germany'],
    correctAnswer: 0,
    userAnswer: null
  },

  //question5:
  {
    question: 'Who was President during World War I?',
    answers: ['Franklin Roosevelt', 'George Washington', 'James Madison', 'Woodrow Wilson'],
    correctAnswer: 3,
    userAnswer: null
  },

  //question6:
  {
    question: 'When was the Constitution written?',
    answers: ['1877', '1787', '1767', '1897'],
    correctAnswer: 1,
    userAnswer: null
  },

  //question7:
  {
    question: 'Who wrote the Declaration of Independence?',
    answers: ['Franklin Roosevelt', 'George Washington', 'Benjamin Franklin', 'Thomas Jefferson'],
    correctAnswer: 3,
    userAnswer: null
  },

  //question8:
  {
    question: 'We elect a U.S. Senator for how many years?',
    answers: ['ten (10)', 'two (2)', 'six (6)', 'eight (8)'],
    correctAnswer: 2,
    userAnswer: null
  },

  //question9:
  {
    question: 'When is the last day you can send in federal income tax forms?',
    answers: ['May 15', 'July 15', 'March 15', 'April 15'],
    correctAnswer: 3,
    userAnswer: null
  },

  //question10:
  {
    question: 'Who was the first President?',
    answers: ['Abraham Lincoln', 'George Washington', 'John Adams', 'Thomas Jefferson'],
    correctAnswer: 1,
    userAnswer: null
  }
];

// const getCorrectAnswerIndex = (answers, correctAnswer) => {
//   if (!correctAnswer) {
//     return null;
//   }
//
//   return answers.indexOf(correctAnswer);
// };
//
// const getQuizAppQuestions = questions => {
//   return questions.map(question => {
//     const shuffledAnswers = _.shuffle(question.answers);
//
//     return {
//       question: question.question,
//       answers: shuffledAnswers,
//       correctAnswerString: question.correctAnswerString,
//       correctAnswer: getCorrectAnswerIndex(
//         shuffledAnswers,
//         question.correctAnswerString
//       ) !== null ? getCorrectAnswerIndex(shuffledAnswers, question.correctAnswerString) : question.correctAnswer,
//       userAnswer: null
//     };
//   });
// };

//add remaining 90 questions, then do an array shuffle and pick 10

//let quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
let currentQuestion = 0;
let numOfQuestion = quizAppData.length;
let numOfCorrectAnswers = 0;

let questionDisplay = () => {
  $('#question').text(quizAppData[currentQuestion].question);

  $('#answers').empty();

  let numberOfAnswers = quizAppData[currentQuestion].answers.length;

  for (let i = 0; i < numberOfAnswers; i++) {
    let answersHTML = `<label class='answers'><input type='radio' class='option' name='option' value='${i}'> ${quizAppData[currentQuestion].answers[i]} </label><br>`;
    $('#answers').append(answersHTML);
  }

  if (currentQuestion === 0) {
    $("#back-button").prop("disabled", true);
  } else {
    $("#back-button").prop("disabled", false);
  }

  $('.status').text('Question: ' + currentQuestion + '/' + numOfQuestion);
  $('.score').text('Score: ' + numOfCorrectAnswers + '/' + numOfQuestion);
  console.log('numOfCorrectAnswers: ' + numOfCorrectAnswers);
};


let resultsDisplay = () => {
  $('.result-msg').empty();


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
        <p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].answers[quizAppData[i].correctAnswer]}</p>
        </div>
        </div>`;

      $('.result-msg').append(resultsHTML);
    } else {
      let resultsHTML = `
        <div class="ansCorrect">
        <h4>${quizAppData[i].question}</h4>
        <div class="ansStute"></div>
        <div>
        <p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].answers[quizAppData[i].userAnswer]}</p>
        </div>
        </div>`;

      $('.result-msg').append(resultsHTML);
    }



  }

  $('#accordion').accordion({
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
    //console.log('userAnswer isNan: ' + isNaN(userAnswer))
  } else {
    $('.option').prop('disabled', !this.checked);

    if (userAnswer !== correctAnswer) {
      $("input[class='option']:checked").parent().css("border", "2px solid #BF0A30").addClass('item-incorrect');

      $('input.option').filter(function() {
        return Number($(this).val()) === correctAnswer;
      }).parent().css("border", "2px solid #007fbe").addClass('item-correct');

    } else {
      if (!quizAppData[currentQuestion].userAnswer) {
        numOfCorrectAnswers++;
      }

      $('input.option').filter(function() {
        return Number($(this).val()) === correctAnswer;
      }).parent().css("border", "2px solid #007fbe").addClass('item-correct');
    }
    quizAppData[currentQuestion].userAnswer = userAnswer;

  }

};


let handleClickNext = () => {
  const {
    correctAnswer,
    userAnswer
  } = getAnswers();

  if (isNaN(userAnswer)) {
    $('#next-button').popover({
      html: true,
      title: 'Error:',
      animation: true,
      //       'trigger': 'hover',
      placement: 'right',
      content: 'Please select an answer.'
    });

  } else {
    $('next-button').popover('destroy');

    if ((currentQuestion + 1) === numOfQuestion) {
      $('.final-score').text('Your Final Score is: ' + numOfCorrectAnswers + '/' + numOfQuestion);
      resultsDisplay();

      $('.quiz-section').hide();
      $('.start-section').hide();
      $('.result-section').show();
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
  $('.start-section').show();
  $('.quiz-section').hide();
  $('.result-section').hide();
  //todo
  //clear user data
  //$('.result_msg').empty();

  currentQuestion = 0;
  numOfCorrectAnswers = 0;
};

let handleClickStart = () => {
  $('.result-section').hide();
  $('.start-section').hide();
  $('.quiz-section').show();

  questionDisplay();
}


let createEventListeners = () => {
  $('#startBtn').on('click', () => {
    handleClickStart();
  });

  $('.nav-button').on('click', '#back-button', () => {
    handleClickBack();
  })

  $('.result-section').on('click', '#try-again', () => {
    handleClickTryAgain();
  });

  $('.radio').on('click', () => {
    handleAnswersValidation();
  });

  $('.nav-button').on('click', '#next-button', () => {
    handleClickNext();
  });

};

const renderQuiz = () => {

  $('.quiz-section').hide();
  $('.result-section').hide();

  createEventListeners();
}

$(renderQuiz);
