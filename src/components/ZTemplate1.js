import React from 'react';
import Coverflow from 'react-coverflow';
import './ZTemplate1.css';

const imagesArr = [];

var fn = function() {
  /* do you want */
};

const ZTemplate1 = () => {
  return (
    <Coverflow
      className='CoverSlide'
      width={1900}
      height={1000}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}>
      <div onClick={() => fn()} onKeyDown={() => fn()} role='menuitem' tabIndex='0'>
        <img
          src='https://i.imgur.com/28Wf9AH.png'
          alt='Template 1'
          data-action='https://i.imgur.com/28Wf9AH.png'
          style={{display: 'block', width: '100%'}}
        />
      </div>
      <img
        src='https://i.imgur.com/T34nl37.png'
        alt='Template 2'
        data-action='https://i.imgur.com/T34nl37.png'
        style={{display: 'block', width: '100%'}}
      />
      <img
        src='https://i.imgur.com/kTfJhKh.png'
        alt='Template 3'
        data-action='https://i.imgur.com/kTfJhKh.png'
        style={{display: 'block', width: '100%'}}
      />
    </Coverflow>
  );
};

export default ZTemplate1;
