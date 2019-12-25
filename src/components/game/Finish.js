/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import Time from 'react-time-format'
import Highscore from './Highscore';
import Button from '../Button';
import { checkIfHighscore } from '../../api';

const Finish = ({ correctAnswers, time, resetGame }) => {
  const score = Math.round((correctAnswers * 100000000) / time.getTime());
  return (
    <div sx={{ fontFamily: 'body', fontSize: 2 }}>
      <Styled.h2>Game Over</Styled.h2>
      <p>You finished the game with <b>{correctAnswers}</b> correct answers!</p>
      <p>Your total score is <b>{score}</b>.</p>
      {
        checkIfHighscore(score)
          ? <Highscore score={score} time={Time.format(time, 'mm:ss')} />
          : <Button onClick={resetGame} sx={{ width: 'fit-content' }} autoFocus={true}>New game</Button>
      }
    </div>
  );
}

export default Finish;

Finish.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  time: PropTypes.instanceOf(Date),
  resetGame: PropTypes.func.isRequired
}