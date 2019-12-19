/** @jsx jsx */
import { jsx } from 'theme-ui';
import Logo from './Logo';
import Menu from './Menu';
import MenuLink from './MenuLink';

const Header = () => (
  <header sx={{ 
    borderBottom: '2px solid #000',
    padding: 2
  }}>
    <Logo />
    <Menu>
      <MenuLink to="/">Game</MenuLink>
      <MenuLink to="highscores">Highscores</MenuLink>
    </Menu>
  </header>
);

export default Header;