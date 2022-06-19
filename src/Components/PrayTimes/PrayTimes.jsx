/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PrayTimesLib from './pray-times-lib'
import './PrayTimes.scss'

export const PRAYER_TIME_CODE = {
  imsak: 'imsak',
  fajr: 'fajr',
  sunrise: 'sunrise',
  dhuhr: 'dhuhr',
  asr: 'asr',
  sunset: 'sunset',
  maghrib: 'maghrib',
  isha: 'isha',
  midnight: 'midnight',
};
export const idLabelPrayerTime = ['Imsak', 'Subuh', 'Syuruq', 'Zuhur', 'Asar', 'Magrib', "Isya'"];
const LATITUDE = -6.159001394242798
const LONGITUDE = 107.02803471085174
const ALTITUDE = 100
const GMT = 7 // Asia/Jakarta 

const PrayTimes = () => {
  const [prayerTimeActive] = useState(PRAYER_TIME_CODE.asr);
  const prayTimesConfig = new PrayTimesLib();
  prayTimesConfig.tune({
    imsak: -6,
    fajr: -6,
    sunrise: -1,
    dhuhr: +3,
    asr: +2,
    sunset: +2,
    maghrib: 0,
    isha: +6,
    midnight: 0
  })
  const prayTimesData = prayTimesConfig.getTimes(new Date(), [LATITUDE, LONGITUDE, ALTITUDE], GMT);
  const times = Object.entries(prayTimesData).filter(item => {
    const code = item[0];
    if (code !== 'sunset' && code !== 'midnight') {
      return item;
    }
  }).map((item, i) => {
    return {
      code: item[0],
      time: item[1],
      label: idLabelPrayerTime[i]
    }
  })

  const PrayerTime = ({ code, time, label }) => {
    return (
      <div className={`card __card-prayer-time ${code == prayerTimeActive ? 'active' : ''}`}>
        <div className='card-body mt-2'>
          <h1 className={`fw-bold mb-2`}>{label}</h1>
          <h1 className={`mb-2 fw-bold`}>{time}</h1>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        times.map(item => {
          return (
            <div key={item.code} className='col py-2 text-center'>
              <PrayerTime {...item} />
            </div>
          )
        })
      }
    </>
  )
}

export default PrayTimes;
