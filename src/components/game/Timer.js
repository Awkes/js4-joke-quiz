/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Time from 'react-time-format';

const Timer = ({ run }) => {
  const [startTime] = useState(new Date());
  const [time, setTime] = useState(-3600000);

  const updateTime = useCallback(() => {
    const elapsedTime = new Date(new Date().getTime() - startTime.getTime() -3600000);
    setTime(elapsedTime);
  }, [startTime]);

  useEffect(() => {
    const timer = setInterval(updateTime, 500);
    if (!run) clearInterval(timer);
    return () => clearInterval(timer);
  }, [run, startTime, updateTime]);
  
  return (
    <time>
      <Time 
        value={time}
        format="HH:mm:ss"
        sx={{
          fontFamily: 'body',
          fontSize: 3,
        }} 
      />
    </time>
  );
}

export default Timer;

Timer.propTypes = {
  run: PropTypes.bool
}

Timer.defaultProps = {
  run: true
}