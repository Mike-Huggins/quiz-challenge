const Quiz = require('../src/quiz');

let q1 = null;
let q2 = null;
let quiz = null;

beforeEach(() => {
  q1 = { challenge: 'foo', answer: 'bar' };
  q2 = { challenge: 'baz', answer: 'qux' };
  quiz = new Quiz('Geography Quiz', [q1, q2]);
});

describe('Quiz', () => {
  it('has a name', () => {
    expect(quiz.name).toEqual('Geography Quiz');
  });

  it('has questions', () => {
    expect(quiz.questions).toEqual([q1, q2]);
  });
});

describe('readQuestion', () => {
  it('returns the challenge property of the first question', () => {
    expect(quiz.readQuestion()).toEqual(q1.challenge);
  });
});
