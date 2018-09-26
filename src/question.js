function Question(challenge, answer) {
  this.challenge = challenge;
  this.answer = answer;
}

Question.prototype = {
  checkAnswer(guess) {
    return this.answer.toLowerCase() === guess.toString().toLowerCase();
  },
};

module.exports = Question;
