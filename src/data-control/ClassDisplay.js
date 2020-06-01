import React, { useState, useEffect } from 'react';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';

import Controller from '../controller'
import ClassPickTeacher from './ClassPickTeacher';

const ClassDisplay = (props) => {
  const { classes, setClasses, teachers } = props;

  useEffect(() => {
    Controller.setUpOnClassesValue((val) => {
      setClasses((val !== null) ? val : {});
    });
    return (() => {Controller.removeOnClassesValue()})
  }, [])

  const makeRow = (classId) => {
    const {name, teacher} = classes[classId];
    return (
      <TableRow key={classId}>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell>
          {
            (teachers[teacher] !== undefined) //class has a teacher
            ? `${teachers[teacher].lastName}, ${teachers[teacher].firstName}` //print teacher name
            : "TBD" // print placeholer
          }
        </TableCell>
        {props.trunc &&
          <TableCell>
            <ClassPickTeacher classId={classId} teachers={teachers} />
          </TableCell>}
        {props.trunc &&
          <TableCell>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => { Controller.removeClass(classId) }}>
              Delete Class
            </Button>
          </TableCell>}
      </TableRow>
    );
  }

  return (
    <div>
      <h1>Classes List</h1>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Class Name</TableCell>
              <TableCell>Professor Name</TableCell>
              {props.trunc && [
                  <TableCell>Change Professor</TableCell>, 
                  <TableCell>Delete Row</TableCell>,
                ]}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(classes).map(makeRow)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ClassDisplay;