/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Box = ({ children }) => (
  <div sx={{
    border: t => `2px solid ${t.colors.primary}`,
    borderRadius: '10px',
    backgroundColor: 'backgroundSecondary',
    boxShadow: t => `0px 0px 10px ${t.colors.secondary}`,
  }}>
    {children}
  </div>
);

export default Box;

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}