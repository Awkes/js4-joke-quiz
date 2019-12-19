/** @jsx jsx */
import { jsx } from 'theme-ui';
import Logo from './Logo';
import Menu from './Menu';
import MenuLink from './MenuLink';

const Header = () => (
  <header sx={{ 
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