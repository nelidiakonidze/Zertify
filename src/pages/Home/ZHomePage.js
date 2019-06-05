import React from 'react';
import ZSideNav from '../../ZSideNav';
import ZFooter from '../../ZFooter';

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
