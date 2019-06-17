import React, {Fragment} from 'react';
import './ZTemplate.css';
import ZButton from './ZButton';
import {Link} from 'react-router-dom';

class ZTemplate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='cc-slider'>
          <div className='cc-list draggable'>
            <div className='cc'>
              <div className='cc-wrapper'>
                <div className='line'>
                  <div className='cc-holder'>
                    <span className='label'>TEMPLATE </span>
                    <span className='value'>ART COURSES</span>
                  </div>
                  <div className='cc-type' />
                </div>
                <div className='line'>
                  <div className='cc-puce'>
                    <img src='https://images.unsplash.com/photo-1557411732-1797a9171fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2475&q=80' />
                  </div>
                  <div className='cc-code' />
                </div>
                <div className='line' />
              </div>
            </div>
            <div className='cc active'>
              <div className='cc-wrapper'>
                <div className='line'>
                  <div className='cc-holder'>
                    <span className='label'>TEMPLATE</span>
                    <span className='value'>TECH COURSES</span>
                  </div>
                  <div className='cc-type'>
                    <img src='http://img11.hostingpics.net/pics/117557mastercard.png' />
                  </div>
                </div>
                <div className='line'>
                  <div className='cc-puce'>
                    <img src='http://img11.hostingpics.net/pics/734325puce.png' />
                  </div>
                  <div className='cc-code' />
                </div>
                <div className='line' />
              </div>
            </div>
            <div className='cc'>
              <div className='cc-wrapper'>
                <div className='line'>
                  <div className='cc-holder'>
                    <span className='label'>TEMPLATE</span>
                    <span className='value'>OTHER</span>
                  </div>
                  <div className='cc-type'>
                    <img src='http://img11.hostingpics.net/pics/117557mastercard.png' />
                  </div>
                </div>
                <div className='line'>
                  <div className='cc-puce'>
                    <img src='http://img11.hostingpics.net/pics/734325puce.png' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className='cc-dots'>
            <li>
              <button className='dot' />
            </li>
            <li className='active'>
              <button className='dot' />
            </li>
            <li>
              <button className='dot' />
            </li>
          </ul>
        </div>
        <ZButton>
          <Link to='/certificate'>Generate Certificate</Link>
        </ZButton>
      </React.Fragment>
    );
  }
}

export default ZTemplate;
