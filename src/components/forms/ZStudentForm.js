////
//  STUDENT  //
////

import React from 'react';
//template
import {makeStyles, createMuiTheme, withStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
//import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
//hooks for the form
import useZSForm from './useZSForm';
import Svalidate from './SFormValidationRules';
import './ZForm.css';

//style
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const BootstrapInput = withStyles(theme => ({
  root: {
    borderRadius: 4,
    border: '1px solid #ced4da',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  margin: {
    margin: theme.spacing(1),
  },
}))(InputBase);

//to keep the style of this function AND have state we must use hooks
// tutorial link : https://upmostly.com/tutorials/form-validation-using-custom-react-hooks/
function ZCourseForm({listCourses}) {
  const classes = useStyles();

  //callback
  const studentCreated = () => {
    alert(`New student ${inputs.studentName} created`);
  };

  //initial values + callback
  const {inputs, handleInputChange, handleSubmit, errors} = useZSForm(
    {studentName: '', studentLastname: '', courseId: ''},
    studentCreated,
    Svalidate,
  );
  return (
    <React.Fragment>
      <form className='flex-inputs' onSubmit={handleSubmit}>
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
        <ThemeProvider theme={theme}>
          <FormControl className={classes.margin}>
            {/* <InputLabel htmlFor='age-customized-native-simple'>
              Course Id
            </InputLabel> */}
            <Select
              native
              className={classes.margin}
              label='Course Id'
              variant='outlined'
              id='outlined-age-native-simple'
              name='courseId'
              type='text'
              onChange={handleInputChange}
              value={inputs.courseId}
              input={<BootstrapInput />}>
              <option disabled selected value>
                Select a course
              </option>
              {listCourses &&
                listCourses.map(course => (
                  <option value={course.id}>{course.name}</option>
                ))}
            </Select>
          </FormControl>
          {errors.courseId && <p>{errors.courseId}</p>}
        </ThemeProvider>
        <button className='button select-back-btn' type='submit'>
          Submit student
        </button>
      </form>
    </React.Fragment>
  );
}

export default ZCourseForm;
