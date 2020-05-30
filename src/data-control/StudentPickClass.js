import React, { useState } from 'react';
import Controller from '../controller';

const StudentPickClass = ({ studentId, classes }) => {
  const [studentClassInput, setStudentClassInput] = useState({});

  const updateClassAssign = (studentId, classId) => {
    setStudentClassInput({
      [studentId]: classId,
    });
  }

  const submitClassAssign = (studentId) => {
    Controller.assignStudentToClass(studentId, studentClassInput[studentId]);
    setStudentClassInput({});
  }

  return (
    <div>
      <input
        list="classSelect"
        placeholder="enroll in class"
        value={studentClassInput[studentId] !== undefined ? studentClassInput[studentId] : ""}
        onChange={(event) => {
          updateClassAssign(studentId, event.target.value);
        }} />
      <datalist id="classSelect">
        {Object.keys(classes).map((k, i) => {
          return <option key={k} value={k}>{classes[k].name}</option>
        })}
      </datalist>

      <button onClick={() => {
        submitClassAssign(studentId);
      }}>enroll</button>
    </div>
  )
}

export default StudentPickClass;