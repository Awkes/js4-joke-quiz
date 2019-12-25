/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export const HighscoreList = ({ highscores }) => (
  highscores.length > 0
    ? <table sx={{
        fontFamily: 'body',
        fontSize: [1, 2],
        width: '100%',
      }}>
        <thead>
          <tr sx={{ fontWeight: 'bold', '&>th': { paddingBottom: 4 } }}>
            <th sx={{ textAlign: 'left' }}>#</th>
            <th sx={{ textAlign: 'left' }}>Name</th>
            <th sx={{ textAlign: 'center' }}>Score</th>
            <th sx={{ textAlign: 'right' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            highscores.map((entry, i) => (
              <tr key={i}>
                <td sx={{ textAlign: 'left', paddingRight: 3 }}>{i+1}</td>
                <td sx={{ textAlign: 'left' }}>{entry.name}</td>
                <td sx={{ textAlign: 'center', paddingX: 3 }}>{entry.score}</td>
                <td sx={{ textAlign: 'right' }}>{entry.time}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    : <div sx={{
        fontFamily: 'body',
        fontSize: [1, 2],
        width: '100%',
        textAlign: 'center'
      }}>
        There are no highscores yet!
      </div>
);

export default HighscoreList;

HighscoreList.propTypes = {
  highscores: PropTypes.array.isRequired
}