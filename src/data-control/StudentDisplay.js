import React, { useState, useEffect } from 'react';

import Controller from '../controller';

const StudentDisplay = () => {
  const [students, setStudents] = useState({});

  const onStudentValue = (val) => {
    setStudents((prevState) => (val !== null) ? val : {});
  }

  useEffect(() => {
    Controller.setUpOnStudentsValue(onStudentValue);
  }, [])

  return (
    <div>
      <h1>Students List</h1>
      {Object.keys(students).map((key, index) => {
        const student = students[key];
        return <p key={key}>
          {Object.values(student).join(" | ")} <button onClick={() => { Controller.removeStudent(key) }}>delet</button>
        </p>;
      })}
    </div>
  )
}

export default StudentDisplay;