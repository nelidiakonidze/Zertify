////
//  COURSE  //
////

import React from 'react';
//template
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import ZButton from '../layout/ZButton';
//hooks for the form
import useZCForm from './useZCForm';
import Cvalidate from './CFormValidationRules';

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
  const courseCreated = () => {
    alert(`New course ${inputs.courseName} created`);
  };

  //initial values + callback
  const {inputs, handleInputChange, handleSubmit, errors} = useZCForm(
    {courseName: '', courseHours: ''},
    courseCreated,
    Cvalidate,
  );

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Course'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='courseName'
            type='text'
            onChange={handleInputChange}
            value={inputs.courseName}
            require
          />
        </ThemeProvider>
        {errors.courseName && <p>{errors.courseName}</p>}
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Hours'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='courseHours'
            type='number'
            onChange={handleInputChange}
            value={inputs.courseHours}
            require
          />
        </ThemeProvider>
        {errors.courseHours && <p>{errors.courseHours}</p>}
        <ZButton>
          <button className='btn--transparent' type='submit'>
            Submit course
          </button>
        </ZButton>
      </form>
    </React.Fragment>
  );
};

export default ZCourseForm;
