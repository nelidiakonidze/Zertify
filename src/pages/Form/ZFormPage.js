import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZInputForm from '../../components/ZInputForm';
import ZFooter from '../../components/ZFooter';
import './ZFormsPage.css';

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
