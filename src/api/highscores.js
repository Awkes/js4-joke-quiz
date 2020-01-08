export const getHighscores = () => (
  JSON.parse(localStorage.getItem('highscores') || "[]").sort((a, b) => a.score < b.score ? 1 : -1)
);

export const setHighscore = (name, score, time) => {
  const highscores = getHighscores().slice(0, 9);
  highscores.push({ name, score, time });
  localStorage.setItem('highscores', JSON.stringify(highscores));
}

export const checkIfHighscore = score => {
  if (score > 0) {
    const highscores = getHighscores();
    return highscores.length > 9
      ? highscores.filter(hs => score > hs.score).length > 0 ? true : false
      : true;
  }
  return false;
}