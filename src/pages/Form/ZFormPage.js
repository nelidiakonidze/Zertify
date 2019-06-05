import React from 'react';
import ZSideNav from '../../ZSideNav';
import ZInputForm from '../../ZInputForm';
import ZFooter from '../../ZFooter';

const ZFormsPage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-form'>
        <ZInputForm />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZFormsPage;
