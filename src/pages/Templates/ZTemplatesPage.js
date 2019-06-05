import React from 'react';
import ZSideNav from '../../ZSideNav';
//import ZTemplate from '../..src/ZSideNav';
import ZFooter from '../../ZFooter';

const ZTemplatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        {/*<ZTemplate /> */}
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
