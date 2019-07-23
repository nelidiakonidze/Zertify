import React from 'react';
import {NavLink} from 'react-router-dom';
import './ZSplashScreen.css';

const ZSplashScreen = () => {
  return (
    <div>
      <div>
        <h1 className='flex-splashscreen'>Welcome to Zertify</h1>
        <h2 className='flex-splashscreen'>Certification Creator</h2>
        <div className='instruction_btn'>
          <NavLink to='/students'>
            <button className='splashScreenBtn'>Select elegible Student</button>
          </NavLink>
          <NavLink to='/form'>
            <button className='splashScreenBtn'>Add new Student/Course</button>
          </NavLink>
        </div>
        <img
          className='flex-splashscreen'
          src='https://i.imgur.com/K27lINZ.png'
          alt='TemplatesChoice'
        />
        {/* <img src='https://i.imgur.com/lFxUsdV.jpg' alt='TemplatesChoice2' />
    <img src='https://i.imgur.com/bPBtyoZ.jpg' alt='TemplatesChoice3' /> */}
      </div>
    </div>
  );
};

export default ZSplashScreen;
