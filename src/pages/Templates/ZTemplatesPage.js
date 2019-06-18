import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZTemplate from '../../components/ZTemplate';
import ZFooter from '../../components/ZFooter';
import './ZTemplatesPage.css';
import ZButton from '../../components/ZButton';
import {Link} from 'react-router-dom';

const ZTemplatePage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        <ZTemplate />
        <ZButton>
          <Link to='/certificate'>Generate Certificate</Link>
        </ZButton>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
