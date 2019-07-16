import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import './ZStudenTable.css';

// component style : theme for cells
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#efa72d',
    color: 'whitesmoke',
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
    maxHeight: '70vh',
    width: '85vw',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
    justifyContent: 'center',
  },
  table: {
    minWidth: 'auto',
  },
  head: {
    minWidth: 'auto !important',
    position: 'sticky',
    top: 0,
  },
  h1: {
    fontSize: '2rem',
    margin: '10px',
    color: 'whitesmoke',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 1)',
  },
  container: {
    minHeight: 'calc(100vh - 45px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    cursor: 'pointer',
  },
}));

// component structure
function ZStudentTable({listStudents, selectStudent, deleteOnClick}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>
        Select an eligible student for a certification
      </h1>
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.head}>
                  First Name
                </StyledTableCell>
                <StyledTableCell className={classes.head}>
                  Last Name
                </StyledTableCell>
                <StyledTableCell className={classes.head}>
                  Email
                </StyledTableCell>
                <StyledTableCell className={classes.head}>
                  Course
                </StyledTableCell>
                <StyledTableCell className={classes.head}> </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listStudents.map(student => (
                <StyledTableRow key={student.id}>
                  <StyledTableCell>
                    {JSON.stringify(student.firstName).slice(1, -1)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {JSON.stringify(student.lastName).slice(1, -1)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {JSON.stringify(student.email).slice(1, -1)}
                  </StyledTableCell>
                  {student.courses.map(course => (
                    <StyledTableCell key={course.id}>
                      {JSON.stringify(course.name).slice(1, -1)}
                    </StyledTableCell>
                  ))}
                  <StyledTableCell>
                    <button
                      className='button'
                      onClick={() => selectStudent(student.id)}>
                      Select
                    </button>
                    <DeleteIcon
                      className={classes.btn}
                      key={student.id}
                      onClick={() => deleteOnClick(student.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}

export default ZStudentTable;
