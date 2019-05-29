import React from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function ZSideNav() {
  return (
    <SideNav
      onSelect={selected => {
        // Add your code here
      }}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected='home'>
        <NavItem eventKey='home'>
          <NavIcon>
            <i className='fa fa-fw fa-home' style={{fontSize: '1.75em'}} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey='students'>
          <NavIcon>
            <i className='fas fa-user-graduate' style={{fontSize: '1.75em'}} />
          </NavIcon>
          <NavText>Students</NavText>
        </NavItem>
        <NavItem eventKey='forms'>
          <NavIcon>
            <i
              className='far fa-file-alt'
              style={{fontSize: '1.75em'}}
            />
          </NavIcon>
          <NavText>Forms</NavText>
        </NavItem>
        <NavItem eventKey='templates'>
          <NavIcon>
            <i
              className='fas fa-certificate'
              style={{fontSize: '1.75em'}}
            />
          </NavIcon>
          <NavText>Templates</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default ZSideNav;
