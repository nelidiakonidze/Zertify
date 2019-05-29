import React from 'react';
import './App.css';
import './Dashboard.css';
import ZForm from './ZForm';
import ZButton from './ZButton';
import ZSideNav from './ZSideNav';
import ZStudentTable from './ZStudentTable';

function Dashboard() {
  return (
    <div className='App'>
      <h1>Hellllo zertify!</h1>
      <h2>Student Table</h2>
      <ZStudentTable />
      <h2>Form</h2>
      <ZForm />
      <h2>Template</h2>
      <ZButton />
      <ZSideNav />
      <div className='footer'>
        <div>
          <span>Copyright &copy; 2019 By </span>
          <a target='_blank' href='https://www.ed-era.com/'>
            EdEra
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
