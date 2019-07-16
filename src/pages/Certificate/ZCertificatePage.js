import React from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';
import {Link} from 'react-router-dom';

const ZCertificatePage = ({selectedStudent, selectedColor, sendEmail}) => {
  return (
    <div>
      <section className='flex-btn'>
<<<<<<< HEAD
         <Link to= '/certificate/sent'>
        <button className='button select-table-btn'>
=======
        <button className='button select-table-btn' onClick={sendEmail}>
>>>>>>> 2c15f47107f86c3285c5940b99c683a087a972ce
          Send Certificate to student
        </button>
        </Link>
        <Link to='/'>
          <button className='button select-back-btn'>
            Go back
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
};

export default ZCertificatePage;
