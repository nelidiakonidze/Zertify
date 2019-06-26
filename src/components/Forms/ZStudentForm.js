////
//  STUDENT  //
////

import React from './node_modules/react';
//template
import {
  makeStyles,
  createMuiTheme,
} from './node_modules/@material-ui/core/styles';
import {ThemeProvider} from './node_modules/@material-ui/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import green from './node_modules/@material-ui/core/colors/green';
import ZButton from '../layout/ZButton';
import './button.css';
//hooks for the form
import useZSForm from './useZSForm';
import Svalidate from './SFormValidationRules';

//style
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

//to keep the style of this function AND have state we must use hooks
// tutorial link : https://upmostly.com/tutorials/form-validation-using-custom-react-hooks/
const ZCourseForm = () => {
  const classes = useStyles();

  //callback
  const studentCreated = () => {
    alert(`New student ${inputs.studentName} created`);
  };

  //initial values + callback
  const {inputs, handleInputChange, handleSubmit, errors} = useZSForm(
    {studentName: '', studentLastname: ''},
    studentCreated,
    Svalidate,
  );

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            require
            className={classes.margin}
            label='Name'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='studentName'
            type='text'
            onChange={handleInputChange}
            value={inputs.studentName}
          />
          {errors.studentName && <p>{errors.studentName}</p>}
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            require
            className={classes.margin}
            label='Last Name'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='studentLastname'
            type='text'
            onChange={handleInputChange}
            value={inputs.studentLastname}
          />
          {errors.studentLastname && <p>{errors.studentLastname}</p>}
        </ThemeProvider>
        <ZButton>
          <button className='btn--transparent' type='submit'>
            Submit student
          </button>
        </ZButton>
      </form>
    </React.Fragment>
  );
};

export default ZCourseForm;
