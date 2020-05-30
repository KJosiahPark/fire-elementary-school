import React, { useState } from 'react';
import Controller from '../controller';

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
      <input
        name="lastName"
        placeholder="last name"
        onChange={handleEnteredStudentNameChange}
      />
      <input
        name="firstName"
        placeholder="first name"
        onChange={handleEnteredStudentNameChange}
      />
      <input
        name="year"
        placeholder="0"
        onChange={handleEnteredStudentNameChange}
      />
      <button onClick={() => {
        handleRegisterStudentRequest(enteredStudentName);
      }}>
        register student
      </button>
    </div>
  )
}
export default RegisterStudent;