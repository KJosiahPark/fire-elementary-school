import React, { useState, useEffect } from 'react';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

import Controller from '../controller';

const TeacherDisplay = ({ teachers, setTeachers, ...props }) => {

  useEffect(() => {
    Controller.setUpOnTeachersValue((val) => {
      setTeachers((val !== null) ? val : {});
    });
    return (() => {Controller.removeOnTeachersValue()});
  }, [])

  const makeRow = (teacherId) => {
    const { lastName, firstName, salary } = teachers[teacherId];
    return <TableRow key={teacherId}>
      <TableCell component="th" scope="row">{`${lastName}, ${firstName}`}</TableCell>
      <TableCell>{salary}</TableCell>
      {props.trunc && 
        <TableCell>
          <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => { Controller.removeTeacher(teacherId) }}>
          Remove Teacher
          </Button>
        </TableCell>}
    </TableRow>;
  }

  return (
    <div>
      <h1>Teachers List</h1>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
              {props.trunc &&
                <TableCell>Delete Row</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(teachers).map(makeRow)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TeacherDisplay;