/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from './theme'
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from './components/Box';
import Game from './components/game/Game';
import Highscores from './components/highscores/Highscores';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{
        backgroundColor: 'background',
        minHeight: '100vh',
      }}>
        <Header />
        <main sx={{ 
          padding: [4, 5],
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          <Box>
            <Router>
              <Game path="/" />
              <Highscores path="highscores" />
            </Router>
          </Box>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
