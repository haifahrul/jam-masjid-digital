import React from 'react';
import ReactDOM from 'react-dom';
import './_assets/fonts/fonts.css';
import './index.scss';
// import Slider from './Slider/Slider';
import Home from './pages/Home/Home';
import Admin from './Admin/Admin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const routing = (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta httpEquiv="refresh" content="3600" />
      {/*
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      */}
      
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* 
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      */}
      <title>{process.env.REACT_APP_APP_TITLE ?? 'Mosque Screen'}</title>
    </Helmet>

    <Router>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        {/* <Route component={Slider} /> */}
        <Route component={Home} />
      </Switch>
    </Router>
  </>
);

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
