/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { PacmanLoader } from 'react-spinners';
import Button from '../Button';
import { getTenRandomJokes } from '../../api';

const StartGame = ({ setGameStarted, setJokes }) => {
  const [fetching, setFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { theme } = useThemeUI();

  const fetchJokes = () => {
    setFetching(true);
    getTenRandomJokes()
      .then(jokes => {
        setFetching(false);
        if (!jokes.error) {
          setJokes(jokes);
          setGameStarted(true);
        } 
        else {
          setErrorMsg(jokes.error);
        }
    });
  }

  return (
    <div sx={{ textAlign: 'center' }}>
      <Styled.h2>Play a game</Styled.h2>
      {
        !fetching
          ? <Button onClick={fetchJokes} autoFocus={true}>Start</Button>
          : <div sx={{ 
              marginBottom: 5,
              '&>div': { left: '20%' }
            }}>
              <PacmanLoader color={theme.colors.primary} />
            </div>
      }
      <div sx={{ 
        color: 'error',
        padding: errorMsg ? 4 : 0,
        fontFamily: 'body',
       }}>
         {errorMsg}
      </div>
    </div>
  );
}

export default StartGame;

StartGame.propTypes = {
  setGameStarted: PropTypes.func.isRequired,
  setJokes: PropTypes.func.isRequired,
}