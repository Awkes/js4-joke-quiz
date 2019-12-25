/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import StartGame from './StartGame';
import PlayGame from './PlayGame';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [jokes, setJokes]  = useState();
  const resetGame = () => setGameStarted(false);
  
  return (
    <div sx={{
      paddingX: 3,
      paddingY: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {
        !gameStarted
          ? <StartGame setGameStarted={setGameStarted} setJokes={setJokes} />
          : <PlayGame jokes={jokes} resetGame={resetGame} />
      }
    </div>
  );
}

export default Game;