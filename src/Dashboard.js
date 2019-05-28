import React from 'react';
import './App.css';
import ZertifyForm from './Form';
import MyButton from './ButtonCreate';
import StudentTable from './studentTable';
import NavBar from './SideNav';

function Dashboard() {
  return (
    <div className='App'>
      <NavBar />
      <h1>Hellllo zertify!</h1>
      <h2>Student Table</h2>
      <StudentTable />
      <h2>Form</h2>
      <ZertifyForm />
      <h2>Template</h2>
      <MyButton />
    </div>
  );
}

export default Dashboard;
