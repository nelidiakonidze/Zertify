import React from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import ZButton from '../components/layout/ZButton';
// React hook
import {useState} from 'react';

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
  //declare state a state variable and a function to allow us to update this state later
  //give an initial value to those variables, here empty
  //tuto link : https://www.freecodecamp.org/news/how-to-get-started-with-react-hooks-controlled-forms-826c99943b92/
  const [courseName, setCourseName] = useState('hello');
  const [courseHours, setCourseHours] = useState('1000');

  return (
    <React.Fragment>
      <form className={classes.root}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label='Course'
            variant='outlined'
            id='mui-theme-provider-outlined-input'
            name='courseName'
            value={courseName}
            onChange={e => setCourseName(e.target.value)}
            type='text'
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
            onChange={e => setCourseHours(e.target.value)}
            type='number'
          />
        </ThemeProvider>
      </form>
      <React.Fragment>
        <ZButton type='submit'>Submit</ZButton>
      </React.Fragment>
    </React.Fragment>
  );
}

export default ZForm;
