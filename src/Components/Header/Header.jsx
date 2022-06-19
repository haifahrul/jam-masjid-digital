import React from 'react';
import Clock from '../Clock/Clock';
import Date from '../Date/Date';
import './header.scss';

const Header = () => {
  return (
    <div className='container-fluid px-5 pt-4 mx-auto'>
      <div className='row'>
        <div className='col-lg-4 text-start'>
          <h1 className="fw-bold">
            <Date />
          </h1>
        </div>
        <div className='col-lg-4 text-center'>
          <h1 className="fw-bold">Masjid Al-Suwardi</h1>
          <h1 className="fs-5">Grand Mahkota 1</h1>
        </div>
        <div className='col-lg-4 text-end'>
          <h1 className="fw-bold">
            <Clock />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header;
