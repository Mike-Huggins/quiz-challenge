const Question = require('../src/question');

describe('constructor', () => {
  it('has the given challenge property', () => {
    const question = new Question('What is 2 + 2?', '4');
    expect(question.challenge).toEqual('What is 2 + 2?');
  });

  it('has the given answer property', () => {
    const question = new Question('What is 2 + 2?', '4');
    expect(question.answer).toEqual('4');
  });
});

describe('checkAnswer', () => {
  it('returns false if the guess is wrong', () => {
    const question = new Question('What is 2 + 2?', '4');
    expect(question.checkAnswer('3')).toBe(false);
  });

  it('returns true if the guess is correct', () => {
    const question = new Question('What is 2 + 2?', '4');
    expect(question.checkAnswer('4')).toBe(true);
  });

  it('returns true if the guess is the correct number', () => {
    const question = new Question('What is 2 + 2?', '4');
    expect(question.checkAnswer(4)).toBe(true);
  });

  it('does a case-insensitive comparison', () => {
    const question = new Question('What is 2 + 2?', 'FoUr');
    expect(question.checkAnswer('fOuR')).toBe(true);
  });
});
