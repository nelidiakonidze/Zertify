import React, {useState} from 'react';
import './ZTemplate1.css';
const ZTemplate1 = () => {
  let [selectedTemplate, SelectTemplate] = useState(0);

  return (
    <div className='cc-slider'>
      <div className='cc-list draggable'>
        <div
          className={`cc template1 ${selectedTemplate === 0 ? 'active' : ' '}`}
          onClick={() => SelectTemplate(0)}
        />

        <div
          className={`cc template2 ${selectedTemplate === 1 ? 'active' : ' '}`}
          onClick={() => SelectTemplate(1)}
        />

        <div
          className={`cc template3 ${selectedTemplate === 2 ? 'active' : ' '}`}
          onClick={() => SelectTemplate(2)}
        />
      </div>
      <ul className='cc-dots'>
        <li className={selectedTemplate === 0 ? 'active' : ''}>
          <button className='dot' />
        </li>
        <li className={selectedTemplate === 1 ? 'active' : ''}>
          <button className='dot' />
        </li>
        <li className={selectedTemplate === 2 ? 'active' : ''}>
          <button className='dot' />
        </li>
      </ul>
    </div>
  );
};
export default ZTemplate1;
