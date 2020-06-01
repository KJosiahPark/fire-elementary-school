import React, { useState } from 'react';
import Controller from '../controller';

import { TextField, Button } from '@material-ui/core'

const RegisterTeacher = (props) => {
  const [enteredTeacherName, setEnteredTeacherName] = useState({ lastName: "", firstName: "", salary: "" });

  const handleEnteredTeacherNameChange = (event) => {
    let k = event.target.name; // either "firstName" or "lastName"
    let v = event.target.value; // what user entered
    setEnteredTeacherName(prevName => {
      prevName[k] = v;
      return prevName
    });
  }

  const handleRegisterTeacherRequest = (teacherNameInfo) => {
    const { lastName, firstName, salary } = teacherNameInfo;
    Controller.registerTeacher(lastName, firstName, salary);
  }

  return (
    <div>
      <TextField
        size="small"
        variant="outlined"
        name="lastName"
        label="last name"
        onChange={handleEnteredTeacherNameChange}
      />
      <TextField
        size="small"
        variant="outlined"
        name="firstName"
        label="first name"
        onChange={handleEnteredTeacherNameChange}
      />
      <TextField
        size="small"
        variant="outlined"
        name="salary"
        label="salary"
        onChange={handleEnteredTeacherNameChange}
      />
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
        handleRegisterTeacherRequest(enteredTeacherName);
      }}>
        register teacher
        </Button>
    </div>
  )
}

export default RegisterTeacher;