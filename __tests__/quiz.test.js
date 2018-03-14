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

describe('verifyCurrentQuestion', () => {
  it('verifies the guess against the current question', () => {
    const mockGuess = jest.fn();
    const mockVerifyValue = jest.fn();
    const mockQuestion = {
      verify: jest.fn(() => mockVerifyValue),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);
    
    const result = quiz.verifyCurrentQuestion(mockGuess);

    expect(result).toEqual(mockVerifyValue);
    expect(mockQuestion.verify).toHaveBeenCalledWith(mockGuess);
  });
});