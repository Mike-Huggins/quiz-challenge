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
