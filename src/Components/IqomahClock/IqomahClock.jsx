import React from 'react';
import { getTimeRaw } from '../../utils/date-time';
import './iqomahClock.scss';
import useCountDown from "./useIqomahClock";

// TODO: Every single prayer time have iqomah time
// const IQOMAH_TIME = {
//   'default': 15,
//   [PRAYER_TIME_CODE.fajr]: 15,
// }

const getIqomahTime = () => {
  const IQOMAH_TIME = 1; // in minutes
  return IQOMAH_TIME;
}

const ExpiredNotice = ({ title, subTitle }) => {
  return (
    <div className={`card __iqomah-time`}>
      <div className='card-body mt-2 text-center animated bounce'>
        <h1 className={`mb-2 fw-bold`}>{title}</h1>
        <h1 className={`fw-bold mb-2`}>{subTitle}</h1>
      </div>
    </div>
  );
};

const DisplayIqomahClock = ({ title, subTitle }) => {
  return (
    <div className={`card __iqomah-time`}>
      <div className='card-body mt-2 text-center'>
        <h1 className={`fw-bold mb-2`}>{title}</h1>
        <h1 className={`mb-2 fw-bold`}>{subTitle}</h1>
      </div>
    </div>
  )
}

const IqomahClock = () => {
  const [minutes, seconds] = useCountDown(getTimeRaw().add(getIqomahTime(), 'minute'));

  if (minutes + seconds <= 0) {
  // if (minutes + seconds > 0) {
    return (
      <div className='col mx-auto'>
        <ExpiredNotice
          title={'JANGAN BERISIK'}
          subTitle={'Mohon matikan/silent Handphone Anda!'}
        />
      </div>
    )
  } else {
    return (
      <div className='col col-md-3 mx-auto'>
        <DisplayIqomahClock
          title={'Iqomah'}
          subTitle={`${minutes}:${seconds}`}
        />
      </div>
    );
  }
};

export default IqomahClock;
