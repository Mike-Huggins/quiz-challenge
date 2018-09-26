const Quiz = require('../src/quiz');

let q1 = null;
let q2 = null;
let quiz = null;

const Question = (challenge, answer) => ({
  challenge,
  answer,
  checkAnswer: jest.fn(),
});

beforeEach(() => {
  q1 = Question('foo', 'bar');
  q2 = Question('baz', 'qux');
  quiz = new Quiz('Geography Quiz', [q1, q2]);
});

describe('Quiz', () => {
  it('has a name', () => {
    expect(quiz.name).toEqual('Geography Quiz');
  });

  it('has questions', () => {
    expect(quiz.questions).toEqual([q1, q2]);
  });

  it('has a currentQuestion property of 1', () => {
    expect(quiz.currentQuestion).toEqual(1);
  });
});

describe('readQuestion', () => {
  it('returns the challenge property of the first question', () => {
    expect(quiz.readQuestion()).toEqual(q1.challenge);
  });

  it('returns the challenge property of the current question', () => {
    quiz.answerQuestion(jest.fn());
    expect(quiz.readQuestion()).toEqual(q2.challenge);
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

  it('advances to the next question', () => {
    quiz.answerQuestion(jest.fn());
    expect(quiz.currentQuestion).toEqual(2);
  });

  it('calls the checkAnswer method on the current question with the given guess and returns the result', () => {
    quiz.answerQuestion(jest.fn());

    const guess = jest.fn();
    const mockQ2Result = jest.fn();
    q2.checkAnswer.mockReturnValue(mockQ2Result);

    const result = quiz.answerQuestion(guess);

    expect(q2.checkAnswer).toHaveBeenCalledWith(guess);
    expect(result).toEqual(mockQ2Result);
  });
});
