/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = props => (
  <button 
    {...props}
    sx={{
      width: '100%',
      border: t => `1px solid ${t.colors.primary}`,
      borderRadius: '20px',
      paddingY: 3,
      paddingX: 4,
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: 'background',
      '&:focus': {
        borderColor: '#000',
      }
  }} />
);

export default Button;