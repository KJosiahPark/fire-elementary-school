import React, { useState, useEffect } from 'react';

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

  const displayOneStudent = (student) => {
    const {enrollment, ...rest} = student;
    return <div>
      <p>{Object.values(rest).join(" | ")}</p>
      <p>
        {(enrollment !== undefined
          ? Object.values(enrollment).map(id => classes[id].name)
          : []).join(", ")}
      </p>
    </div>;
  }

  return (
    <div>
      <h1>Students List</h1>
      {Object.keys(students).map((studentId, index) => {
        const student = students[studentId];
        return <div key={studentId}>
          {displayOneStudent(student)}
          {props.trunc && <div>
            <StudentPickClass studentId={studentId} classes={classes}/>
            <button onClick={() => { Controller.removeStudent(studentId) }}>delet</button>
          </div>}
        </div>;
      })}
    </div>
  )
}

export default StudentDisplay;

