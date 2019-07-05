import React from 'react';
//import ZCertificate from '../../components/ZCertificate';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';

const ZCertificatePage = () => {
  return (
    <React.Fragment>
      {/* <section className='flex-certificate'>
        <ZCertificate />
      </section> */}
      <section className='flex-btn'>
        <button className='button select-table-btn'>
          Send Certificate to student
        </button>
        <button className='button select-back-btn'>Go back</button>
      </section>
      {/* <PDFViewer>
        <ZpdfCertificate />
      </PDFViewer> */}
    </React.Fragment>
  );
};

export default ZCertificatePage;
