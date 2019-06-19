import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZTemplate1 from '../../components/ZTemplate1';
import ZFooter from '../../components/ZFooter';
import './ZTemplatesPage.css';

const ZTemplatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        <ZTemplate1 />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
