import React from 'react';
import './ZSplashScreen.css';

const ZSplashScreen = () => {
  return (
    <div className='flex-splashscreen'>
      <h1>Welcome to Zertify</h1>
      <h2>The Edera Certification Generator</h2>
      <section>
          <button className="button">1</button>
          <button className="button">2</button>
      </section>
      <img src='https://i.imgur.com/K27lINZ.png' alt='TemplatesChoice' />
      {/* <img src='https://i.imgur.com/lFxUsdV.jpg' alt='TemplatesChoice2' />
  <img src='https://i.imgur.com/bPBtyoZ.jpg' alt='TemplatesChoice3' /> */}
    </div>
  );
};

export default ZSplashScreen;
