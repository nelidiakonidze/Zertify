import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// component style : theme for cells
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

// component style : theme for rows
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

// component style
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 'auto',
  },
}));

// component structure
function ZStudentTable({listStudents}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell>LastName</StyledTableCell>
            <StyledTableCell>Reference</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listStudents.map(student => (
            <StyledTableRow key={student.id}>
              <StyledTableCell>{student.first_name}</StyledTableCell>
              <StyledTableCell>{student.last_name}</StyledTableCell>
              <StyledTableCell>{student.id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ZStudentTable;
