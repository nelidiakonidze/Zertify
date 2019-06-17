import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZTemplate from '../../components/ZTemplate';
import ZFooter from '../../components/layout/ZFooter';
import './ZTemplatesPage.css';

const ZTemplatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        <ZTemplate />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
