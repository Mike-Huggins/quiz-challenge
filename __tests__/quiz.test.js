const Quiz = require('../src/quiz');

describe('Quiz', () => {
  it('has a name', () => {
    const quiz = new Quiz('Geography Quiz', []);
    expect(quiz.name).toEqual('Geography Quiz');
  });

  it('has questions', () => {
    const q1 = { challenge: 'foo', answer: 'bar' };
    const q2 = { challenge: 'baz', answer: 'qux' };
    const quiz = new Quiz('Geography Quiz', [q1, q2]);
    expect(quiz.questions).toEqual([q1, q2]);
  });
});

describe('readQuestion', () => {
  it('returns the challenge property of the first question', () => {
    const q1 = { challenge: 'foo', answer: 'bar' };
    const q2 = { challenge: 'baz', answer: 'qux' };
    const quiz = new Quiz('Geography Quiz', [q1, q2]);
    expect(quiz.readQuestion()).toEqual(q1.challenge);
  });
});
