import React from 'react';
import {NavLink} from 'react-router-dom';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function ZSideNav() {
  return (
    <SideNav style={{position: 'fixed', background: '#477DCA'}}>
      <SideNav.Toggle />
      <SideNav.Nav>
        <NavItem eventKey='home'>
          <NavIcon>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>
              <i className='fa fa-fw fa-home' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>
              Home
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='students'>
          <NavIcon>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/students'>
              <i className='fas fa-user-graduate' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/students'>
              Students
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='templates'>
          <NavIcon>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/templates'>
              <i className='fas fa-award' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/templates'>
              Templates
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='form'>
          <NavIcon>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/form'>
              <i className='far fa-file-alt' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink style={{textDecoration: 'none', color: 'white'}} to='/form'>
              Form
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='help'>
          <NavIcon>
            <NavLink style={{textDecoration: 'none', color: 'white', padding: '15px'}} to='/help'>
              <i class='fas fa-question-circle' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '23px',
                paddingRight: '100px',
              }}
              to='/help'>
              Help
            </NavLink>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default ZSideNav;
