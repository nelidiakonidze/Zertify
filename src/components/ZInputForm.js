import React, {useState, useInput} from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import ZButton from '../components/layout/ZButton';

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
function ZForm() {
  const classes = useStyles();

  //declare a state variable and a function to allow us to update this state later
  //+ give an initial value to those variables
  const [courseName, setCourseName] = useState('');
  const [courseHours, setCourseHours] = useState('');

  // declare functions
  const handleSubmit = e => {
    e.preventDefault();
    alert(`The course "${courseName}" has been submitted`);
  };

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
            value={courseName}
            type='text'
            onChange={e => setCourseName(e.target.value)}
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Hours'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='courseHours'
            value={courseHours}
            type='number'
            onChange={e => setCourseHours(e.target.value)}
          />
        </ThemeProvider>
      </form>
      <React.Fragment>
        <ZButton type='submit' value='submit'>
          Submit
        </ZButton>
      </React.Fragment>
      <h2>
        {courseName} {courseHours}
      </h2>
    </React.Fragment>
  );
}

export default ZForm;
