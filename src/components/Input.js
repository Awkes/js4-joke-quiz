/** @jsx jsx */
import { jsx } from 'theme-ui';

const Input = props => (
  <input 
    {...props}
    sx={{
      width: '100%',
      border: t => `1px solid ${t.colors.primary}`,
      borderRadius: '20px',
      paddingY: 3,
      paddingX: 4,
      fontFamily: 'body',
      fontSize: 1,
      outline: 'none',
      backgroundColor: 'backgroundSecondary',
      '&:focus': {
        borderColor: '#000',
      }
  }} />
);

export default Input;
