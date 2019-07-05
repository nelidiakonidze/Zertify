import React from 'react';
import ZCertificate from '../../components/certificates/ZCertificate';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';

const ZCertificatePage = () => {
  return (
    <div className='width-div'>
      {/* <ZCertificate /> */}
      {/* <section className='flex-btn'>
        <button className='button select-table-btn'>
          Send Certificate to student
        </button>
        <button className='button select-back-btn'>Go back</button>
      </section> */}
      <PDFViewer>
        <ZpdfCertificate />
      </PDFViewer>
    </div>
  );
};

export default ZCertificatePage;
