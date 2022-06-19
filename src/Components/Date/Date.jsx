import React from 'react';
import { getDayOfTheWeek, getDate, getHijriDate } from '../../utils/date-time';
import './date.scss';

const Date = () => {
  return (
    <div className='DateWrapper_'>
      <div className='Date_'>
        <div className='row'>{getDayOfTheWeek()}, {getDate()}</div>
        <div className='row'>{getHijriDate()}</div>
      </div>
    </div>
  );
}

export default Date;
