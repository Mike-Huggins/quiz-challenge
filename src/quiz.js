function Quiz(questions) {
  this.questions = questions;
}

Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
  return this.questions[0].challenge;
}

module.exports = Quiz;
