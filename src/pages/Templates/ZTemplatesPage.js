import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZTemplate1 from '../../components/templates/ZTemplate1';
import ZFooter from '../../components/layout/ZFooter';
import './ZTemplatesPage.css';
import ZButton from '../../components/layout/ZButton';
import {Link} from 'react-router-dom';

const ZTemplatePage = ({selectedTemplate, selectTemplate}) => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-templates'>
        <ZTemplate1
          selectTemplate={selectTemplate}
          selectedTemplate={selectedTemplate}
        />
        <ZButton className='btn-certificate'>
          <Link to='/certificate'>Generate Certificate</Link>
        </ZButton>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
