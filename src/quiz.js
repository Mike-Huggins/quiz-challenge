function Quiz(name, questions) {
  this.name = name;
  this.questions = questions;
}

Quiz.prototype = {
  readQuestion() {
    return this.questions[0].challenge;
  },
};

module.exports = Quiz;
