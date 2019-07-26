import React from 'react';
import './ZNoPage.css';
import ZSideNav from '../../components/layout/ZSideNav';

const ZNoPage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-404'>
        <h1>Something went wrong...</h1>
        <img
          src='https://media.giphy.com/media/Bp3dFfoqpCKFyXuSzP/source.gif'
          alt='GIF of someone lost'
        />
        <h2>Please, use the menu to go to another page</h2>
        <p>
          Info: If you are trying to generate a certificate, be sure you
          selected a student first
        </p>
      </section>
    </div>
  );
};

export default ZNoPage;
