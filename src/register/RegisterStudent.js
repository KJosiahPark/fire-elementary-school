import React, { useState } from 'react';
import Controller from '../controller';

import { TextField, Button } from '@material-ui/core'

const RegisterStudent = (props) => {
  const [enteredStudentName, setEnteredStudentName] = useState({ firstName: "", lastName: "", year: -1});

  const handleEnteredStudentNameChange = (event) => {
    let k = event.target.name; // either "firstName" or "lastName"
    let v = event.target.value; // what user entered
    setEnteredStudentName(prevName => {
      prevName[k] = v;
      return prevName
    });
  }

  const handleRegisterStudentRequest = (studentNameInfo) => {
    const { lastName, firstName, year } = studentNameInfo;
    Controller.registerStudent(lastName, firstName, year);
  }

  return (
    <div>
      <TextField
        size="small"
        variant="outlined"
        name="lastName"
        label="last name"
        onChange={handleEnteredStudentNameChange}
      />
      <TextField
        size="small"
        variant="outlined"
        name="firstName"
        label="first name"
        onChange={handleEnteredStudentNameChange}
      />
      <TextField
        size="small"
        variant="outlined"
        name="year"
        label="year"
        onChange={handleEnteredStudentNameChange}
      />
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
        handleRegisterStudentRequest(enteredStudentName);
      }}>
        register student
      </Button>
    </div>
  )
}
export default RegisterStudent;