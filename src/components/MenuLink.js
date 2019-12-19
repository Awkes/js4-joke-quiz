/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const MenuLink = ({children, to}) => (
  <Link 
    to={to}
    getProps={({isCurrent}) => isCurrent ? { style: { textDecorationLine: 'underline overline' }} : null }
    sx={{
      display: 'block',
      padding: 2,
      color: 'primary',
      textDecoration: 'none',
      textDecorationColor: t => t.colors.secondary,
    }}
  >
    {children}
  </Link>
);

export default MenuLink;

MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired
}