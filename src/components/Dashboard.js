import React from 'react';
import './Dashboard.css';
import ZInputForm from './ZInputForm';
import ZButton from './ZButton';
import ZSideNav from './ZSideNav';
import ZStudentTable from './ZStudentTable';
import ZFooter from './ZFooter';
import ZCertificate from './ZCertificate';

function Dashboard() {
  return (
    <div>
      <ZSideNav />
      <section className='flex-children'>
        <h1>Hellllo zertify!</h1>
        <h2>Student Table</h2>
        <ZStudentTable />
        <h2>Form</h2>
        <ZInputForm />
        <h2>Template</h2>
        <ZButton />
        <ZFooter />
      </section>
      <ZCertificate />
    </div>
  );
}

export default Dashboard;
