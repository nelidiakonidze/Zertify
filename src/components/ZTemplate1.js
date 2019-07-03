import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './ZTemplate1.css';
const ZTemplate1 = () => {
  let [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className='cc-slider'>
      <div className='cc-list draggable'>
      
        
        
        <div 
          className={`cc template1 ${selectedCard === 0 ? 'active' : ' '}`}
          onClick={() => setSelectedCard(0)}>
        </div>

        <div 
          className={`cc template2 ${selectedCard === 1 ? 'active' : ' '}`}
          onClick={() => setSelectedCard(1)}>
        </div>

          <div 
          className={`cc template3 ${selectedCard === 2 ? 'active' : ' '}`}
          onClick={() => setSelectedCard(2)}>
        </div>

   
       
      </div>
      <ul className='cc-dots'>
        <li className={selectedCard === 0 ? 'active' : ''}>
          <button className='dot' />
        </li>
        <li className={selectedCard === 1 ? 'active' : ''}>
          <button className='dot' />
        </li>
        <li className={selectedCard === 2 ? 'active' : ''}>
          <button className='dot' />
        </li>
      </ul>
    </div>
  );
};
export default ZTemplate1;
