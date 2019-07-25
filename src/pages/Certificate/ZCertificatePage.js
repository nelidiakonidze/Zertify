import React from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import ZpdfCertificate from '../../components/certificates/ZpdfCertificate';
import './ZCertificatePage.css';
import {Link} from 'react-router-dom';
import ZNoPage from '../NoPage/ZNoPage';
import {withRouter} from 'react-router-dom';

const ZCertificatePage = props => {
  const {selectedStudent, selectedColor, history} = props;
  // post the certificate informations
  const sendEmail = e => {
    e.preventDefault();
    e.stopPropagation();
    const urlCertificate =
      'https://zertify-server.herokuapp.com/api/certificate';
    const Zconfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        settings: JSON.stringify({
          firstName: selectedStudent.firstName,
          lastName: selectedStudent.lastName,
          email: selectedStudent.email,
          name: selectedStudent.courses[0].name,
          hours: selectedStudent.courses[0].hours,
          color: selectedColor,
        }),
      }),
    };

    fetch(urlCertificate, Zconfig)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          console.log('response', response);
          const myUrl = `/edera/${response.hashed}/certificate.pdf`;
          alert('The certificate has been sent by email to the student');
          history.push(myUrl);
        }
      })
      .catch(event => {
        console.error(event);
      });
  };

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

export default withRouter(ZCertificatePage);
