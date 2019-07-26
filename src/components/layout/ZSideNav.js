import React from 'react';
import {NavLink} from 'react-router-dom';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function ZSideNav() {
  return (
    <SideNav
      style={{
        position: 'fixed',
        background: '#477DCA60',
        boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.75)',
      }}>
      <SideNav.Toggle />
      <SideNav.Nav>
        <NavItem eventKey='home'>
          <NavIcon>
            <NavLink
              style={{textDecoration: 'none', color: 'white', padding: '13px'}}
              to='/'>
              <i className='fa fa-fw fa-home' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '24px',
                paddingRight: '100px',
              }}
              to='/'>
              Home
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='students'>
          <NavIcon>
            <NavLink
              style={{textDecoration: 'none', color: 'white', padding: '18px'}}
              to='/students'>
              <i
                className='fas fa-user-graduate'
                style={{fontSize: '1.75em'}}
              />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '24px',
                paddingRight: '100px',
              }}
              to='/students'>
              Students
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='templates'>
          <NavIcon>
            <NavLink
              style={{textDecoration: 'none', color: 'white', padding: '19px'}}
              to='/templates'>
              <i className='fas fa-award' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '24px',
                paddingRight: '100px',
              }}
              to='/templates'>
              Templates
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='form'>
          <NavIcon>
            <NavLink
              style={{textDecoration: 'none', color: 'white', padding: '20px'}}
              to='/form'>
              <i className='fas fa-user-plus' style={{fontSize: '1.75em'}} />
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '24px',
                paddingRight: '100px',
              }}
              to='/form'>
              Form
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey='help'>
          <NavIcon>
            <NavLink
              style={{textDecoration: 'none', color: 'white', padding: '15px'}}
              to='/help'>
              <i
                className='fas fa-question-circle'
                style={{fontSize: '1.75em'}}
              />
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
