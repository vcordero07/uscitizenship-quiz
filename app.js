console.clear();
//Aye Captain | Indubitably | OK | Sure | Oh Yeah | Yay
//Uh-uh | Nope | No way, Jose | No Siree | Strike | Negative

let quizAppData = {
  question1: {
    question: 'Name one state that borders Mexico.',
    answers: {
      a: 'Florida',
      b: 'Arizona',
      c: 'Louisiana',
      d: 'Nevada'
    },
    correctAnswer: 'b',
    userAnswer: null,
    correctMSG: '',
    incorrectMSG: ''
  },
  question2: {
    question: 'Name one state that borders Canada.',
    answers: {
      a: 'Iowa',
      b: 'South Dakota',
      c: 'Montana',
      d: 'Massachusetts'
    },
    correctAnswer: 'c',
    userAnswer: null,
    correctMSG: '',
    incorrectMSG: ''
  },
  question3: {
    question: 'Name one American Indian tribe in the United States.',
    answers: {
      a: 'Indians',
      b: 'RedSkins',
      c: 'Blackhawks',
      d: 'Cherokee'
    },
    correctAnswer: 'd',
    userAnswer: null,
    correctMSG: '',
    incorrectMSG: ''
  }
}

const renderQuestions = () => {
  const questions = [];
  console.log(quizAppData);
  for (let question in quizAppData) {
    console.log(question);
    questions.push();
  }
  console.log(questions);
};

const renderQuiz = () => {
  renderQuestions();
  $('.quiz').html();
}

$(renderQuiz);
