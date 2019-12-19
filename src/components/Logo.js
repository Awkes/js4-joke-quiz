/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@reach/router';

const Logo = () => (
  <h1 sx={{
    fontFamily: 'logo',
    fontSize: [4, 5],
    letterSpacing: 3,
    margin: 0,
    textAlign: 'center',
    textShadow: t => `
      5px 5px 10px ${t.colors.primary},
      0px 0px 20px ${t.colors.secondary}
    `,
  }}>
    <Link to="/" sx={{ color: 'text', textDecoration: 'none' }}>Joke Quiz</Link>
  </h1>
);

export default Logo;