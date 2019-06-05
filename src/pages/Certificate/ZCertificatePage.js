import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZFooter from '../../components/ZFooter';
import ZCertificate from '../../components/ZCertificate';

const ZCertificatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-certificate'>
        <ZCertificate />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZCertificatePage;
