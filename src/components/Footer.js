/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer sx={{ 
    textAlign: 'center',
    fontFamily: 'body',
    fontSize: 0,
    borderTop: '2px solid #000',
    padding: 2
  }}>
    <p>
      This app uses <a 
        href="https://github.com/15Dkatz/official_joke_api" 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          color: 'primary',
          textDecoration: 'none',
          '&:hover': { 
            textDecoration: 'underline',
            textDecorationColor: t => t.colors.secondary
          }
        }}
      >
        Official Joke API
      </a>
    </p>
    <p>App created by Andreas Åkerlöf</p>
  </footer>
);

export default Footer;