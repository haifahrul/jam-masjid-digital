import React, { useEffect } from 'react';
import './Home.scss';
// import View1 from '../Views/View 1/View1';
// import View2 from '../Views/View 2/View2';
// import View3 from '../Views/View 3/View3';
// import View4 from '../Views/View 4/View4';
// import View6 from '../Views/View 6/View6';
// import SingleView from '../Views/SingleView/SingleView';
// import GoogleSlides from '../GoogleSlides/GoogleSlides';
// import config from '../config.json';
// import BlackoutPeriods from '../_components/blackout-periods/blackout-periods';
// import AppConfig from '../_components/app-config/app-config';

// New React Component
import Header from '../../Components/Header/Header';
import IqomahClock from '../../Components/IqomahClock/IqomahClock';
import PrayTimes from '../../Components/PrayTimes/PrayTimes';

// import Logo from '../_components/logo/logo';
// import PrayerTimes from '../_components/prayer-times/prayer-times';
// import BuildNumber from '../_components/build-number/build-number';
// import SunriseAndZawwal from '../_components/sunrise-and-zawwal/sunrise-and-zawwal';
// import AdditionalMessage from '../_components/additional-message/additional-message';
// import AppConfig from '../_components/app-config/app-config';
// import Branding from '../_components/branding/branding';

const Home = () => {
  // const [appConfig, setAppConfig] = useState(new AppConfig());

  // useEffect(() => {
  //   const apps = new AppConfig()
  // this.setAppConfig(apps);
  // }, [])

  useEffect(() => {
    return () => {
      // this.setAppConfig(null);
    }
  })

  // const RenderMain = () => {
  //   return (
  //     <div className='View1'>
  //       <div className='row'>
  //         <Logo />
  //       </div>
  //       <div className='row'>
  //         <div className='col-12 col-md-6'>
  //           <div className='row'>
  //             <Clock />
  //           </div>
  //           <div className='row'>
  //             <Date />
  //           </div>
  //           {/* <div className='row'>
  //             <AdditionalMessage
  //               message={this.appConfig.get('Text_Donate_Message')}
  //             />
  //           </div> */}
  //         </div>
  //         <div className='col-12 col-md-6'>
  //           <div className='row'>
  //             <PrayerTimes />
  //           </div>
  //           <div className='row'>
  //             <SunriseAndZawwal />
  //           </div>
  //         </div>
  //       </div>
  //       <BuildNumber />
  //       <Branding />
  //     </div>
  //   );
  // }

  return (
    <>
      <Header />
      <hr />

      <div className='container-fluid'>

        <div className='row justify-content-center pt-3'>
          <PrayTimes />
        </div>

        {/* CONTENT */}
        <div className='row mt-5 mb-5'>
          <IqomahClock />
        </div>

        {/* <RenderMain /> */}
      </div>
    </>
  )
}

export default Home;
