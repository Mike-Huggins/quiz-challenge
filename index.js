const Question = require('./src/question');
const Quiz = require('./src/quiz');

const questions = [
  new Question('What is the capital of France?', 'Paris'),
  new Question('What is the capital of Germany?', 'Berlin'),
];

const quiz = new Quiz(questions);

module.exports = quiz;
