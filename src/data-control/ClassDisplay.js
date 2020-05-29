import React, { useState, useEffect } from 'react';

import Controller from '../controller'

const ClassDisplay = () => {
  const [classes, setClasses] = useState({});

  const onClassValue = (val) => {
    setClasses((prevState) => (val !== null) ? val : {});
  }

  useEffect(() => {
    Controller.setUpOnClassesValue(onClassValue);
  }, [])

  const [classTeacherInput, setClassTeacherInput] = useState({});

  const updateTeacherAssign = (classId, event) => {
    let teacher = event.target.value;
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
      <h1>Classes List</h1>
      {Object.keys(classes).map((key, index) => {
        const oneClass = classes[key];
        return <p key={key}>
          {Object.values(oneClass).join(" | ")}
          {/* <input
            list="teacherSelect"
            placeholder="assign teacher"
            value={classTeacherInput[key] !== undefined ? classTeacherInput[key].l : ""}
            onChange={(event) => {
              this.updateTeacherAssign(key, event);
            }} />
          <datalist id="teacherSelect">
            {Object.keys(teachers).map((k, i) => {
              return <option key={k} value={k}>{teachers[k].lastName}, {teachers[k].firstName}</option>
            })}
          </datalist> */}
          <button onClick={() => {
            submitTeacherAssign(key);
          }}>assign teacher</button>
          <button onClick={() => { Controller.removeClass(key) }}>delet</button>
        </p>;
      })}
    </div>
  )
}

export default ClassDisplay;