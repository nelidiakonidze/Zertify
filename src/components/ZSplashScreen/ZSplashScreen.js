import React from 'react';
import {NavLink} from 'react-router-dom';
import './ZSplashScreen.css';

const ZSplashScreen = () => {
  return (
    <div className='flex-splashscreen'>
      <h1>Welcome to Zertify</h1>
      <h2>The Edera Certification Generator</h2>
      <section>
        <NavLink to='/students'>
          <button className='button'>Select an elegible student</button>
        </NavLink>
        <NavLink to='/form'>
          <button className='button'>Create new student or course</button>
        </NavLink>
      </section>
      <img
        src='https://i.imgur.com/K27lINZ.png'
        alt='splashscreen illustration from Undraw '
      />
    </div>
  );
};

export default ZSplashScreen;
