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





console.log(quizAppData);

// const renderQuestions = () => {

//   //console.log(questions);
// };

// const renderQuiz = () => {
//   renderQuestions();
//   $('.quiz').html();
// }

$(renderQuiz);
