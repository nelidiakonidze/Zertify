import React from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';

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

function ZForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label='Name'
          variant='outlined'
          id='mui-theme-provider-outlined-input'
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label='Course'
          variant='outlined'
          id='mui-theme-provider-outlined-input'
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label='Hours'
          variant='outlined'
          id='mui-theme-provider-outlined-input'
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label='Teacher'
          variant='outlined'
          id='mui-theme-provider-outlined-input'
        />
      </ThemeProvider>
    </div>
  );
}

export default ZForm;
