import {
  getHighscores,
  setHighscore,
  checkIfHighscore
} from '../../api/highscores';

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

const fakeHighscores = [
  { name: 'third', score: 100, time: '00:00' },
  { name: 'first', score: 300, time: '00:00' },
  { name: 'second', score: 200, time: '00:00' }
];

describe('getHighscores', () => {
  test('should return an array of highscore objects, sorted by score', () => {
    localStorage.setItem('highscores', JSON.stringify(fakeHighscores));
    expect(getHighscores()[0]).toEqual(fakeHighscores[1]);
    expect(getHighscores()[1]).toEqual(fakeHighscores[2]);
    expect(getHighscores()[2]).toEqual(fakeHighscores[0]);
  });

  test('should return an empty array if highscores in localStorage do not exist', () => {
    expect(getHighscores()).toEqual([]);
  });
});

describe('setHighscore', () => {
  test('should add highscore object to highscore list in localStorage', () => {
    const { name, score, time } = fakeHighscores[0];
    setHighscore(name, score, time);
    expect(JSON.parse(localStorage.getItem('highscores'))).toEqual([fakeHighscores[0]]);
  });
});

describe('checkIfHighscore', () => {
  test('should return false if score is 0', () => {
    expect(checkIfHighscore(0)).toBe(false);
  });

  test('should return true if number of highscores is not > 9', () => {
    localStorage.setItem('highscores', JSON.stringify(fakeHighscores));
    expect(checkIfHighscore(100)).toBe(true);
  });

  test('should return true if number of highscores is > 9 and the score is a highscore', () => {
    const tenFakeHighscores = [ ...fakeHighscores, ...fakeHighscores, ...fakeHighscores, fakeHighscores[0] ];
    localStorage.setItem('highscores', JSON.stringify(tenFakeHighscores));
    expect(checkIfHighscore(101)).toBe(true);
  });

  test('should return false if number of highscores is > 9 and the score is not a highscore', () => {
    const tenFakeHighscores = [ ...fakeHighscores, ...fakeHighscores, ...fakeHighscores, fakeHighscores[0] ];
    localStorage.setItem('highscores', JSON.stringify(tenFakeHighscores));
    expect(checkIfHighscore(99)).toBe(false);
  });
});