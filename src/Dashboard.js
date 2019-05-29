import React from 'react';
import './App.css';
import ZertifyForm from './Form';
import ZButton from './ZButton';
import ZSideNav from './ZSideNav';
import StudentTable from './studentTable';

function Dashboard() {
  return (
    <div className='App'>
      <h1>Hellllo zertify!</h1>
      <h2>Student Table</h2>
      <StudentTable />
      <h2>Form</h2>
      <ZertifyForm />
      <h2>Template</h2>
      <ZButton />
      <ZSideNav />
    </div>
  );
}

export default Dashboard;
