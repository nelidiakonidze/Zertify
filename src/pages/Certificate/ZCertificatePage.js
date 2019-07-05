import React from 'react';
import ZCertificate from '../../components/certificates/ZCertificate';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';
import {Link} from 'react-router-dom';

const ZCertificatePage = () => {
  return (
    <div>
      {/* <ZCertificate /> */}
      <section className='flex-btn'>
        <button className='button select-table-btn'>
          Send Certificate to student
        </button>
        <Link to='/'>
          <button className='button select-back-btn'>Go back</button>
        </Link>
      </section>
      <PDFViewer className='size-pdf'>
        <ZpdfCertificate />
      </PDFViewer>
    </div>
  );
};

export default ZCertificatePage;
