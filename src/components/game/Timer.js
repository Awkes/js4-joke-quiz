/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Time from 'react-time-format';

const Timer = ({ run, setTotalTime }) => {
  const [startTime] = useState(new Date());
  const [time, setTime] = useState(new Date(0));

  const updateTime = useCallback(() => {
    const elapsedTime = new Date(new Date().getTime() - startTime.getTime());
    setTime(elapsedTime);
  }, [startTime]);

  useEffect(() => {
    const timer = setInterval(updateTime, 500);
    if (!run) { 
      clearInterval(timer);
      setTotalTime(time);
    }
    return () => clearInterval(timer);
  }, [run, setTotalTime, startTime, time, updateTime]);
  
  return (
    <time>
      <Time 
        value={time}
        format="mm:ss"
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
  run: PropTypes.bool,
  setTotalTime: PropTypes.func.isRequired
}

Timer.defaultProps = {
  run: true
}