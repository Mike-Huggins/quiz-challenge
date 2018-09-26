function Quiz(name, questions) {
  this.name = name;
  this.questions = questions;
  this.__questionIndex = 0;
}

Quiz.prototype = {
  readQuestion() {
    return this.questions[this.__questionIndex].challenge;
  },
  answerQuestion(guess) {
    const result = this.questions[this.__questionIndex].checkAnswer(guess);
    this.__questionIndex += 1;
    return result;
  },
  get currentQuestion() {
    return this.__questionIndex + 1;
  },
};

module.exports = Quiz;
