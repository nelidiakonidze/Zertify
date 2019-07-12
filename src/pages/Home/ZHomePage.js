import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZFooter from '../../components/layout/ZFooter';
import ZSplashScreen from '../../components/ZSplashScreen';
import './ZHomePage.css';

const ZHomePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-home'>
        <ZSplashScreen />
      </section>
      <ZFooter />
    </div>
  );
};

export default ZHomePage;
