import React from 'react';
import './App.css';
import ZertifyForm from './Form';
import MyButton from './ButtonCreate';

function Dashboard() {
  return (
    <div className='App'>
      <h1>Hellllo zertify!</h1>
      <ZertifyForm />
      <MyButton />
    </div>
  );
}

export default Dashboard;
