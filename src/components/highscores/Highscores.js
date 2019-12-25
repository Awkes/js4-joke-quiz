/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import HighscoreList from './HighscoreList';
import { getHighscores } from '../../api';

const Highscores = () => (
  <div sx={{
    paddingX: [3, 5],
    paddingY: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Styled.h2>Highscores</Styled.h2>
    <div sx={{ width: '100%', overflowX: 'auto' }}>
      <HighscoreList highscores={getHighscores()}/>
    </div>
  </div>
);

export default Highscores;