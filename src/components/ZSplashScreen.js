import React from 'react';
import './ZSplashScreen.css';

const ZSplashScreen = () => {
  return (
    <div>
      <h1 className='header'>Welcome to Zertify</h1>
      <h2 className='title'>Certification Generator</h2>
      <img
        className='photo'
        src='https://i.imgur.com/K27lINZ.png'
        alt='TemplatesChoice'
      />
      {/* <img src='https://i.imgur.com/lFxUsdV.jpg' alt='TemplatesChoice2' />
  <img src='https://i.imgur.com/bPBtyoZ.jpg' alt='TemplatesChoice3' /> */}
    </div>
  );
};

export default ZSplashScreen;
