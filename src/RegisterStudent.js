import React, { useState } from 'react';

const RegisterStudent = (props) => {
  const { handleRegisterStudentRequest } = props;

  const [enteredStudentName, setEnteredStudentName] = useState({ firstName: "", lastName: "" });

  const handleEnteredStudentNameChange = (event) => {
    let k = event.target.name; // either "firstName" or "lastName"
    let v = event.target.value; // what user entered
    setEnteredStudentName(prevName => {
      prevName[k] = v;
      return prevName
    });
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
      <button onClick={() => {
        console.log(`${enteredStudentName.lastName}, ${enteredStudentName.firstName}`);
        handleRegisterStudentRequest(enteredStudentName);
      }}>
        register student
      </button>
    </div>
  )
}
export default RegisterStudent;