import React from 'react';
import {NavLink} from 'react-router-dom';
import ZSideNav from '../../components/layout/ZSideNav';
import './ZHelp.css';

const ZHelpPage = () => {
  return (
    <div>
      <ZSideNav />
      <div className='flex_container'>
        <h1>Instructions</h1>
        <ol className='flex_list'>
          <li>
            <span>Select eligible Student</span>{' '}
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/students'>
              <i className='fas fa-user-graduate' style={{fontSize: '1.3em', color: '#477DCA'}} />
            </NavLink>
            -> after selecting Student -> Go to Step 3{' '}
          </li>

          <li>
            If Student or Course is missing -> <span>Add Student or Course</span>{' '}
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/form'>
              <i className='far fa-file-alt' style={{fontSize: '1.3em', color: '#477DCA'}} />
            </NavLink>{' '}
            -> back to step 1
          </li>

          <li>
            <span>Select Template</span>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/templates'>
              <i className='fas fa-award' style={{fontSize: '1.3em', color: '#477DCA'}} />{' '}
            </NavLink>
          </li>

          <li>
            When you have choosen your template click on <span>Generate Certificate</span>{' '}
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/templates'>
              {' '}
              <i className='fas fa-award' style={{fontSize: '1.3em', color: '#477DCA'}} />{' '}
            </NavLink>
            -> will see preview page of the certificate
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ZHelpPage;
