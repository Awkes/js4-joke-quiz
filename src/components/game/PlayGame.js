/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Joke from './Joke';
import Finish from './Finish';
import Timer from './Timer';

const PlayGame = ({ jokes, resetGame }) => {
  const [activeJoke, setActiveJoke] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  
  const incrementActiveJoke = () => setActiveJoke(activeJoke+1);
  const incrementCorrectAnswers = () => setCorrectAnswers(correctAnswers+1);
  
  return (
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <div sx={{ 
        position: 'relative',
        top: -3,
        marginBottom: -3,
        textAlign: 'right'
      }}>
        <Timer run={!gameOver} setTotalTime={setTotalTime} />
      </div>
      {
        activeJoke < jokes.length
          ? <Joke 
              joke={jokes[activeJoke]}
              activeJoke={activeJoke+1}
              totalJokes={jokes.length}
              incrementActiveJoke={incrementActiveJoke}
              incrementCorrectAnswers={incrementCorrectAnswers}
              setGameOver={setGameOver}
            />
          : <Finish correctAnswers={correctAnswers} time={totalTime} resetGame={resetGame} />
      }
    </div> 
  );
}

export default PlayGame;

PlayGame.propTypes = {
  jokes: PropTypes.arrayOf(PropTypes.object),
  resetGame: PropTypes.func.isRequired
}