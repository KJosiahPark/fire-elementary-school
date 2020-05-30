import React, { useState } from 'react';
import Controller from '../controller';

const ClassPickTeacher = ({ classId, teachers }) => {
  const [classTeacherInput, setClassTeacherInput] = useState({});

  const updateTeacherAssign = (classId, teacher) => {
    setClassTeacherInput({
      [classId]: teacher,
    });
  }

  const submitTeacherAssign = (classId) => {
    Controller.assignClassToTeacher(classId, classTeacherInput[classId]);
    setClassTeacherInput({});
  }

  return (
    <div>
      <input
        list="teacherSelect"
        placeholder="assign teacher"
        value={classTeacherInput[classId] !== undefined ? classTeacherInput[classId] : ""}
        onChange={(event) => {
          updateTeacherAssign(classId, event.target.value);
        }} />
      <datalist id="teacherSelect">
        {Object.keys(teachers).map((k, i) => {
          return <option key={k} value={k}>{teachers[k].lastName}, {teachers[k].firstName}</option>
        })}
      </datalist>

      <button onClick={() => {
        submitTeacherAssign(classId);
      }}>assign teacher</button>
    </div>
  )
}

export default ClassPickTeacher;