const Quiz = require('../src/quiz');

let q1 = null;
let q2 = null;
let quiz = null;

beforeEach(() => {
  q1 = { challenge: 'foo', answer: 'bar', checkAnswer: jest.fn() };
  q2 = { challenge: 'baz', answer: 'qux', checkAnswer: jest.fn() };
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

describe('answerQuestion', () => {
  it('calls the checkAnswer method on the first question with the given guess and returns the result', () => {
    const guess = jest.fn();
    const mockQ1Result = jest.fn();
    q1.checkAnswer.mockReturnValue(mockQ1Result);

    const result = quiz.answerQuestion(guess);

    expect(q1.checkAnswer).toHaveBeenCalledWith(guess);
    expect(result).toEqual(mockQ1Result);
  });
});
