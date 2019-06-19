import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZFooter from '../../components/layout/ZFooter';
import ZCertificate from '../../components/ZCertificate';
import './ZHomePage.css';

const ZHomePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-home'>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZHomePage;
