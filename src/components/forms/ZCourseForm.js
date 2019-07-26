////
//  COURSE  //
////

import React from 'react';
//template
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
//hooks for the form
import useZCForm from './useZCForm';
import Cvalidate from './CFormValidationRules';
import './ZForm.css';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: 4,
    backgroundColor: 'whitesmoke',
  },
}));

//to keep the style of this function AND have state we must use hooks
// tutorial link : https://upmostly.com/tutorials/form-validation-using-custom-react-hooks/
const ZCourseForm = ({updateFetchCoursesHandler}) => {
  const classes = useStyles();

  //callback
  const courseCreated = () => {
    alert(`New course ${inputs.courseName} created`);
    updateFetchCoursesHandler();
  };

  //initial values + callback
  const {inputs, handleInputChange, handleSubmit, errors} = useZCForm(
    {courseName: '', courseHours: ''},
    courseCreated,
    Cvalidate,
  );

  return (
    <React.Fragment>
      <form className='flex-inputs' onSubmit={handleSubmit}>
        <ThemeProvider>
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
        <ThemeProvider>
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
        <button className='button' type='submit'>
          Submit course
        </button>
      </form>
    </React.Fragment>
  );
};

export default ZCourseForm;
