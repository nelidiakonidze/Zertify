import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#FF8E53',
    color: 'white',
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(FirstName, Course) {
  return {FirstName, Course};
}

const rows = [
  createData('Camille', 'Zertify'),
  createData('Neli', 'Zertify'),
  createData('Bernadetta', 'Zertify'),
  createData('Raphael', 'Zertify'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 'auto',
  },
}));

function ZStudentTable() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.FirstName}>
              <StyledTableCell component='th' scope='row'>
                {row.FirstName}
              </StyledTableCell>
              <StyledTableCell>{row.Course}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ZStudentTable;
