import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZFooter from '../../components/ZFooter';
import ZCertificate from '../../components/ZCertificate';
import './ZHomePage.css';

const ZHomePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-home'>
        <ZCertificate />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZHomePage;
