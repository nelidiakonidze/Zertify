import React from 'react';
//template
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import ZButton from '../layout/ZButton';
import './button.css';
//hooks for the form
import useZForm from './useZForm';

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

//to keep the style of this function AND pass props to the clid we must use hooks
const ZCourseForm = () => {
  const classes = useStyles();

  //callback
  const courseCreated = () => {
    alert(`New student ${inputs.studentName} created`);
  };

  //initial values + callback
  const {inputs, handleInputChange, handleSubmit} = useZForm(
    {studentName: '', studentLastname: ''},
    courseCreated,
  );

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Name'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='studentName'
            type='text'
            onChange={handleInputChange}
            value={inputs.studentName}
            require
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Last Name'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='studentLastname'
            type='text'
            onChange={handleInputChange}
            value={inputs.studentLastname}
          />
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
