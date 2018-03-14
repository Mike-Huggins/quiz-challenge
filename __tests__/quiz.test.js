const Quiz = require('../src/quiz');

describe('Quiz constructor', () => {
  it('has the given list of questions', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    expect(quiz.questions).toEqual(questions);
  });
});

describe('readCurrentQuestion', () => {
  it('returns the challenge of the current question', () => {
    const mockChallenge = jest.fn();
    const questions = [{ challenge: mockChallenge }];
    const quiz = new Quiz(questions);

    expect(quiz.readCurrentQuestion()).toEqual(mockChallenge);
  });
});
