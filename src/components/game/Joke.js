/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import stripString from '../../utils/stripString';

const Joke = ({
  joke,
  activeJoke,
  totalJokes,
  incrementActiveJoke,
  incrementCorrectAnswers,
  setGameOver
}) => {
  const { setup, punchline } = joke;
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(false);

  const handleJokeAnswer = e => {
    e.preventDefault();
    const answer = e.target.answer.value;
    setAnswer(answer);
    if (stripString(answer) === stripString(punchline)) {
      setCorrect(true);
      incrementCorrectAnswers();
    }
  }

  const nextJoke = () => {
    incrementActiveJoke();
    setAnswer(null);
    setCorrect(false);
  }

  useEffect(() => { if (activeJoke === totalJokes && answer) setGameOver(true) });

  return (
    <div sx={{ textAlign: 'center', width: '100%' }}>
      <Styled.h2 sx={{ marginBottom: 0 }}>Joke</Styled.h2>
      <p sx={{ fontFamily: 'heading', fontSize: 1, marginTop: 0 }}>{activeJoke} / {totalJokes}</p>
      <p sx={{
        fontFamily: 'body',
        fontSize: 2,
      }}>
        {setup}
      </p>
      {
        !answer
          ?
          <form onSubmit={handleJokeAnswer}>
            <Input 
              name="answer" 
              autoFocus={true} 
              sx={{ width: ['100%', '75%'], margin: '0 auto', display: 'block' }}
            />
            <Button 
              children="Guess Punchline"
              sx={{ marginTop: 3, marginX: 'auto', width: 'fit-content' }}
            />
          </form>
          :
          <div sx={{
            fontFamily: 'body',
            fontSize: 2,
          }}>
            <p sx={{ fontWeight: 'bold' }}>
              {punchline}
            </p>
            {
              correct
                ? <p sx={{ color: 'correct' }}>Correct answer!</p>
                : <p sx={{ color: 'error' }}>Wrong answer</p>
            }
            <div sx={{ width: 'fit-content', margin: '0 auto' }}>
              <Button onClick={nextJoke} autoFocus={true}>
                {activeJoke !== totalJokes ? 'Next Joke' : 'Finish!'}
              </Button>
            </div>
          </div>
      }
    </div>
  );
}

export default Joke

Joke.propTypes = {
  joke: PropTypes.object.isRequired,
  activeJoke: PropTypes.number.isRequired,
  totalJokes: PropTypes.number.isRequired,
  incrementActiveJoke: PropTypes.func.isRequired,
  incrementCorrectAnswers: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired
}