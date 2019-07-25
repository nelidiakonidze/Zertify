import React from 'react';
import {NavLink} from 'react-router-dom';
import ZSideNav from '../../components/layout/ZSideNav';
import Particles from 'react-particles-js';
import './ZHelp.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    style: {
      color: '#CD923A',
    },
  },
};

const ZHelpPage = () => {
  return (
    <div>
      <Particles className='particles' params={particlesOptions} />
      <ZSideNav />
      <div className='flex_container'>
        <h1>Instructions</h1>
        <ol className='flex_list'>
          <li>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/students'>
              <span>Select eligible Student</span>
              <i className='fas fa-user-graduate' style={{fontSize: '1.3em', color: '#477DCA'}} />
              after selecting Student -> Go to Step 3
            </NavLink>
          </li>

          <li>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/form'>
              If Student or Course is missing -> <span>Add Student or Course</span>
              <i className='far fa-file-alt' style={{fontSize: '1.3em', color: '#477DCA'}} />
              back to step 1
            </NavLink>
          </li>

          <li>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/templates'>
              <span>Select Template</span>
              <i className='fas fa-award' style={{fontSize: '1.3em', color: '#477DCA'}} />
            </NavLink>
          </li>

          <li>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/templates'>
              When you have choosen your template click on <span>Generate Certificate</span>
              <i className='fas fa-award' style={{fontSize: '1.3em', color: '#477DCA'}} /> you will
              see preview page of the certificate
            </NavLink>
          </li>
          <li>
            After you clicked <span>Generate Certificate</span> you see your Certificate Preview. On
            the top is a button to <span>send email</span> automatically to the selected student!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ZHelpPage;
