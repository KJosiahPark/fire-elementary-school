import React, { useState, useEffect } from 'react';

import Controller from '../controller'
import ClassPickTeacher from './ClassPickTeacher';

const ClassDisplay = (props) => {
  const { classes, setClasses, teachers} = props;

  useEffect(() => {
    Controller.setUpOnClassesValue((val) => {
      setClasses((val !== null) ? val : {});
    });
    return (() => {Controller.removeOnClassesValue()})
  }, [])

  const displayOneStudent = (oneClass) => {
    const {teacher, ...rest} = oneClass;
    return <div>
      <p>{Object.values(rest).join(" | ")}</p>
      <p>
        {(teachers[teacher] !== undefined)
          ? `${teachers[teacher].lastName}, ${teachers[teacher].firstName}`
          : ""}
      </p>
    </div>;
  }

  return (
    <div>
      <h1>Classes List</h1>
      {Object.keys(classes).map((classId, index) => {
        const oneClass = classes[classId];
        return <div key={classId}>
          {displayOneStudent(oneClass)}
          <ClassPickTeacher classId={classId} teachers={teachers} />
          <button onClick={() => { Controller.removeClass(classId) }}>delet</button>
        </div>;
      })}
    </div>
  )
}

export default ClassDisplay;