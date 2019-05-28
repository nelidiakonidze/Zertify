import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// CustomTable.defaultProps = {
//   tableHeaderColor: 'gray',
// };

// CustomTable.propTypes = {
//   tableHeaderColor: PropTypes.oneOf([
//     'warning',
//     'primary',
//     'danger',
//     'success',
//     'info',
//     'rose',
//     'gray',
//   ]),
//   tableHead: PropTypes.arrayOf(PropTypes.string),
//   tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
// };

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
    padding: '50',
  },
  table: {
    minWidth: 700,
  },
}));

function StudentTable() {
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

export default StudentTable;
