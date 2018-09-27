const Quiz = require('./src/quiz');
const Question = require('./src/question');

const q1 = new Question('What is the capital of France?', 'Paris');
const q2 = new Question('What is the capital of Djibouti?', 'Djibouti');

const quiz = new Quiz('Geography Quiz', [q1, q2]);

console.log('Score:', quiz.score);
console.log('---');
console.log(quiz.readQuestion());
console.log('Berlin', quiz.answerQuestion('Berlin'));
console.log('Score:', quiz.score);
console.log('---');
console.log(quiz.readQuestion());
console.log('Djibouti', quiz.answerQuestion('Djibouti'));
console.log('Score:', quiz.score);
