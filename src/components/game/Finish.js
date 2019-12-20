/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Finish = ({ correctAnswers }) => (
  <div>
    <p sx={{ fontFamily: 'body', fontSize: 2 }}>
      You finished the game with {correctAnswers} correct answers!
    </p>
  </div>
);

export default Finish;

Finish.propTypes = {
  correctAnswers: PropTypes.number
}