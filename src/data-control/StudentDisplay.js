import React, { useState, useEffect } from 'react';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

import Controller from '../controller';
import StudentPickClass from './StudentPickClass'

const StudentDisplay = ({ classes, ...props }) => {
  const [students, setStudents] = useState({});

  useEffect(() => {
    Controller.setUpOnStudentsValue((val) => {
      setStudents((prevState) => (val !== null) ? val : {});
    });
    return (() => {Controller.removeOnStudentsValue()});
  }, [])

  const makeRow = (studentId) => {
    const {lastName, firstName, year, enrollment} = students[studentId];
    return <TableRow key={studentId}>
      <TableCell component="th" scope="row">{`${lastName}, ${firstName}`}</TableCell>
      <TableCell>{year}</TableCell>
      <TableCell>
        {(enrollment !== undefined
          ? Object.values(enrollment).map(id => classes[id].name)
          : []).join(", ")}
      </TableCell>
      {props.trunc && <TableCell>
        <StudentPickClass studentId={studentId} classes={classes}/>
      </TableCell>}
      {props.trunc && <TableCell>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => { Controller.removeStudent(studentId) }}>
          Expell Student
        </Button>
      </TableCell>}
    </TableRow>;
  }

  return (
    <div>
      <h1>Students List</h1>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Classes</TableCell>
              {props.trunc && [
                  <TableCell>Change Professor</TableCell>,
                  <TableCell>Delete Row</TableCell>,
                ]}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(students).map(makeRow)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default StudentDisplay;

