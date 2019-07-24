import React from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';
import {Link} from 'react-router-dom';
import ZNoPage from '../NoPage/ZNoPage';

const ZCertificatePage = ({selectedStudent, selectedColor, sendEmail}) => {
  console.log('length', Object.keys(selectedStudent).length);
  if (Object.keys(selectedStudent).length === 0) {
    return <ZNoPage />;
  } else {
    return (
      <div>
        <section className='flex-btn'>
          <Link to='/certificate/sent/:hash'>
            <button className='button swing' onClick={sendEmail}>
              Send Certificate to student
            </button>
          </Link>
          <Link to='/'>
            <button className='button' id='btn-secondary'>
              Cancel
            </button>
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
  }
};

export default ZCertificatePage;
