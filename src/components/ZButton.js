import React from 'react';
import {styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const ZButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 40,
});

export default function StyledComponents({}) {
  return (
    <ZButton>
      <Link to='/certificate'>Generate Certificate</Link>
    </ZButton>
  );
}
