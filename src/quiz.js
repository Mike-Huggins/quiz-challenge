function Quiz(questions) {
  this.questions = questions;
}

Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
  return this.questions[0].challenge;
}

Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
  return this.questions[0].verify(guess);
}

module.exports = Quiz;
