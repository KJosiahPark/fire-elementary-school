import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Controller from './controller'
import DataDisplay from './DataDisplay'

const App = () => {
  const [enteredClass, setEnteredClass] = useState("");

  const handleEnteredClassChange = (event) => {
    setEnteredClass(event.target.value);
  }

  
  const [enteredTeacherName, setEnteredTeacherName] = useState({firstName: "", lastName: ""});

  const handleEnteredTeacherNameChange = (event) => {
    let k = event.target.name; // either "firstName" or "lastName"
    let v = event.target.value; // what user entered
    setEnteredTeacherName(prevLName => {
      prevLName[k] = v;
      return prevLName
    });
  }


  const [enteredStudentName, setEnteredStudentName] = useState({firstName: "", lastName: ""});

  const handleEnteredStudentNameChange = (event) => {
    let k = event.target.name; // either "firstName" or "lastName"
    let v = event.target.value; // what user entered
    setEnteredStudentName(prevLName => {
      prevLName[k] = v;
      return prevLName
    });
  }

  return (
    <div>
      <h1>Welcome, admin</h1>
      <div>
        <input
          placeholder="class name"
          onChange={handleEnteredClassChange}
        />
        <button onClick={() => Controller.registerClass(enteredClass)}>register class</button>
      </div>
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
        <button onClick={() => {
          Controller.registerTeacher(enteredTeacherName.lastName, enteredTeacherName.firstName)
        }}>
          register teacher
        </button>
      </div>
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
          Controller.registerStudent(enteredStudentName.lastName, enteredStudentName.firstName)
        }}>
          register student
        </button>
      </div>
      <DataDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));