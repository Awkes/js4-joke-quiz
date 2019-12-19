/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from './theme'
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/index';
import Highscores from './pages/highscores';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{
        backgroundColor: 'background',
        minHeight: '100vh',
      }}>
        <Header />
        <Router sx={{ 
          padding: [4, 5],
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          <Index path="/" />
          <Highscores path="highscores" />
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
