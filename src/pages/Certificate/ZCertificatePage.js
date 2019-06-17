import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZFooter from '../../components/layout/ZFooter';
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
