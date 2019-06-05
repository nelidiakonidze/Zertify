import React from 'react';
import ZSideNav from '../../components/ZSideNav';
//import ZTemplate from '../..src/ZSideNav';
import ZFooter from '../../components/ZFooter';

const ZTemplatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
