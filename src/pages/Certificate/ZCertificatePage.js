import React from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';
import {Link} from 'react-router-dom';

const ZCertificatePage = ({selectedStudent, selectedColor, sendEmail}) => {
  return (
    <div>
      <section className='flex-btn'>
        <button className='button select-table-btn' onClick={sendEmail}>
          Send Certificate to student
        </button>
        <Link to='/'>
          <button className='button select-back-btn'>Go back</button>
        </Link>
      </section>
      <PDFViewer className='size-pdf'>
        <ZpdfCertificate
          selectedStudent={selectedStudent}
          selectedColor={selectedColor}
        />
      </PDFViewer>
    </div>
  );
};

export default ZCertificatePage;
