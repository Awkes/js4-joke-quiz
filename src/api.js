// Joke
const API_URL = 'https://official-joke-api.appspot.com';

export const getTenRandomJokes = () => {
  const url = `${API_URL}/jokes/ten`;
  return fetch(url)
    .then(res => res.status === 200 ? res.json() : new Error())
    .then(data => data)
    .catch(err => ({ error: 'Something went wrong, please try again!'}));
}

// Highscores
export const getHighscores = () => (
  JSON.parse(localStorage.getItem('highscores') || "[]").sort((a, b) => a.score < b.score ? 1 : -1)
);

export const setHighscore = (name, score, time) => {
  const highscores = getHighscores().slice(0, 9);
  highscores.push({ name, score, time });
  localStorage.setItem('highscores', JSON.stringify(highscores));
}

export const checkIfHighscore = score => (
  getHighscores().filter(hs => score > hs.score) ? true : false
);