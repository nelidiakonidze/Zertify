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
        <section className='flex-main'>
          <h1>Select a template for the certificate</h1>
          <ZTemplate1
            selectTemplate={selectTemplate}
            selectedTemplate={selectedTemplate}
          />
          <ZButton>
            <Link to='/certificate'>Generate Certificate</Link>
          </ZButton>
        </section>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZTemplatePage;
