const Question = require('../src/question');

let question = null;

beforeEach(() => {
  question = new Question('What is 2 + 2?', '4');
});

afterEach(() => {
  question = null;
});

describe('Question', () => {
  it('has the given challenge property', () => {
    expect(question.challenge).toEqual('What is 2 + 2?');
  });

  it('has the given answer property', () => {
    expect(question.answer).toEqual('4');
  });
});

describe('checkAnswer', () => {
  it('returns false if the guess is wrong', () => {
    expect(question.checkAnswer('3')).toBe(false);
  });

  it('returns true if the guess is correct', () => {
    expect(question.checkAnswer('4')).toBe(true);
  });

  it('returns true if the guess is the correct number', () => {
    expect(question.checkAnswer(4)).toBe(true);
  });

  it('does a case-insensitive comparison', () => {
    question = new Question('What is 2 + 2?', 'FoUr');
    expect(question.checkAnswer('fOuR')).toBe(true);
  });
});
