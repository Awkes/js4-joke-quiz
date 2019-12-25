/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router'
import Input from '../Input';
import Button from '../Button';
import { setHighscore } from '../../api';

const Highscore = ({ score, time }) => {
  const handleRegistration = e => {
    e.preventDefault();
    const name = e.target.name.value;
    setHighscore(name, score, time);
    navigate('/highscores');
  }
  return (
    <div>
      <Styled.h2>That's a new Highscore</Styled.h2>
      <form onSubmit={handleRegistration}>
        <label sx={{ fontFamily: 'body', fontSize: 2, textAlign: 'center'}}>
          Enter your name:
          <Input 
            autoFocus={true}
            name="name"
            maxLength="16"
            sx={{ width: ['75%', '50%'], marginTop: 3, marginX: 'auto', display: 'block' }} 
          />
        </label>
        <Button 
          children="Register"
          sx={{ marginTop: 3, marginX: 'auto', width: 'fit-content' }}
        />
      </form>
    </div>
  );
}

export default Highscore;

Highscore.propTypes = {
  score: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired
}