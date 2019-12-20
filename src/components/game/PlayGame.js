/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Joke from './Joke';
import Finish from './Finish';

const PlayGame = ({ jokes }) => {
  const [activeJoke, setActiveJoke] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const incrementActiveJoke = () => setActiveJoke(activeJoke+1);
  const incrementCorrectAnswers = () => setCorrectAnswers(correctAnswers+1);

  return (
    <div sx={{ textAlign: 'center', width: '100%' }}>
      {
        activeJoke < jokes.length
          ? <Joke 
              joke={jokes[activeJoke]}
              activeJoke={activeJoke+1}
              totalJokes={jokes.length}
              incrementActiveJoke={incrementActiveJoke}
              incrementCorrectAnswers={incrementCorrectAnswers}
            />
          : <Finish correctAnswers={correctAnswers} />
      }
    </div> 
  );
}

export default PlayGame;

PlayGame.propTypes = {
  jokes: PropTypes.arrayOf(PropTypes.object)
}