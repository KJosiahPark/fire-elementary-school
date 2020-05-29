import React, { useState, useEffect } from 'react';

import Controller from '../controller';

const TeacherDisplay = () => {
  const [teachers, setTeachers] = useState({});

  const onTeacherValue = (val) => {
    setTeachers((prevState) => (val !== null) ? val : {});
  }

  useEffect(() => {
    Controller.setUpOnTeachersValue(onTeacherValue);
  }, [])

  return (
    <div>
      <h1>Teachers List</h1>
      {Object.keys(teachers).map((key, index) => {
        const teacher = teachers[key];
        return <p key={key}>
          {Object.values(teacher).join(" | ")} <button onClick={() => { Controller.removeTeacher(key) }}>delet</button>
        </p>;
      })}
    </div>
  )
}

export default TeacherDisplay;