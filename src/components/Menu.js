/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Menu = ({children}) => (
  <nav>
    <ul sx={{
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'center',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      '& > li': {
        display: 'inline-block',
      }
    }}>
      {
        Array.isArray(children)
          ? children.map((link, i) => <li key={i}>{link}</li>)
          : <li>{children}</li>
      }
    </ul>
  </nav>
);

export default Menu;

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}