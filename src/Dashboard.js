import React from 'react';
import './App.css';
import ZertifyForm from './Form';
import MyButton from './ButtonCreate';
import NavBar from './SideNav';

function Dashboard() {
  return (
    <div className='App'>
      <h1>Hellllo zertify!</h1>
      <ZertifyForm />
      <MyButton />
      <NavBar />
    </div>
  );
}

export default Dashboard;
