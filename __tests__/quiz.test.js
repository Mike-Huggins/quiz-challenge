const Quiz = require('../src/quiz');

describe('Quiz constructor', () => {
  it('has the given list of questions', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    expect(quiz.questions).toEqual(questions);
  });
});