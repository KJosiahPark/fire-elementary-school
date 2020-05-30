import React, { useState } from 'react';
import Controller from '../controller';

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
      <input
        name="lastName"
        placeholder="last name"
        onChange={handleEnteredTeacherNameChange}
      />
      <input
        name="firstName"
        placeholder="first name"
        onChange={handleEnteredTeacherNameChange}
      />
      <input
        name="salary"
        placeholder="salary"
        onChange={handleEnteredTeacherNameChange}
      />
      <button onClick={() => {
        console.log(`${enteredTeacherName.lastName}, ${enteredTeacherName.firstName}`);
        handleRegisterTeacherRequest(enteredTeacherName);
      }}>
        register teacher
        </button>
    </div>
  )
}

export default RegisterTeacher;