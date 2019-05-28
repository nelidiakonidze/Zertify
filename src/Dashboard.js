import React from 'react';
import './App.css';
import ZertifyForm from './Form';
import MyButton from './ButtonCreate';
<<<<<<< HEAD
import NavBar from './SideNav';
=======
import StudentTable from './studentTable';
>>>>>>> e2aec861becc04bd7f35b1ef17b7e97574f6096c

function Dashboard() {
  return (
    <div className='App'>
      <h1>Hellllo zertify!</h1>
      <h2>Student Table</h2>
      <StudentTable />
      <h2>Form</h2>
      <ZertifyForm />
      <h2>Template</h2>
      <MyButton />
      <NavBar />
    </div>
  );
}

export default Dashboard;
