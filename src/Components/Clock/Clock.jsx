import React, { useEffect, useState } from 'react';
import { getTime } from '../../utils/date-time'
import './clock.scss';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [, setIntervalTime] = useState(1000);

  const tick = () => {
    setTime(getTime());
  }

  useEffect(() => {
    setIntervalTime(setInterval(() => tick(), 1000));
    setTime(getTime());

    return () => {
      clearInterval(setIntervalTime(null))
    }
  }, [])

  return (
    <div className="__clock-wrapper">
      <div className="__clock">{time}</div>
    </div>
  );
}

export default Clock;
